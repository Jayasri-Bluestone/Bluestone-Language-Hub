import React from 'react';
import CountryLayout from '../../components/abroad/CountryLayout';
import singaporeHero from '../../assets/singapore.png';

const Singapore = () => {
    return (
        <CountryLayout
            country="Singapore"
            heroImage={singaporeHero}
            heroTitle="The Lion City."
            heroSubtitle="Industry-aligned curriculum, high employability, and a vibrant hub for tech and finance."
            coursesImage="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
            requirementsImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
            perks={[
                "STVP (Short-Term Visit Pass) to scan for work post-grad",
                "Long Term Visit Pass (LTVP) for job searching",
                "Industry-aligned curriculum",
                "Admission requires 60–90% in prior education"
            ]}
            tests={["IELTS (Typically 6.5+)", "TOEFL (90+)"]}
            documents={[
                "Academic Transcripts",
                "Statement of Purpose",
                "Financial Evidence",
                "Valid Passport"
            ]}
            intakes={[
                "August/September (Fall) - Primary",
                "January (Spring)"
            ]}
            workRights={[
                "Work not allowed unless official internship or ministry approved.",
                "Public universities/polytechnics offer some work rights.",
                "Non-renewable 1-year LTVP available for job searching."
            ]}
            topCourses={[
                { name: "MBA / Finance", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
                { name: "Data Science / AI", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
                { name: "Engineering", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" },
                { name: "Hospitality & Tourism", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800" },
                { name: "Biomedical Sciences", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" }
            ]}
            whyStudy="Singapore is a top Asian destination, offering a global study environment and high employability in a high-tech city."
            seoTitle="Study in Singapore | Admissions & LTVP Path | Bluestone Overseas"
            seoDescription="Expert admissions for Singapore. Get expert guidance on IELTS/TOEFL requirements, student pass details, and career pathways with Bluestone Overseas."
        />
    );
};

export default Singapore;
