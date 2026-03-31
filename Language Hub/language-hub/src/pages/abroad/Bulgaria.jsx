import React from 'react';
import CountryLayout from '../../components/abroad/CountryLayout';
import heroImg from '../../assets/bularia.png';

const Bulgaria = () => {
    return (
        <CountryLayout
            country="Bulgaria"
            heroImage={heroImg}
            heroTitle="The Balkan Jewel."
            heroSubtitle="Experience affordable excellence in the heart of Europe's bridge to the East."
            coursesImage="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=1200"
            requirementsImage="https://images.unsplash.com/photo-1586282391129-76a6df230234?auto=format&fit=crop&q=80&w=1200"
            perks={[
                "Affordable tuition & living",
                "Safe & friendly locals",
                "Growing international community",
                "Rich European culture & heritage"
            ]}
            tests={["IELTS", "TOEFL"]}
            documents={[
                "Academic Transcripts",
                "Statement of Purpose (SOP)",
                "Proof of Funds",
                "Valid Passport"
            ]}
            intakes={[
                "September/October (Fall) - Primary",
                "February/March (Spring) - Secondary"
            ]}
            workRights={[
                "9 to 11 months post-study stay-back to secure employment.",
                "Access to the European labor market after graduation.",
                "Affordable housing & transportation for students."
            ]}
            topCourses={[
                { name: "Medicine (MD)", image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=800" },
                { name: "Dentistry", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800" },
                { name: "Pharmacy", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" },
                { name: "Computer Science", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
                { name: "Engineering", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" }
            ]}
            whyStudy="Bulgaria offers some of the most competitive tuition rates in the EU, particularly in medical and technical fields. With its low cost of living and rising reputation in tech, it's a strategic choice for value-conscious students."
            seoTitle="Study in Bulgaria | Medicine & Tech Degrees | Bluestone Overseas"
            seoDescription="Your path to affordable European education. Explore top medical and CS programs in Bulgaria with full admission & visa support from Bluestone Overseas."
        />
    );
};

export default Bulgaria;
