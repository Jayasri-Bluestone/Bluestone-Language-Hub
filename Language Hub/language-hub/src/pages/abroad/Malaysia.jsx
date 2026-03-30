import React from 'react';
import CountryLayout from '../../components/abroad/CountryLayout';

const Malaysia = () => {
    return (
        <CountryLayout
            country="Malaysia"
            heroImage="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=1200"
            heroTitle="The Jewel of SE Asia."
            heroSubtitle="Exceptional affordability, world-class education, and vibrant multicultural environment."
            coursesImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            requirementsImage="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800"
            perks={[
                "Low tuition and living costs",
                "World-class education infrastructure",
                "Exceptional affordability",
                "Highly intercultural environment"
            ]}
            tests={["IELTS", "TOEFL", "MUET"]}
            documents={[
                "Academic Transcripts",
                "Enrolment Letter",
                "Financial Evidence",
                "Valid Passport"
            ]}
            intakes={[
                "September/October (Main Intake)",
                "February/March (Main Intake)",
                "May, July, November (Private Universities)"
            ]}
            workRights={[
                "Students can work up to 20 hours per week during semester breaks.",
                "Holidays have to be longer than 7 days to qualify for work.",
                "Study pass cancellation for non-compliance."
            ]}
            topCourses={[
                { name: "Engineering (Civil, Electrical, Mechanical)", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" },
                { name: "Computer Science & IT (AI, Data Science, Cybersecurity)", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
                { name: "Business Management (Accounting, Finance)", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
                { name: "Hospitality & Tourism", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800" },
                { name: "Medical Sciences (MBBS, Pharmacy)", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" }
            ]}
            whyStudy="Malaysia is a highly positive experience for students, offering low-cost tuition, quality degrees, and a diverse multicultural environment."
            seoTitle="Study in Malaysia | Affordability & Visa | Bluestone Overseas"
            seoDescription="Your path to Malaysia's education. Get expert guidance on MUET, IELTS/TOEFL requirements, and student visa filing with Bluestone Overseas."
        />
    );
};

export default Malaysia;
