import React from 'react';
import CountryLayout from '../../components/abroad/CountryLayout';

const Canada = () => {
    return (
        <CountryLayout
            country="Canada"
            heroImage="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1200"
            heroTitle="The Great North."
            heroSubtitle="Discover a world of opportunities in a country known for its welcoming culture and premier education system."
            coursesImage="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45"
            requirementsImage="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=800"
            perks={[
                "Affordable tuition fees",
                "Post-graduation work permits",
                "Pathways to permanent residency",
                "Diverse and inclusive society"
            ]}
            tests={["IELTS", "TOEFL", "PTE"]}
            documents={[
                "Academic Transcripts",
                "Statement of Purpose (SOP)",
                "Proof of Funds",
                "Valid Passport"
            ]}
            intakes={[
                "September (Fall) - Primary",
                "January (Winter)",
                "May (Summer)"
            ]}
            workRights={[
                "Work up to 20 hours per week during academic sessions.",
                "Full-time work allowed during scheduled breaks.",
                "Post-Graduate Work Permit (PGWP) allows long-term careers."
            ]}
            topCourses={[
                { name: "Business & Project Management", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
                { name: "Computer Science & IT", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
                { name: "Engineering", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" },
                { name: "Healthcare & Nursing", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" },
                { name: "Data Analytics", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f" }
            ]}
            whyStudy="Canada is ranked as one of the best countries for quality of life, offering a stable economy and a high standard of education for international students."
            seoTitle="Study in Canada | PGWP & Permanent Residency Guidance"
            seoDescription="Your gateway to Canada education. Get expert guidance on student visas (SDS), PGWP, and top university admissions with Bluestone Overseas."
        />
    );
};

export default Canada;