import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { BookOpen, GraduationCap, Languages, Target, Star, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContactModal } from '../context/ModalContext';
const CoursesScroll = () => {
    const { openContactModal } = useContactModal();
    const targetRef = useRef(null);
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % courses.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + courses.length) % courses.length);
    };

    // Opposite scroll: start from left/negative and move right
    const x = useTransform(scrollYProgress, [0, 1], ["-80%", "20%"]);
    const courses = [
        {
            title: 'IELTS',
            icon: BookOpen,
            desc: 'Master all four modules of the International English Language Testing System.',
            img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
            link: '/tests/ielts'
        },
        {
            title: 'TOEFL',
            icon: GraduationCap,
            desc: 'Recognized by 11,000+ universities. Expert coaching for high scores.',
            img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952',
            link: '/tests/toefl'
        },
        {
            title: 'PTE',
            icon: Target,
            desc: 'Pearson Test of English Academic. Fast-track your results.',
            img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
            link: '/tests/pte'
        },
        {
            title: 'German',
            icon: Star,
            desc: 'Language of innovation. A1 to C2 levels with certified trainers.',
            img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
            link: '/courses/german'
        },
        {
            title: 'Japanese',
            icon: Languages,
            desc: 'From Hiragana to JLPT. Explore career options in Japan.',
            img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800',
            link: '/courses/japanese'
        },
        {
            title: 'French',
            icon: BookOpen,
            desc: 'Master the language of diplomacy, fashion, and international art.',
            img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800',
            link: '/courses/french'
        }
    ];
    return (
        <section id="courses" ref={targetRef} className="relative h-auto md:h-[300vh] bg-brand-green-soft/30 py-20 md:py-0">
            <div className="md:sticky md:top-0 md:h-screen flex flex-col justify-center overflow-hidden">
                <div className="container mx-auto px-6 mb-12 relative z-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 mb-6 border border-brand-green/20"
                        >
                            <Star className="w-4 h-4 text-brand-green fill-brand-green" />
                            <span className="text-xs font-black text-brand-green uppercase tracking-widest">Coaching Excellence</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter uppercase leading-none">
                            Our Elite <br /> <span className="text-brand-green">Coaching Programs.</span>
                        </h2>
                    </div>

                    {/* Mobile Navigation Controls */}
                    {isMobile && (
                        <div className="flex gap-4 self-end">
                            <button
                                onClick={prevSlide}
                                className="w-14 h-14 rounded-full border-2 border-brand-green/20 flex items-center justify-center hover:bg-brand-green hover:text-white transition-all active:scale-95"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center hover:bg-brand-green transition-all active:scale-95"
                            >
                                <ChevronRight className="w-6 h-6 text-white" />
                            </button>
                        </div>
                    )}
                </div>

                <motion.div
                    animate={isMobile ? { x: `-${currentIndex * 100}%` } : {}}
                    style={!isMobile ? { x } : {}}
                    transition={{ type: "spring", damping: 25, stiffness: 120 }}
                    className={`relative z-10 ${isMobile ? 'flex gap-0' : 'grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-row gap-8 px-6 md:px-[5vw] md:w-max'}`}
                >
                    {courses.map((course, i) => (
                        <div
                            key={i}
                            className={`flex-shrink-0 ${isMobile ? 'w-full px-4' : 'w-[350px] shadow-2xl'} h-[400px] md:h-[350px] rounded-[32px] md:rounded-[60px] overflow-hidden relative group border border-white/20`}
                        >
                            <div className="absolute inset-0 z-0">
                                <img src={course.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={course.title} />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
                            </div>
                            <div className="absolute inset-0 p-12 flex flex-col justify-end z-10">
                                <div className="w-16 h-16 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 mb-6 md:mb-8 group-hover:bg-brand-green group-hover:border-brand-green transition-all duration-500">
                                    <course.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight uppercase">{course.title}</h3>
                                <p className="text-lg text-white/70 font-bold leading-relaxed mb-8 opacity-100 md:opacity-0 md:translate-y-4 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500">
                                    {course.desc}
                                </p>
                                <div className="flex gap-4">
                                    <Link to={course.link} className="flex items-center gap-2 text-white font-black uppercase text-[10px] tracking-widest group/btn border border-white/20 px-4 py-2 rounded-xl hover:bg-white hover:text-gray-900 transition-all">
                                        Details
                                    </Link>
                                    <button
                                        onClick={openContactModal}
                                        className="flex items-center gap-2 text-white font-black uppercase text-[10px] tracking-widest group/btn bg-brand-green px-4 py-2 rounded-xl hover:bg-brand-green-light transition-all"
                                    >
                                        Enroll <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
export default CoursesScroll;