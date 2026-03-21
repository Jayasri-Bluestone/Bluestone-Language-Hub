import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Cpu, GraduationCap, ArrowRight, ShieldCheck, Microscope } from 'lucide-react';
import { useContactModal } from '../../context/ModalContext';

const PTE = () => {
    const { openContactModal } = useContactModal();
    return (
        <div className="pt-20 bg-[#f8f9ff]">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2070"
                        className="w-full h-full object-cover opacity-10 filter grayscale brightness-50"
                        alt="PTE Hero"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#f8f9ff]" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-24 h-24 bg-brand-green rounded-[32px] flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-brand-green/40"
                    >
                        <Zap className="text-white w-12 h-12 fill-current" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl sm:text-7xl md:text-[180px] font-black text-gray-900 leading-[0.85] md:leading-[0.8] tracking-tighter mb-12"
                    >
                        PTE <br /> <span className="text-brand-green underline decoration-brand-green/20 underline-offset-[20px]">FAST-TRACK.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="max-w-xl mx-auto text-2xl text-gray-400 font-bold"
                    >
                        "The AI-powered test demands an AI-powered preparation. Achieve your 79+ score with us."
                    </motion.p>
                </div>
            </section>

            {/* Tech-Focused Training */}
            <section className="py-20 md:py-32 px-6">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {[
                            { title: 'Templates', icon: Microscope, desc: 'Exclusive essay and describe image templates that the AI loves.' },
                            { title: 'Mock Portal', icon: Cpu, desc: 'Real PTE exam interface with instant AI scoring for all modules.' },
                            { title: 'Fast Results', icon: ShieldCheck, desc: 'Proven strategies to help you get your results in record time.' }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 md:p-16 rounded-3xl md:rounded-[64px] bg-white shadow-xl shadow-gray-100 border border-gray-50 group hover:border-brand-green/30 transition-all duration-700 hover:translate-y-[-10px]"
                            >
                                <div className="w-20 h-20 bg-brand-green-soft rounded-[28px] flex items-center justify-center mb-10 group-hover:bg-brand-green transition-colors duration-500">
                                    <item.icon className="text-brand-green w-10 h-10 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-4xl font-black text-gray-900 mb-6 tracking-tight">{item.title}</h3>
                                <p className="text-xl text-gray-400 font-bold leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 md:mt-32 p-10 md:p-20 rounded-[40px] md:rounded-[80px] bg-gray-900 text-white flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-green/20 rounded-full blur-[100px]" />
                        <div className="relative z-10 max-w-2xl text-center lg:text-left">
                            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">Ready to conquer the <span className="text-brand-green">Pearson Test?</span></h2>
                            <p className="text-2xl text-gray-400 font-bold mb-0">Join the elite batch and get personal feedback on every mock test.</p>
                        </div>
                        <button
                            onClick={openContactModal}
                            className="relative z-10 px-10 py-5 md:px-16 md:py-8 bg-brand-green text-white rounded-2xl md:rounded-[40px] text-xl md:text-2xl font-black hover:scale-105 transition-all shadow-2xl shadow-brand-green/40 flex items-center gap-4"
                        >
                            Enroll now <ArrowRight className="w-8 h-8" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PTE;
