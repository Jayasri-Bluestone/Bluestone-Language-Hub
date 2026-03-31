import React from 'react';
import CountryLayout from '../../components/abroad/CountryLayout';

const UAE = () => {
    return (
        <CountryLayout
            country="UAE"
            heroImage="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2070"
            heroTitle="The Future Hub."
            heroSubtitle="Zero personal income tax and global university branches in the heart of the Middle East."
            coursesImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
            requirementsImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200"
            perks={[
                "No income tax for residents",
                "Prestigious global branch campuses",
                "High employment potential",
                "World-class luxury infrastructure"
            ]}
            tests={["No IELTS required (90% of unis)"]}
            documents={[
                "Passport copy",
                "Educational Certificates",
                "Passport-size photographs",
                "Medical confirmation"
            ]}
            intakes={[
                "September (Fall) - Primary",
                "January (Winter) - Secondary",
                "August - Secondary"
            ]}
            workRights={[
                "15-20 hours per week during semesters.",
                "Full-time (40 hrs) work allowed during breaks.",
                "Up to 2-year post-study work permit."
            ]}
            topCourses={[
                { name: "Artificial Intelligence (AI)", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
                { name: "Data Science & Cybersecurity", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800" },
                { name: "Business Management (MBA)", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
                { name: "Hospitality & Tourism", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800" },
                { name: "Engineering & Healthcare", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d" }
            ]}
            whyStudy="With prestigious international branches in Dubai and Abu Dhabi, the UAE offers a world-class degree with zero personal income tax, maximizing your savings and career growth."
            seoTitle="Study in the UAE | Zero Tax & Global Degrees | Bluestone Overseas"
            seoDescription="Explore education in Dubai and Abu Dhabi. Get globally recognized degrees with high employment potential and post-study work permits from Bluestone Overseas."
        />
    );
};

export default UAE;
