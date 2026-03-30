import React from 'react';
import CountryLayout from '../../components/abroad/CountryLayout';

const Denmark = () => {
    return (
        <CountryLayout
            country="Denmark"
            heroImage="https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&q=80&w=1200"
            heroTitle="The Land of Hygge."
            heroSubtitle="Focus on equality, renewable energy, and world-class design. Denmark is a top destination for families and students alike."
            coursesImage="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&q=80&w=800"
            requirementsImage="https://images.unsplash.com/photo-1516321318423-f06f85e51dbb?auto=format&fit=crop&q=80&w=800"
            perks={[
                "Global leader in Renewable Energy",
                "Spouses of students have full-time work rights",
                "3-year stay back period for graduates",
                "Equality-focused education model"
            ]}
            tests={["IELTS (6.0–7.0)", "TOEFL (80–100+ iBT)"]}
            documents={[
                "Academic Transcripts",
                "Proof of English Proficiency",
                "Financial Evidence",
                "Valid Passport"
            ]}
            intakes={[
                "September/October (Autumn) - Primary Intake",
                "February/March (Spring)"
            ]}
            workRights={[
                "Part-time work up to 20 hours per week during studies.",
                "Full-time work allowed during June, July, and August.",
                "3-year residence permit to find employment after graduation."
            ]}
            topCourses={[
                { name: "IT / Data Science", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
                { name: "Renewable Energy", image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&q=80&w=800" },
                { name: "Environmental Science", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800" },
                { name: "Architecture", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800" },
                { name: "Business Administration", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" }
            ]}
            whyStudy="Denmark offers a perfect balance of study and life, with a strong focus on sustainability and innovation, making it ideal for international students."
            seoTitle="Study in Denmark | Renewable Energy & Family Visas | Bluestone Overseas"
            seoDescription="Your gateway to Denmark education. Get expert guidance on IELTS, university applications, and 3-year stay back rules with Bluestone Overseas."
        />
    );
};

export default Denmark;
