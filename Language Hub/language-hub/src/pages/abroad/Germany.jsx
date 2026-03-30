import React from 'react';
import CountryLayout from '../../components/abroad/CountryLayout';

const Germany = () => {
    return (
        <CountryLayout
            country="Germany"
            heroImage="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=1200"
            heroTitle="The Land of Ideas."
            heroSubtitle="Public university education has no Tuition fee. Excellence in Engineering and Science."
            coursesImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
            requirementsImage="https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80&w=800"
            perks={[
                "No Tuition fees at public universities",
                "World-class engineering and IT programs",
                "Internationally recognized degrees",
                "Diverse and welcoming international community"
            ]}
            tests={[
                "German Skills (C1/TestDaF) for German-taught",
                "IELTS / TOEFL for English-taught"
            ]}
            documents={[
                "Academic Transcripts",
                "Proof of Funds (Blocked Account)",
                "Medical Insurance",
                "Valid Passport"
            ]}
            intakes={[
                "October (Winter) - Main Intake",
                "April (Summer)"
            ]}
            workRights={[
                "140 full days or 280 half days per year for international students.",
                "Arts graduates usually require 4 years of graduation (i.e. 4-year Bachelor).",
                "Safe, diverse, and international environment for all students."
            ]}
            topCourses={[
                { name: "Engineering (Mechanical, Automotive, Electrical)", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" },
                { name: "Computer Science/IT (AI, Data Science)", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
                { name: "Business & Management", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
                { name: "Natural Sciences (Biotech, Renewable Energy)", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800"}
            ]}
            whyStudy="Germany is a global leader in technology and innovation, offering free public education and excellent career prospects in a safe environment."
            seoTitle="Study in Germany | Free Education & Visa Prep | Bluestone Overseas"
            seoDescription="Your path to Germany's public universities. Get expert guidance on TestDaF, IELTS requirements, and student visa filing with Bluestone Overseas."
        />
    );
};

export default Germany;
