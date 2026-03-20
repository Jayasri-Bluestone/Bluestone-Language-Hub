const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const PORT = 5006;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL Connection Pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Test connection and create table
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Connection Failed details:');
        console.log(' - Host:', process.env.DB_HOST);
        console.log(' - User:', process.env.DB_USER);
        console.log(' - DB Name:', process.env.DB_NAME);
        console.log(' - Password length:', process.env.DB_PASS ? process.env.DB_PASS.length : 0);
        console.error('Error Message:', err.message);
        console.log('\n--- Troubleshooting Tips ---');
        console.log('1. Check if your IP (223.185.27.221) is whitelisted in Hostinger Remote MySQL.');
        console.log('2. Verify if DB_USER and DB_PASS in .env are correct.');
        console.log('3. Ensure DB_NAME is exactly as shown in your hosting panel.');
        console.log('---------------------------\n');
        return;
    }
    console.log('Connected to MySQL database');
    
    // Create table if not exists
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS inquiries (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            phone VARCHAR(20),
            email VARCHAR(255),
            program VARCHAR(255),
            message TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `;
    connection.query(createTableQuery, (err) => {
        connection.release(); // Always release the connection
        if (err) console.error('Error creating table:', err);
    });
});

// Transporter for Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Routes
app.post('/api/contact', (req, res) => {
    const { name, phone, email, program, message } = req.body;

    // Save to Database
    const insertQuery = 'INSERT INTO inquiries (name, phone, email, program, message) VALUES (?, ?, ?, ?, ?)';
    pool.query(insertQuery, [name, phone, email, program, message], (dbErr, result) => {
        if (dbErr) {
            console.error('Database error:', dbErr);
            return res.status(500).json({ success: false, message: 'Database error.' });
        }

        // Send Email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.RECEIVER_EMAIL,
            subject: `New Contact Inquiry from ${name}`,
            text: `
                Name: ${name}
                Phone: ${phone}
                Email: ${email}
                Program: ${program}
                Message: ${message}
            `,
            html: `
                <h3>New Contact Inquiry</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Program/Interest:</strong> ${program}</p>
                <p><strong>Message:</strong> ${message}</p>
            `
        };

        transporter.sendMail(mailOptions, (mailErr, info) => {
            if (mailErr) {
                console.error('Error sending email:', mailErr);
                // We still returned success because it was saved to the DB
                return res.status(200).json({ 
                    success: true, 
                    message: 'Enquiry saved to DB, but failed to send email notification.' 
                });
            }
            console.log('Email sent:', info.response);
            res.status(200).json({ success: true, message: 'Enquiry sent successfully!' });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
