import React from 'react';
import CountryLayout from '../../components/abroad/CountryLayout';

const SouthKorea = () => {
    return (
        <CountryLayout
            country="South Korea"
            heroImage="https://images.unsplash.com/photo-1546874177-9e664107314e?auto=format&fit=crop&q=80&w=2070"
            heroTitle="The High-Tech Hub."
            heroSubtitle="Study at the speed of light in the heart of Asia's technological revolution."
            coursesImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200"
            requirementsImage="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1200"
            perks={[
                "Numerous GKS & University scholarships",
                "World's fastest internet",
                "Hyper-efficient public transport",
                "Managed daily expenses & costs"
            ]}
            tests={["IELTS 5.5 - 6.5+"]}
            documents={[
                "Academic Transcripts",
                "Study Plan & Self-Intro",
                "Korean Proficiency (TOPIK) - Optional",
                "Financial Verification"
            ]}
            intakes={[
                "March (Spring) - Primary",
                "September (Fall) - Secondary"
            ]}
            workRights={[
                "Up to 20-30 hours per week (standard).",
                "6 months initial stay-back for job hunting.",
                "Extended options up to 2-3 years for skilled talent."
            ]}
            topCourses={[
                { name: "Robotics & AI", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800" },
                { name: "Electronics Engineering", image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=800" },
                { name: "Business Administration (MBA)", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
                { name: "Media & Entertainment", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800" },
            ]}
            whyStudy="Experience a high-tech society where tradition meets future-proof innovation. South Korea is exceptionally safe, offering international students high security and a state-of-the-art transportation system."
            seoTitle="Study in South Korea | Tech & Culture Careers | Bluestone Overseas"
            seoDescription="Your gateway to Asia's tech giant. Explore engineering & AI scholarships in South Korea with expert visa and admission support from Bluestone Overseas."
        />
    );
};

export default SouthKorea;
