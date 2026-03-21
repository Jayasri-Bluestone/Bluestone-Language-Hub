import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Globe, Cpu, Users, Star } from 'lucide-react';

const WhyChooseUs = () => {
    const reasons = [
        { title: 'Global Recognition', desc: 'Our certifications are accepted by top universities worldwide.', icon: Globe },
        { title: 'Expert Pedagogy', desc: 'Learning methods designed by world-class linguists.', icon: Zap },
        { title: 'AI-Driven Practice', desc: 'State-of-the-art prep portals with scoring feedback.', icon: Cpu },
        { title: 'Elite Community', desc: 'Join a network of thousands of successful alumni.', icon: Users },
        { title: 'Success Guarantee', desc: 'Tailored roadmaps to ensure you hit your target scores.', icon: ShieldCheck },
        { title: 'Global Network', desc: 'Direct partnerships with institutions in 15+ countries.', icon: Star },
    ];

    return (
        <section className="py-32 bg-gray-50 px-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-[150px] -z-0" />
            <div className="container mx-auto relative z-10">
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="px-4 py-2 rounded-full bg-brand-green/10 text-brand-green text-[10px] font-black uppercase tracking-widest border border-brand-green/10 mb-8 inline-block"
                    >
                        The Bluestone Edge
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-6xl md:text-8xl font-black text-gray-900 tracking-tighter"
                    >
                        Why Choose <span className="text-gradient">Us?</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {reasons.map((reason, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="p-8 md:p-12 rounded-[32px] md:rounded-[56px] bg-white border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(34,197,94,0.08)] transition-all duration-700 group hover:border-brand-green/10"
                        >
                            <div className="w-16 h-16 bg-brand-green-soft rounded-[24px] flex items-center justify-center mb-10 group-hover:bg-brand-green transition-colors duration-500 shadow-sm border border-brand-green/5">
                                <reason.icon className="text-brand-green w-8 h-8 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">{reason.title}</h3>
                            <p className="text-lg text-gray-400 font-bold leading-relaxed">
                                {reason.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
