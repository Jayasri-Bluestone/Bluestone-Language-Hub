import React from 'react';
import CountryLayout from '../../components/abroad/CountryLayout';

const USA = () => {
    return (
        <CountryLayout
            country="USA"
            heroImage="https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=1200"
            heroTitle="The Land of Dreams."
            heroSubtitle="Home to the world's most prestigious universities and innovation hubs. Redefine your future in the United States."
            coursesImage="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
            requirementsImage="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=800"
            perks={[
                "Top-ranked universities globally",
                "STEM OPT extension (up to 3 years)",
                "High demand and high salaries for graduates",
                "Diverse and innovative environment"
            ]}
            tests={["TOEFL", "IELTS", "SAT/ACT (UG)", "GRE/GMAT (PG)"]}
            documents={[
                "Academic Transcripts",
                "I-20 Form (University Issued)",
                "Financial Documentation",
                "Passport & Photos"
            ]}
            intakes={[
                "Fall (August/September) - Main Intake",
                "Spring (January)"
            ]}
            workRights={[
                "12 months post-graduation through Optional Practical Training (OPT).",
                "24-month STEM extension available for Science, Tech, Engineering, or Math.",
                "Part-time on-campus work allowed during sessions."
            ]}
            topCourses={[
                { name: "Computer Science", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800" },
                { name: "Engineering", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" },
                { name: "Data Science", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800" },
                { name: "Artificial Intelligence", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
                { name: "Business Analytics", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
                { name: "MBA", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
                { name: "Healthcare", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" }
            ]}
            whyStudy="The USA remains the global leader in higher education, offering unparalleled resources, flexibility, and career acceleration for international students."
            seoTitle="Study in USA | Ivy League & STEM Careers Guidance"
            seoDescription="Achieve your American dream. Expert counseling for US university admissions, F1 visas, and scholarships at top-tier institutions."
        />
    );
};

export default USA;