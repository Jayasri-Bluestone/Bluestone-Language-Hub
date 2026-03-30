import React from 'react';
import CountryLayout from '../../components/abroad/CountryLayout';

const UK = () => {
    return (
        <CountryLayout
            country="UK"
            heroImage="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1200"
            heroTitle="A Royal Experience."
            heroSubtitle="Home to the roots of the English language and world-renowned academic rigor. Experience excellence in the United Kingdom."
            coursesImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
            requirementsImage="https://images.unsplash.com/photo-1522071823991-b996ee2f3c98?auto=format&fit=crop&q=80&w=800"
            perks={[
                "World-class education",
                "Shorter degree durations (3-year UG / 1-year Masters)",
                "High cultural diversity",
                "Graduate Route visa (2-3 years work)"
            ]}
            tests={["IELTS", "TOEFL", "PTE"]}
            documents={[
                "Academic Transcripts",
                "Confirmation of Acceptance for Studies (CAS)",
                "Financial Evidence",
                "Valid Passport"
            ]}
            intakes={[
                "September (Autumn) - Primary Intake",
                "January (Spring)"
            ]}
            workRights={[
                "Students can work up to 20 hours per week during term time.",
                "Full-time work allowed during vacations.",
                "PhD students or postgraduate researchers can bring dependants."
            ]}
            topCourses={[
                { name: "Computer Science & AI", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
                { name: "Business & Management (MBA)", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
                { name: "Engineering", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" },
                { name: "Medicine/Nursing", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" },
                { name: "Data Science/Analytics", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3" },
                { name: "Law", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800" }
            ]}
            whyStudy="The UK offers a prestigious education system, shorter course durations, and a rich cultural heritage, making it an ideal choice for ambitious students."
            seoTitle="Study in UK | 1-Year Masters & Work Permit | Bluestone Overseas"
            seoDescription="Launch your career with a world-class UK degree. Get admissions in top Russell Group universities with expert visa guidance from Bluestone Overseas."
        />
    );
};

export default UK;
