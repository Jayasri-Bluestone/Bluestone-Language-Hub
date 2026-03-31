import React from 'react';
import CountryLayout from '../../components/abroad/CountryLayout';
import heroImg from '../../assets/swit.png';

const Switzerland = () => {
    return (
        <CountryLayout
            country="Switzerland"
            heroImage={heroImg}
            heroTitle="The Alpine Standard."
            heroSubtitle="The global hub for luxury, finance, and peerless hospitality excellence."
            coursesImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200"
            requirementsImage="https://images.unsplash.com/photo-1454165833772-d99628a5ffa0?auto=format&fit=crop&q=80&w=1200"
            perks={[
                "6+6 Model: 6 mo study + 6 mo paid internship",
                "High living standards",
                "Strong global industry connections",
                "Clean, safe, and elite environments"
            ]}
            tests={["IELTS", "TOEFL", "TestDaF"]}
            documents={[
                "Academic Transcripts",
                "Statement of Purpose (SOP)",
                "CV/Resume",
                "Internship Experience (if any)"
            ]}
            intakes={[
                "September (Fall) - Primary",
                "February (Spring) - Secondary"
            ]}
            workRights={[
                "15-16 hours per week during semesters.",
                "Full-time work allowed during scheduled breaks.",
                "6 months post-study stay-back for non-EU students."
            ]}
            topCourses={[
                { name: "Hospitality Management", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800" },
                { name: "Banking & Finance", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952" },
                { name: "Luxury Brand Management", image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800" },
                { name: "Robotics & AI", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800" },
                { name: "Life Sciences", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"}
            ]}
            whyStudy="With the unique 6+6 model, Swiss universities allow students to gain 6 months of study followed by 6 months of guaranteed, paid professional experience. This earns back tuition costs while building a global career network."
            seoTitle="Study in Switzerland | Hospitality & Finance Hub | Bluestone Overseas"
            seoDescription="Experience precision in education. Master hospitality & finance in Switzerland with guaranteed paid internships and elite placement assistance from Bluestone Overseas."
        />
    );
};

export default Switzerland;
