import React from 'react';
import { motion } from 'framer-motion';
import gallery3 from '../assets/IMG_8622.jpg';
import { GraduationCap, Award, Target, BookOpen } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 md:py-32 bg-white px-6">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 rounded-[60px] blur-3xl transform -rotate-3" />
                        <div className="relative rounded-3xl md:rounded-[64px] overflow-hidden border border-brand-green/10 shadow-2xl">
                            <img src={gallery3} className="w-full h-full object-cover" alt="About Bluestone" />
                            <div className="absolute inset-0 flex items-end p-8 md:p-12">
                                <div className="text-white">
                                    <div className="text-3xl md:text-5xl font-black mb-2 tracking-tighter">2015</div>
                                    <div className="text-xs font-black uppercase tracking-widest opacity-80">Founded to Empower Students</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-brand-green font-black tracking-[0.4em] uppercase mb-8 block text-xs">Our Legacy</span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-10 uppercase tracking-tighter">
                            About <br /> <span className="text-gradient uppercase">Bluestone.</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-12 leading-relaxed font-semibold italic">
                            "We don't just teach languages; we prepare you for the world stage."
                        </p>
                        <p className="text-lg text-gray-500 mb-12 leading-relaxed font-medium">
                            Bluestone Overseas was founded in 2015 with a single mission: To provide the highest quality linguistic training and consulting for students aiming to study or work abroad. With over 28,000+ students guided successfully, we are your trusted partners in global education.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                { title: 'Excellence', icon: Award, desc: 'Highest success rates in IELTS & PTE.' },
                                { title: 'Guidance', icon: Target, desc: 'Personalized career & study plans.' }
                            ].map((item, i) => (
                                <div key={i} className="p-6 md:p-8 rounded-3xl md:rounded-[40px] bg-brand-green-soft/50 border border-brand-green/5 group hover:bg-white hover:shadow-xl transition-all duration-500">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-brand-green/5 group-hover:bg-brand-green">
                                        <item.icon className="text-brand-green w-6 h-6 group-hover:text-white" />
                                    </div>
                                    <h4 className="text-2xl font-black text-gray-900 mb-3 uppercase">{item.title}</h4>
                                    <p className="text-sm text-gray-400 font-bold leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;