import React from 'react';
import CountryLayout from '../../components/abroad/CountryLayout';

const Ireland = () => {
    return (
        <CountryLayout
            country="Ireland"
            heroImage="https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&q=80&w=1200"
            heroTitle="The Emerald Isle."
            heroSubtitle="Study in the tech heart of Europe. Ireland offers top-tier academic excellence and a friendly multicultural atmosphere."
            coursesImage="https://images.unsplash.com/photo-1517048676732-d65bc937f952"
            requirementsImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800"
            perks={[
                "Stay back period up to 2 years",
                "English-speaking European nation",
                "Friendly and multicultural community",
                "Global tech hub (Google, Meta, etc.)"
            ]}
            tests={["IELTS", "TOEFL"]}
            documents={[
                "Academic Transcripts",
                "Statement of Purpose",
                "Proof of Funds",
                "Valid Passport"
            ]}
            intakes={[
                "September/October (Autumn) - Main Intake",
                "January/February (Spring) - Minor Intake"
            ]}
            workRights={[
                "Students can work up to 20 hours per week during term time.",
                "Full-time (40 hours) work allowed during vacations.",
                "2-year Graduate Route visa available."
            ]}
            topCourses={[
                { name: "Computer Science (AI, Cybersecurity)", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
                { name: "Data Analytics", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" },
                { name: "Business & Finance", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
                { name: "Pharmaceutical Sciences", image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800" },
                { name: "Engineering", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" }
            ]}
            whyStudy="Ireland is one of the world's most welcoming nations, offering high-quality degrees and excellent post-study work opportunities in the tech and pharma sectors."
            seoTitle="Study in Ireland | Tech Degrees & Stay Back | Bluestone Overseas"
            seoDescription="Your gateway to Irish education. Get expert guidance on IELTS, university applications, and 2-year stay back guidance with Bluestone Overseas."
        />
    );
};

export default Ireland;
