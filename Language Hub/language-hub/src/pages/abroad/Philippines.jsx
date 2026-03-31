import React from 'react';
import CountryLayout from '../../components/abroad/CountryLayout';

const Philippines = () => {
    return (
        <CountryLayout
            country="Philippines"
            heroImage="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&q=80&w=2070"
            heroTitle="The Gateway to Health."
            heroSubtitle="The most affordable destination for elite medical and nursing education in Asia."
            coursesImage="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=1200"
            requirementsImage="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=1200"
            perks={[
                "Low tuition fees & living",
                "High value for money (MBBS focus)",
                "English-speaking environment",
                "Globally recognized medical degrees"
            ]}
            tests={["IELTS/TOEFL/PTE", "SAT/ACT/GRE/GMAT"]}
            documents={[
                "Academic Transcripts",
                "Passport copy",
                "National Medical Admission Test (NMAT)",
                "Police Clearance Certificate"
            ]}
            intakes={[
                "June/July - Primary Intake",
                "November/December - Secondary Intake"
            ]}
            workRights={[
                "Authorization needed for external work.",
                "Primary focus on research or on-campus support.",
                "Affordable medical programs from 2.5–5 lakhs per year."
            ]}
            topCourses={[
                { name: "Medicine (MD/MBBS)", image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=800" },
                { name: "Nursing", image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800" },
                { name: "Engineering", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" },
                { name: "Information Technology (IT)", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
                { name: "Business Administration", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab" }
            ]}
            whyStudy="With MBBS programs costing significantly less than other international destinations, the Philippines provides a premium English-speaking environment for future medical professionals."
            seoTitle="Study in the Philippines | Affordable Medical Degrees | Bluestone Overseas"
            seoDescription="Your gateway to medical excellence. Get English-medium healthcare degrees in the Philippines with expert admission guidance from Bluestone Overseas."
        />
    );
};

export default Philippines;
