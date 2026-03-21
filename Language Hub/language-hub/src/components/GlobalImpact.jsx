import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Trophy, Users, Globe2, MapPin } from 'lucide-react';

const GlobalImpact = () => {
    const highlights = [
        { title: 'Global Standards', desc: 'Following CEFR and international linguistic guidelines.', icon: Shield, color: 'bg-blue-500' },
        { title: 'Elite Faculty', desc: 'Certified trainers with over 15+ years of experience.', icon: Users, color: 'bg-brand-green' },
        { title: 'Proven Results', desc: 'Over 28,000 students placed in top universities.', icon: Trophy, color: 'bg-amber-500' },
        { title: 'Modern Pedagogy', desc: 'Interactive learning tools and personalized plans.', icon: Sparkles, color: 'bg-emerald-500' },
    ];

    return (
        <section id="levels" className="py-32 bg-white relative overflow-hidden">
            {/* Decorative radial gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-green/5 rounded-full blur-[150px] -z-1" />

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-brand-green font-black tracking-[0.3em] uppercase mb-8 block text-xs"
                        >
                            Our Core DNA
                        </motion.span>
                        <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-gray-900 mb-8 md:mb-10 leading-[0.9] tracking-tighter">
                            A Legacy of <br />
                            <span className="text-gradient">Educational</span> <br />
                            Excellence.
                        </h2>
                        <p className="text-lg md:text-xl text-gray-400 mb-12 md:mb-16 leading-relaxed font-semibold max-w-xl">
                            We separate ourselves through a combination of traditional rigor and modern innovation. Our methodology is designed to ensure every student doesn't just pass, but excels.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                            {highlights.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex flex-col gap-6 group"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-brand-green-soft flex items-center justify-center group-hover:bg-brand-green transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand-green/20">
                                        <item.icon className="text-brand-green w-7 h-7 group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-black text-gray-900 mb-3">{item.title}</h4>
                                        <p className="text-sm text-gray-400 font-bold leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-green-gradient rounded-[40px] md:rounded-[80px] blur-3xl opacity-10 transform translate-x-4 translate-y-4" />
                        <div className="relative bg-white p-4 md:p-6 rounded-[48px] md:rounded-[84px] border border-brand-green/10 shadow-[0_40px_100px_-20px_rgba(34,197,94,0.15)]">
                            <div className="aspect-[4/5] overflow-hidden rounded-[32px] md:rounded-[64px] bg-brand-green-soft/50 relative group">
                                <div className="absolute inset-0 bg-brand-green/5 group-hover:bg-brand-green/10 transition-colors duration-700" />

                                {/* Visual content for Global reach */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center z-10">
                                    <motion.div
                                        animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                        className="w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center mb-10 border border-brand-green/10"
                                    >
                                        <Globe2 className="w-16 h-16 text-brand-green" />
                                    </motion.div>

                                    <div className="bg-white/80 backdrop-blur-xl p-6 md:p-10 rounded-3xl md:rounded-[48px] shadow-xl border border-white/60">
                                        <h5 className="text-2xl md:text-4xl font-black text-gray-900 mb-4 md:mb-6 tracking-tight">India to the <span className="text-brand-green">World</span></h5>
                                        <p className="text-gray-500 font-bold text-base md:text-lg leading-relaxed mb-6 md:mb-8">Headquartered in Coimbatore with branches in Chennai, Trichy, Erode, Tirunelveli, and more.</p>

                                        <div className="flex flex-wrap justify-center gap-4">
                                            {['USA', 'UK', 'Canada', 'Australia', 'Germany'].map((city) => (
                                                <span key={city} className="px-4 py-2 bg-brand-green-soft text-brand-green text-xs font-black rounded-full border border-brand-green/10">
                                                    {city}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative dots like coordinates */}
                                {[...Array(6)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ opacity: [0.2, 0.5, 0.2] }}
                                        transition={{ duration: 2 + i, repeat: Infinity }}
                                        className="absolute w-2 h-2 bg-brand-green rounded-full"
                                        style={{
                                            top: `${20 + Math.random() * 60}%`,
                                            left: `${20 + Math.random() * 60}%`,
                                        }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="relative lg:absolute lg:-right-8 lg:top-1/2 lg:-translate-y-1/2 mt-8 lg:mt-0 bg-white p-6 rounded-3xl shadow-2xl border border-brand-green/10 z-20 flex items-center gap-4 w-fit mx-auto lg:mx-0"
                        >
                            <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center">
                                <Trophy className="text-amber-600 w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-2xl font-black text-gray-900">28k+</div>
                                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Guided Students</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GlobalImpact;
