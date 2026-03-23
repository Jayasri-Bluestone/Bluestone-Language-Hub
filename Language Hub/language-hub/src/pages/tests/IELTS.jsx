import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, BookOpen, Clock, Target, Users } from 'lucide-react';
import { useContactModal } from '../../context/ModalContext';

const IELTS = () => {
    const { openContactModal } = useContactModal();
    return (
        <div className="pt-20 bg-white">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=2070"
                        className="w-full h-full object-cover opacity-20 filter grayscale"
                        alt="IELTS Hero"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-brand-green font-black tracking-[0.4em] uppercase mb-8 block"
                    >
                        The Gold Standard
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl sm:text-7xl md:text-[160px] font-black text-gray-900 leading-[0.85] md:leading-[0.8] tracking-tighter mb-12"
                    >
                        IELTS <br /> <span className="text-gradient">MASTERY.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="max-w-2xl mx-auto text-2xl text-gray-400 font-bold italic"
                    >
                        "Unlock global opportunities with the world's most popular English language proficiency test."
                    </motion.p>
                </div>
            </section>

            {/* Course Details */}
            <section className="py-20 md:py-32 px-6">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                        <div className="lg:col-span-8">
                            <h2 className="text-5xl font-black text-gray-900 mb-12 tracking-tight">Comprehensive Training</h2>
                            <p className="text-xl text-gray-500 mb-12 leading-relaxed font-medium">
                                Our IELTS program is designed to take you from your current level to your target band score in the shortest time possible. We cover all four modules—Listening, Reading, Writing, and Speaking—with a focus on the specific strategies needed for each.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                                {[
                                    { title: 'Listening', icon: Clock, desc: 'Master accents and speed with 50+ practice tests.' },
                                    { title: 'Reading', icon: BookOpen, desc: 'Learn time-saving techniques for complex texts.' },
                                    { title: 'Writing', icon: Target, desc: 'Perfect your Task 1 and Task 2 with expert reviews.' },
                                    { title: 'Speaking', icon: Users, desc: 'Live 1-on-1 sessions with native-level trainers.' }
                                ].map((item, i) => (
                                    <div key={i} className="p-6 md:p-10 rounded-3xl md:rounded-[48px] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-brand-green transition-colors">
                                            <item.icon className="text-brand-green w-7 h-7 group-hover:text-white transition-colors" />
                                        </div>
                                        <h4 className="text-2xl font-black text-gray-900 mb-4">{item.title}</h4>
                                        <p className="text-gray-400 font-bold leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-4">
                            <div className="sticky top-32 p-8 md:p-12 rounded-3xl md:rounded-[56px] bg-brand-green text-white shadow-2xl shadow-brand-green/20">
                                <h3 className="text-3xl font-black mb-8">Course Info</h3>
                                <ul className="space-y-6 mb-12">
                                    {[
                                        '8 Weeks Duration',
                                        '20 Full-length Mock Tests',
                                        'Daily Speaking Sessions',
                                        'Certified Expert Trainers',
                                        'Grammar & Vocab Support'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 text-lg font-bold">
                                            <CheckCircle2 className="w-6 h-6 text-brand-green-pop" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={openContactModal}
                                    className="w-full py-6 bg-white text-brand-green rounded-3xl text-xl font-black hover:scale-105 transition-all active:scale-95 flex items-center justify-center gap-3"
                                >
                                    Enroll Now <ArrowRight className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IELTS;