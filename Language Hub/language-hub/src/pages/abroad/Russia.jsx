import React from 'react';
import CountryLayout from '../../components/abroad/CountryLayout';

const Russia = () => {
    return (
        <CountryLayout
            country="Russia"
            heroImage="https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&q=80&w=2070"
            heroTitle="The Great Frontier."
            heroSubtitle="Leading the world in aerospace, nuclear technology, and medicine."
            coursesImage="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200"
            requirementsImage="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=1200"
            perks={[
                "Straightforward entrance (often no IELTS)",
                "Low tuition & cost of living",
                "World leader in specialized engineering",
                "On-campus work opportunities"
            ]}
            tests={["No IELTS/TOEFL for most programs", "TRFL (for Russian-taught)"]}
            documents={[
                "Academic Transcripts",
                "Health & Medical Certificate",
                "Certified Translations",
                "Valid Passport"
            ]}
            intakes={[
                "September (Main intake)",
                "February / August (Secondary)"
            ]}
            workRights={[
                "Part-time work up to 20 hours per week.",
                "No special permit required for most student jobs.",
                "On-campus roles in libraries & labs."
            ]}
            topCourses={[
                { name: "Medicine (MBBS)", image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=800" },
                { name: "Aerospace Engineering", image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=800" },
                { name: "Nuclear Engineering", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" },
                { name: "IT & Computer Science", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
                { name: "International Business", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" }
            ]}
            whyStudy="From nuclear technology to deep-space research, Russia's technical education is world-renowned. With affordable rates and accessible admission paths, it's a top choice for aspiring engineers and medical professionals."
            seoTitle="Study in Russia | Aerospace & Medical Excellence | Bluestone Overseas"
            seoDescription="Discover world-leading technical education in Russia. Master aerospace, nuclear tech, or medicine with simplified admission and expert guidance from Bluestone Overseas."
        />
    );
};

export default Russia;
