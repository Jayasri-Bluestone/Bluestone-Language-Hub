import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Globe } from 'lucide-react';
import gallery4 from '../../assets/IMG_8594.jpg';


import SEO from '../../components/SEO';

const AboutUsPage = () => {
    return (
        <div className="pt-20 bg-white">
            <SEO 
                title="Our Story & Vision" 
                description="Learn about Bluestone Overseas' legacy since 2015. We are dedicated to providing world-class linguistic training and transparent consulting for global education."
                canonical="/company/about"
            />
            {/* Hero Section */}
            <section className="py-16 bg-gray-50 px-6">
                <div className="container mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-brand-green font-black tracking-[0.4em] uppercase mb-8 block text-center"
                    >
                        Our Story
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-5xl md:text-5xl font-black text-gray-900 leading-[0.8] tracking-tighter mb-16 text-center uppercase"
                    >
                        THE BLUESTONE <br /> <span className="text-gradient uppercase">WAY.</span>
                    </motion.h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="rounded-[64px] overflow-hidden shadow-2xl">
                            <img src={gallery4} className="w-full h-full object-cover" alt="Our Team" />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-10 leading-tight uppercase">Driven by Excellence, <br /> Defined by Success.</h2>
                            <p className="text-xl text-gray-500 mb-10 leading-relaxed font-medium">
                                Bluestone Overseas was founded in 2015 with a vision to make global education accessible to every aspiring student. Today, we are a leading consultancy with a presence in multiple cities, helping thousands achieve their international dreams.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                {[
                                    { label: 'Students Guided', value: '28k+' },
                                    { label: 'Destinations', value: '20+' },
                                    { label: 'Expert Trainers', value: '50+' },
                                    { label: 'Visa Success', value: '99%' }
                                ].map((stat, i) => (
                                    <div key={i} className="p-8 rounded-[40px] bg-white shadow-lg border border-gray-100">
                                        <div className="text-3xl font-black text-brand-green mb-1">{stat.value}</div>
                                        <div className="text-xs font-black uppercase tracking-widest text-gray-400">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-32 px-6">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[
                            { title: 'Our Mission', icon: Target, text: 'To provide world-class linguistic training and transparent consulting for global education.' },
                            { title: 'Our Vision', icon: Globe, text: 'To be the most trusted global partner for students seeking international academic excellence.' }
                        ].map((item, i) => (
                            <div key={i} className="p-16 rounded-[72px] bg-brand-green text-white shadow-2xl shadow-brand-green/20">
                                <item.icon className="w-16 h-16 mb-10 opacity-50" />
                                <h3 className="text-4xl md:text-5xl font-black mb-6 uppercase">{item.title}</h3>
                                <p className="text-2xl opacity-80 font-bold leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUsPage;