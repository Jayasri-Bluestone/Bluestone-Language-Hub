import React from 'react';
import CountryLayout from '../../components/abroad/CountryLayout';

const France = () => {
    return (
        <CountryLayout
            country="France"
            heroImage="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1200"
            heroTitle="The Cradle of Art."
            heroSubtitle="High-quality education at low-cost public universities. France is a world leader in Fashion, Art, and Business."
            coursesImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            requirementsImage="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45"
            perks={[
                "Low-cost public university education",
                "Subsidized housing (CAF) & transport",
                "English-taught programs globally",
                "Stay back period of 2 years for Masters grads"
            ]}
            tests={[
                "IELTS / TOEFL (English programs)",
                "TCF, DELF / DALF (French programs)"
            ]}
            documents={[
                "Academic Transcripts",
                "Campus France Interview Proof",
                "Valid Passport",
                "Cover Letter / SOP"
            ]}
            intakes={[
                "September/October (Fall Intake)",
                "January/February (Spring Intake)"
            ]}
            workRights={[
                "International students can work up to 20 hours per week.",
                "Benefit from numerous subsidies (CAF, RATP, CROUS).",
                "Transition to job market with post-study visas."
            ]}
            topCourses={[
                { name: "Business Management (MBA)", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
                { name: "Engineering / Data Science", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" },
                { name: "Fashion Design", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=800" },
                { name: "Culinary Arts", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800" },
                { name: "Luxury Brand Management", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800" }
            ]}
            whyStudy="France offers a highly subsidized study experience with world-class programs in some of the most beautiful and culturally rich cities in Europe."
            seoTitle="Study in France | Fashion & Business | Bluestone Overseas"
            seoDescription="Expert admissions for France. Get expert guidance on IELTS/TOEFL requirements, DELF details, and 2-year post-study work routes with Bluestone Overseas."
        />
    );
};

export default France;
