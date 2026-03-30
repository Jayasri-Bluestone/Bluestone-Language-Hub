import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Globe, ShieldCheck, ArrowRight, ArrowLeft, BookOpen, 
    GraduationCap, Briefcase, Calendar, FileText, 
    CheckCircle2, Award, Star, Zap, MapPin
} from 'lucide-react';
import SEO from '../SEO';
import { useContactModal } from '../../context/ModalContext';

const CountryLayout = ({ 
    country, 
    heroImage, 
    heroSubtitle, 
    heroTitle,
    perks = [], 
    tests = [], 
    documents = [], 
    intakes = [], 
    workRights = [], 
    topCourses = [], 
    whyStudy = "",
    stats = [], 
    coursesImage, 
    requirementsImage, 
    seoTitle,
    seoDescription
}) => {
    const { openContactModal } = useContactModal();
    const carouselRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const scroll = (direction) => {
        if (carouselRef.current) {
            const { clientWidth } = carouselRef.current;
            const scrollAmount = direction === 'left' ? -clientWidth / 2 : clientWidth / 2;
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            setTimeout(checkScroll, 500);
        }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerChildren = {
        visible: { transition: { staggerChildren: 0.1 } }
    };

    return (
        <div className="pt-20 bg-[#FBFBFB] selection:bg-brand-green selection:text-white font-sans overflow-x-hidden">
            <SEO
                title={seoTitle || `Study in ${country} | Admissions & Visa Guidance | Bluestone Overseas`}
                description={seoDescription || `Explore top universities in ${country}. Get expert guidance on admissions, visas, and scholarships with Bluestone Overseas.`}
            />

            {/* Hero Section */}
            <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 scale-105">
                    <img
                        src={heroImage}
                        className="w-full h-full object-cover brightness-[0.35]"
                        alt={`${country} Hero`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-[#FBFBFB]" />
                </div>
                
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div 
                        initial="hidden"
                        animate="visible"
                        className="max-w-5xl mx-auto text-center"
                    >
                        <motion.div
                            variants={fadeInUp}
                            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md mb-10 border border-white/20"
                        >
                            <MapPin className="w-4 h-4 text-brand-green" />
                            <span className="text-xs font-black uppercase tracking-[0.3em] text-white">Destination Elite: {country}</span>
                        </motion.div>
                        
                        <motion.h1
                            variants={fadeInUp}
                            className="text-7xl md:text-7xl font-black leading-[0.85] tracking-tighter mb-10 uppercase text-white drop-shadow-2xl"
                        >
                            {heroTitle || country}
                        </motion.h1>
                        
                        <motion.p 
                            variants={fadeInUp}
                            className="text-xl md:text-xl font-medium text-white/90 max-w-3xl mx-auto mb-16 leading-tight italic"
                        >
                            "{heroSubtitle}"
                        </motion.p>
                        
                        <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-6">
                            <button 
                                onClick={openContactModal}
                                className="bg-brand-green text-white px-12 py-6 rounded-full font-black uppercase tracking-widest flex items-center gap-3 hover:scale-105 transition-all shadow-[0_20px_50px_rgba(25,181,87,0.3)] active:scale-95"
                            >
                                Start Your Journey <ArrowRight className="w-6 h-6" />
                            </button>
                            <div className="flex -space-x-4">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 1}`} alt="User" />
                                    </div>
                                ))}
                                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white font-black text-xs border border-white/30">
                                    5k+
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Why Section - Floating Cards Design */}
            <section className="py-32 relative overflow-hidden bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="relative">
                            <motion.div 
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={staggerChildren}
                                className="space-y-12"
                            >
                                <div className="space-y-6">
                                    <motion.div variants={fadeInUp} className="text-brand-green font-black uppercase tracking-[0.4em] text-sm">Experience the Best</motion.div>
                                    <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                                        Empowering Your <br /><span className="text-brand-green">Academic Dream</span>
                                    </motion.h2>
                                    <motion.p variants={fadeInUp} className="text-xl text-gray-500 font-medium leading-relaxed max-w-xl">
                                        {whyStudy}
                                    </motion.p>
                                </div>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {perks.map((perk, i) => (
                                        <motion.div 
                                            key={i}
                                            variants={fadeInUp}
                                            whileHover={{ y: -5 }}
                                            className="p-8 rounded-[40px] bg-gray-50 border border-gray-100 group hover:bg-brand-green transition-all duration-500 hover:shadow-2xl hover:shadow-brand-green/20"
                                        >
                                            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                                <Zap className="w-6 h-6 text-brand-green" />
                                            </div>
                                            <p className="font-black text-gray-900 group-hover:text-white text-xl uppercase leading-tight">{perk}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                        <div className="relative">
                            <div className="relative z-10 flex gap-6 mt-12 lg:mt-0">
                                <div className="space-y-6 pt-24">
                                    <motion.img 
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        src={heroImage} 
                                        className="w-full aspect-[4/5] object-cover rounded-[50px] shadow-2xl" 
                                        alt="City 1"
                                    />
                                    <div className="bg-brand-green p-10 rounded-[50px] text-white">
                                        <Award className="w-12 h-12 mb-6" />
                                        <div className="text-2xl font-black uppercase leading-none">Top Tier Quality</div>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="bg-gray-900 p-10 rounded-[50px] text-white">
                                        <GraduationCap className="w-12 h-12 mb-6" />
                                        <div className="text-2xl font-black uppercase leading-none">Ivy League Standards</div>
                                    </div>
                                    <motion.img 
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        src={coursesImage || "https://images.unsplash.com/photo-152305085306e-813d33682915?auto=format&fit=crop&q=80&w=800"} 
                                        className="w-full aspect-[4/5] object-cover rounded-[50px] shadow-2xl" 
                                        alt="City 2"
                                    />
                                </div>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-brand-green/5 blur-[120px] rounded-full pointer-events-none" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Requirement Grid - Modern Split Layout */}
            <section className="py-32 bg-gray-950 text-white overflow-hidden relative">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20 items-stretch">
                        <div className="flex-1 space-y-12">
                            <div className="space-y-6">
                                <div className="px-4 py-1 rounded-full bg-brand-green/10 border border-brand-green/20 inline-block">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-green">Clear Path to Success</span>
                                </div>
                                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                                    The Admission <br /><span className="text-brand-green">Pipeline</span>
                                </h2>
                                <p className="text-xl text-gray-400 font-medium max-w-lg">
                                    Strategic guidance for a frictionless application process. We handle the complexity so you can focus on your goals.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="w-16 h-16 rounded-2xl bg-brand-green flex items-center justify-center mb-8 shadow-xl shadow-brand-green/20">
                                        <FileText className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-black uppercase mb-6 tracking-tight">Tests Required</h3>
                                    <ul className="space-y-4">
                                        {tests.map((test, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-300 font-bold">
                                                <div className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                                                {test}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="w-16 h-16 rounded-2xl bg-brand-green flex items-center justify-center mb-8 shadow-xl shadow-brand-green/20">
                                        <ShieldCheck className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-black uppercase mb-6 tracking-tight">Essential Docs</h3>
                                    <ul className="space-y-4">
                                        {documents.map((doc, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-300 font-bold">
                                                <div className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                                                {doc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex-1 relative min-h-[500px]">
                            <motion.img 
                                initial={{ scale: 1.1, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                src={requirementsImage || "https://images.unsplash.com/photo-1586282391129-76a6df230234?auto=format&fit=crop&q=80&w=1200"} 
                                className="w-full h-full object-cover rounded-[60px] grayscale brightness-50"
                                alt="Requirements Backdrop"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent p-12 flex flex-col justify-end">
                                <div className="max-w-md">
                                    <Star className="text-brand-green w-10 h-10 mb-6 fill-brand-green" />
                                    <div className="text-4xl font-black uppercase leading-tight italic mb-4">"Expertise that ensures success."</div>
                                    <p className="text-gray-400 font-bold text-lg leading-relaxed">Our document specialists have a 99% first-time approval rate for student visas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Academic Section - Carousel Interaction */}
            <section className="py-32 bg-white overflow-hidden selection:bg-brand-green selection:text-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                        <div className="max-w-2xl">
                            <div className="text-brand-green font-black uppercase tracking-[0.4em] text-sm mb-4">Elite Disciplines</div>
                            <h2 className="text-5xl md:text-[80px] font-black uppercase tracking-tighter leading-none">
                                High-Impact <span className="text-brand-green italic">Courses</span>
                            </h2>
                        </div>
                        <div className="flex gap-4">
                            <button 
                                onClick={() => scroll('left')}
                                disabled={!canScrollLeft}
                                className={`w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all ${canScrollLeft ? 'border-brand-green text-brand-green hover:bg-brand-green hover:text-white' : 'border-gray-200 text-gray-200 cursor-not-allowed'}`}
                            >
                                <ArrowLeft className="w-6 h-6" />
                            </button>
                            <button 
                                onClick={() => scroll('right')}
                                disabled={!canScrollRight}
                                className={`w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all ${canScrollRight ? 'border-brand-green text-brand-green hover:bg-brand-green hover:text-white' : 'border-gray-200 text-gray-200 cursor-not-allowed'}`}
                            >
                                <ArrowRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    <div 
                        ref={carouselRef}
                        onScroll={checkScroll}
                        className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-12 px-2"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {topCourses.map((course, i) => {
                            const courseName = typeof course === 'object' ? course.name : course;
                            const courseImage = typeof course === 'object' ? course.image : `https://images.unsplash.com/photo-${1500000000000 + i * 1000}?auto=format&fit=crop&q=80&w=800`;
                            
                            return (
                                <motion.div 
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="min-w-[85%] md:min-w-[45%] lg:min-w-[30%] snap-center"
                                >
                                    <div className="relative rounded-[50px] overflow-hidden group aspect-[4/5] bg-gray-100 shadow-xl">
                                        <img 
                                            src={courseImage} 
                                            className="absolute inset-0 w-full h-full object-cover brightness-[0.7] group-hover:scale-110 transition-transform duration-700" 
                                            alt={courseName} 
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-12 flex flex-col justify-end">
                                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md mb-6 flex items-center justify-center border border-white/30 text-white font-black group-hover:bg-brand-green transition-colors">
                                                0{i + 1}
                                            </div>
                                            <h4 className="text-3xl font-black text-white uppercase leading-none mb-4 group-hover:text-brand-green transition-colors">{courseName}</h4>
                                            {/* <button className="text-white font-black uppercase tracking-widest text-xs flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all">
                                                Explore Scope <ArrowRight className="w-4 h-4" />
                                            </button> */}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Intakes & Work - Minimal & Modern */}
            <section className="py-32 bg-gray-50 border-t border-gray-100 selection:bg-brand-green selection:text-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div className="bg-white p-12 md:p-20 rounded-[60px] shadow-2xl">
                            <div className="flex items-center gap-6 mb-12">
                                <div className="w-20 h-20 rounded-[30px] bg-brand-green/20 flex items-center justify-center text-brand-green">
                                    <Calendar className="w-10 h-10" />
                                </div>
                                <h3 className="text-4xl font-black uppercase tracking-tighter">Season Intakes</h3>
                            </div>
                            <div className="space-y-6">
                                {intakes.map((intake, i) => (
                                    <div key={i} className="flex items-center justify-between p-8 rounded-[40px] bg-gray-50 group hover:bg-gray-900 transition-all duration-500 cursor-default">
                                        <span className="text-2xl font-black uppercase text-gray-900 group-hover:text-white transition-colors">{intake}</span>
                                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center group-hover:rotate-45 transition-all">
                                            <ArrowRight className="w-6 h-6 text-brand-green" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gray-900 p-12 md:p-20 rounded-[60px] text-white">
                            <div className="flex items-center gap-6 mb-12 text-brand-green">
                                <div className="w-20 h-20 rounded-[30px] bg-white/10 flex items-center justify-center ">
                                    <Briefcase className="w-10 h-10" />
                                </div>
                                <h3 className="text-4xl font-black uppercase tracking-tighter text-white">Career & Rights</h3>
                            </div>
                            <div className="space-y-8">
                                {workRights.map((right, i) => (
                                    <div key={i} className="relative pl-12 group">
                                        <div className="absolute left-0 top-1 w-6 h-6 rounded-full border-2 border-brand-green group-hover:bg-brand-green transition-all" />
                                        <p className="text-xl font-bold text-gray-300 leading-relaxed group-hover:text-white transition-colors">{right}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-16 p-10 rounded-[40px] bg-white text-gray-900">
                                <div className="text-3xl font-black uppercase italic mb-2 tracking-tight">"Build Your Future 24/7"</div>
                                <div className="text-brand-green font-black uppercase text-xs tracking-widest">Post-Study Work Pathways</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Call to Action */}
            <section className="py-32 relative bg-white overflow-hidden">
                <div className="w-7xl mx-auto px-6">
                    <div className="relative rounded-[80px] overflow-hidden bg-brand-green p-12 md:p-32 text-center shadow-[0_50px_100px_rgba(25,181,87,0.3)]">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            className="relative z-10"
                        >
                            <h2 className="text-6xl md:text-[8xl] font-black text-white uppercase tracking-tighter mb-16">
                                Ready to <br /> Define Your <span className="text-black italic">Legacy?</span>
                            </h2>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                                <button 
                                    onClick={openContactModal}
                                    className="px-8 py-4 bg-black text-white rounded-full text-2xl font-black uppercase tracking-widest hover:scale-110 active:scale-95 transition-all flex items-center gap-4"
                                >
                                    Apply Now <ArrowRight className="w-8 h-8" />
                                </button>
                        
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CountryLayout;
