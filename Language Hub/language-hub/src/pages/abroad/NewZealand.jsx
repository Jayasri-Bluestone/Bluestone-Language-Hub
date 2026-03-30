import React from 'react';
import CountryLayout from '../../components/abroad/CountryLayout';

const NewZealand = () => {
    return (
        <CountryLayout
            country="New Zealand"
            heroImage="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200"
            heroTitle="The Land of Long White Cloud."
            heroSubtitle="There are no specific age limits for obtaining a student visa. Enjoy world-class education in one of the most beautiful places on Earth."
            coursesImage="https://images.unsplash.com/photo-1517048676732-d65bc937f952"
            requirementsImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
            perks={[
                "No specific age limits for student visas",
                "Work up to 20 hours per week part-time",
                "Pathway Student Visa covering up to 3 courses",
                "High quality of life and safety"
            ]}
            tests={["IELTS", "TOEFL"]}
            documents={[
                "Academic Transcripts",
                "Medical and Travel Insurance",
                "Chest X-ray / Medical Certificate",
                "Valid Passport"
            ]}
            intakes={[
                "February (Main Intake)",
                "July (Mid-year Intake)"
            ]}
            workRights={[
                "Students can generally work up to 20 hours per week part-time.",
                "Full-time work allowed during scheduled holidays.",
                "Pathway Student Visas can cover up to 5 years of study."
            ]}
            topCourses={[
                { name: "Information Technology (IT)", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
                { name: "Nursing / Healthcare", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" },
                { name: "Engineering", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" },
                { name: "Agriculture", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800" },
                { name: "Business Administration (MBA)", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" }
            ]}
            whyStudy="New Zealand offers a unique education system that encourages innovation and critical thinking, all within a safe and incredibly scenic environment."
            seoTitle="Study in New Zealand | Admissions & Visa | Bluestone Overseas"
            seoDescription="Your gateway to New Zealand education. Get expert guidance on student visas, medical requirements, and top university admissions with Bluestone Overseas."
        />
    );
};

export default NewZealand;
