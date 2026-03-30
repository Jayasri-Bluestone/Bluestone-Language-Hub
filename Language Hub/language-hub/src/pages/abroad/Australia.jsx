import React from 'react';
import CountryLayout from '../../components/abroad/CountryLayout';

const Australia = () => {
    return (
        <CountryLayout
            country="Australia"
            heroImage="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=1200"
            heroTitle="The Land of Oz."
            heroSubtitle="High-quality education, stunning landscapes, and exceptional career prospects. Australia is a top global destination."
            coursesImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
            requirementsImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
            perks={[
                "Pathways to Permanent Residency",
                "High skilled labor demand",
                "Excellent career prospects",
                "Post-study work rights (2-3 years)"
            ]}
            tests={["IELTS (Min 6.0)", "PTE (Min 50)"]}
            documents={[
                "Academic Transcripts",
                "Genuine Temporary Entrant (GTE) Statement",
                "Proof of Funds",
                "Valid Passport"
            ]}
            intakes={[
                "February/March (Primary Intake)",
                "July/August (Mid-year Intake)"
            ]}
            workRights={[
                "48 hours per fortnight while the course is in session.",
                "Unlimited hours are allowed during scheduled breaks.",
                "Violating visa conditions (e.g. working too many hours) can lead to cancellation."
            ]}
            topCourses={[
                { name: "Nursing", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" },
                { name: "Engineering (Civil, Mechanical)", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" },
                { name: "Information Technology / Cybersecurity", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
                { name: "Data Science", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800" },
                { name: "Education", image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800" }
            ]}
            whyStudy="Australia offers a high standard of living, world-class universities, and a multicultural environment that is highly welcoming to international students."
            seoTitle="Study in Australia | Go8 Universities & PR Path | Bluestone Overseas"
            seoDescription="Experience world-class education with a vibrant lifestyle. Bluestone Overseas provides end-to-end support for Australian university admissions and Subclass 500 visa."
        />
    );
};

export default Australia;
