import React from 'react';
import CountryLayout from '../../components/abroad/CountryLayout';

const Netherlands = () => {
    return (
        <CountryLayout
            country="Netherlands"
            heroImage="https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&q=80&w=1200"
            heroTitle="The Land of the Windmills."
            heroSubtitle="Top-tier, affordable education with high-quality English-taught programs. 95% of locals speak English."
            coursesImage="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45"
            requirementsImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
            perks={[
                "95% of locals speak English",
                "Affordable English-taught programs",
                "Welcoming multicultural society",
                "High employability and career prospects"
            ]}
            tests={["IELTS", "TOEFL"]}
            documents={[
                "Academic Transcripts",
                "Motivation Letter",
                "Financial Evidence",
                "Passport"
            ]}
            intakes={[
                "September (Fall) - Primary Intake",
                "February (Spring)"
            ]}
            workRights={[
                "Non-EU/EEA students can work up to 16 hours per week.",
                "Full-time work allowed during summer months (June-August).",
                "International hub for trade and tech."
            ]}
            topCourses={[
                { name: "Artificial Intelligence", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
                { name: "Data Science", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" },
                { name: "Engineering (Mechanical, Electrical, Civil)", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" },
                { name: "Business and Management", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
                { name: "Environmental Science", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=800" }
            ]}
            whyStudy="The Netherlands is a global leader in business and engineering, offering top-tier degrees in an open-minded and multicultural environment."
            seoTitle="Study in Netherlands | English Degrees & AI | Bluestone Overseas"
            seoDescription="Expert admissions for the Netherlands. Get expert guidance on IELTS/TOEFL requirements, orientation details, and post-study search years with Bluestone Overseas."
        />
    );
};

export default Netherlands;
