import React from 'react';
import CountryLayout from '../../components/abroad/CountryLayout';

const Italy = () => {
    return (
        <CountryLayout
            country="Italy"
            heroImage="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=1200"
            heroTitle="The Jewel of Italy."
            heroSubtitle="The cradle of Art and Culture. Italy offers high-quality education with significantly lower tuition fees."
            coursesImage="https://images.unsplash.com/photo-1517048676732-d65bc937f952"
            requirementsImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
            perks={[
                "Lower tuition than US/UK",
                "English-taught programs globally",
                "Central European travel access",
                "Scholarship opportunities at public schools"
            ]}
            tests={[
                "IELTS / TOEFL (English)",
                "CILS / CELI (Italian)"
            ]}
            documents={[
                "Academic Transcripts",
                "Valid Residence Permit",
                "Proof of Funds",
                "Passport"
            ]}
            intakes={[
                "September (Fall Intake) - Primary",
                "January (Spring Intake)"
            ]}
            workRights={[
                "International students with a residence permit can work up to 20 hours per week.",
                "Stay back for 6 to 12 months to seek employment after graduation.",
                "Professional experience and high employability routes."
            ]}
            topCourses={[
                { name: "Fashion Design", image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&q=80&w=800" },
                { name: "Luxury Management", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800" },
                { name: "Architecture", image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80&w=800" },
                { name: "Sustainable Engineering", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" },
                { name: "Culinary Arts", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800" }
            ]}
            whyStudy="Italy is a masterpiece of education and history, offering specialized degrees in Arts, Fashion, and Engineering with exceptional affordability."
            seoTitle="Study in Italy | Low Tuition & Arts | Bluestone Overseas"
            seoDescription="Expert admissions for Italy. Get expert guidance on IELTS/TOEFL requirements, CILS details, and student visa filing with Bluestone Overseas."
        />
    );
};

export default Italy;
