import React from 'react';
import CountryLayout from '../../components/abroad/CountryLayout';

const Sweden = () => {
    return (
        <CountryLayout
            country="Sweden"
            heroImage="https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&q=80&w=1200"
            heroTitle="The Land of Lagom."
            heroSubtitle="Innovative education with a focus on sustainability, equality, and critical thinking."
            coursesImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
            requirementsImage="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=800"
            perks={[
                "Global leader in innovation & sustainability",
                "High-quality, innovative education model",
                "Focus on equality and critical thinking",
                "High English proficiency nationwide"
            ]}
            tests={["IELTS (6.5, no band < 5.5)", "TOEFL (90)"]}
            documents={[
                "Academic Transcripts",
                "Proof of English Proficiency",
                "Financial Evidence",
                "Passport"
            ]}
            intakes={[
                "August/September (Autumn) - Main Intake",
                "January (Spring)"
            ]}
            workRights={[
                "Graduates can stay back for up to 12 months to find employment.",
                "Innovation focus and sustainability-driven industry.",
                "Multicultural community and high standards of social safety."
            ]}
            topCourses={[
                { name: "Mechanical Engineering", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" },
                { name: "Data Science", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" },
                { name: "Environmental Engineering", image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&q=80&w=800" },
                { name: "International Business", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
                { name: "Life Sciences", image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800" }
            ]}
            whyStudy="Sweden is the perfect place for forward-thinking students, providing specialized degrees in tech, sustainability, and design in a highly egalitarian society."
            seoTitle="Study in Sweden | English Degrees & Stay Back | Bluestone Overseas"
            seoDescription="Expert admissions for Sweden. Get expert guidance on IELTS/TOEFL requirements, student visa details, and 12-month post-study work routes with Bluestone Overseas."
        />
    );
};

export default Sweden;
