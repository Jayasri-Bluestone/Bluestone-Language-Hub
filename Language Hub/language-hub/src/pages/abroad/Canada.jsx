import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ShieldCheck, ArrowRight, BookOpen } from 'lucide-react';
import SEO from '../../components/SEO';
import { useContactModal } from '../../context/ModalContext';

const Canada = () => {
    const { openContactModal } = useContactModal();
    return (
        <div className="pt-20 bg-white">
            <SEO
                title="Study in Canada | Admissions & Visa Guidance | Bluestone Overseas"
                description="Explore top universities in Canada. From SPP colleges to PGWP guidance, Bluestone Overseas helps you secure your future in the land of maple."
            />
            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=800"
                        className="w-full h-full object-cover brightness-50"
                        alt="Canada Backdrop"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-green/40 via-transparent to-brand-green/40" />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md mb-8 border border-white/30"
                    >
                        <Globe className="w-5 h-5 text-white" />
                        <span className="text-sm font-black uppercase tracking-widest text-white">Study in Canada</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-5xl font-black leading-tight tracking-tighter mb-8 uppercase"
                    >
                        THE LAND OF <br /> <span className="text-white opacity-80 decoration-brand-green underline underline-offset-8">MAPLE.</span>
                    </motion.h1>
                    <p className="max-w-2xl mx-auto text-2xl font-bold italic opacity-90 px-4">
                        "World-class education, diverse culture, and a pathway to a global career. Canada is the top choice for international students."
                    </p>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-20 md:py-32 px-6">
                <div className="container mx-auto">
                    <div className="text-center mb-16 md:mb-24">
                        <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter text-gray-900 uppercase">Why Canada?</h2>
                        <p className="text-xl text-gray-400 font-bold max-w-2xl mx-auto">Discover the unique advantages of studying in one of the world's most welcoming nations.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { title: 'Post-Study Work Permit', desc: 'Gain valuable Canadian work experience after your graduation for up to 3 years.', img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=600' },
                            { title: 'Affordable Education', desc: 'Competitive tuition fees and diverse scholarship options compared to other Western countries.', img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600' },
                            { title: 'Path to Residency', desc: 'Study and work experience can lead to Permanent Residency (PR) through various programs.', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=600' }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -20 }}
                                className="rounded-3xl md:rounded-[60px] overflow-hidden bg-gray-50 border border-gray-100 group shadow-xl"
                            >
                                <div className="h-72 overflow-hidden">
                                    <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
                                </div>
                                <div className="p-8 md:p-12">
                                    <h3 className="text-3xl font-black mb-4 text-gray-900 leading-tight uppercase">{item.title}</h3>
                                    <p className="text-gray-500 font-bold mb-8 leading-relaxed">{item.desc}</p>
                                    {/* <div className="flex items-center gap-2 text-brand-green font-black uppercase tracking-widest text-sm">
                                        View Requirements <ArrowRight className="w-4 h-4" />
                                    </div> */}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-32 px-6 bg-gray-900 text-white overflow-hidden relative">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tighter uppercase">Our Canada Expertise</h2>
                            <div className="space-y-12">
                                {[
                                    { title: 'University Selection', desc: 'Shortlisting top DLI-approved institutions based on your profile.' },
                                    { title: 'SOP & Documentation', desc: 'Crafting compelling Statements of Purpose for admissions and visa.' },
                                    { title: 'Visa Filing (SDS/Non-SDS)', desc: 'Expert guidance for Student Direct Stream (SDS) for faster processing.' }
                                ].map((feat, i) => (
                                    <div key={i} className="flex gap-8">
                                        <div className="w-16 h-16 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0">
                                            <ShieldCheck className="text-brand-green w-8 h-8" />
                                        </div>
                                        <div>
                                            <h4 className="text-2xl font-black mb-2 uppercase">{feat.title}</h4>
                                            <p className="text-gray-400 font-bold text-lg">{feat.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-green/10 blur-[120px]" />
                            <BookOpen className="w-full h-full text-brand-green opacity-10 absolute animate-pulse rotate-12" />
                            <div className="bg-gray-800 p-8 md:p-16 rounded-3xl md:rounded-[60px] relative z-10 border border-white/5 shadow-2xl">
                                <h3 className="text-4xl font-black mb-10 border-b border-white/10 pb-6 uppercase tracking-tight">Canada Package</h3>
                                <ul className="grid grid-cols-1 gap-6 font-bold text-gray-300 text-xl">
                                    <li className="flex items-center gap-4">
                                        <div className="w-3 h-3 rounded-full bg-brand-green" />
                                        SDS & Non-SDS Filing
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-3 h-3 rounded-full bg-brand-green" />
                                        GIC Account Assistance
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-3 h-3 rounded-full bg-brand-green" />
                                        Course Equivalency Support
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-3 h-3 rounded-full bg-brand-green" />
                                        Part-time Job Guidance
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* CTA Section */}
            <section className="py-32 px-6 bg-brand-green text-white">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tighter text-balance uppercase">Ready to study in <br /><span className="opacity-80 underline underline-offset-8">Canada?</span></h2>
                    <button
                        onClick={openContactModal}
                        className="px-8 py-5 md:px-16 md:py-8 bg-white text-brand-green rounded-full text-xl md:text-2xl font-black hover:scale-105 transition-all shadow-2xl active:scale-95 flex items-center gap-4 mx-auto uppercase"
                    >
                        Apply Now <ArrowRight className="w-8 h-8" />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Canada;