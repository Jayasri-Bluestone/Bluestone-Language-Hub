import React from 'react';
import heroBg from '../assets/image.png';
import { motion } from 'framer-motion';
import { Languages, GraduationCap, Trophy, Target, Globe, ArrowRight } from 'lucide-react';

const FloatingIcon = ({ icon: Icon, delay, x, y, size = "w-20 h-20" }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0.4, 0.8, 0.4],
      scale: 1,
      y: [0, -20, 0],
      rotate: [0, 10, -10, 0]
    }}
    transition={{
      duration: 5,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className={`absolute ${x} ${y} ${size} bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl flex items-center justify-center text-brand-green shadow-xl z-20 hidden lg:flex`}
  >
    <Icon className="w-1/2 h-1/2" />
  </motion.div>
);

import { useContactModal } from '../context/ModalContext';

const Hero = () => {
  const { openContactModal } = useContactModal();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
      {/* Dynamic Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} className="w-full h-full object-cover" alt="" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent lg:bg-gradient-to-r lg:from-white lg:via-white/60 lg:to-transparent" />
      </div>

      {/* Abstract Background Shapes */}
      <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-brand-green/10 rounded-full blur-[120px] z-0 animate-pulse-slow" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-brand-green-light/10 rounded-full blur-[140px] z-0" />

      {/* Floating Elements */}
      <FloatingIcon icon={Languages} delay={0} x="left-[10%]" y="top-[25%]" />
      <FloatingIcon icon={GraduationCap} delay={1.5} x="right-[15%]" y="top-[30%]" />
      <FloatingIcon icon={Trophy} delay={3} x="left-[15%]" y="bottom-[20%]" />
      <FloatingIcon icon={Target} delay={4.5} x="right-[10%]" y="bottom-[25%]" />

      <div className="w-7xl mx-auto px-6 relative z-10 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-6 py-2.5 mb-10 text-[10px] md:text-xs font-black tracking-[0.3em] text-brand-green uppercase bg-brand-green-soft border border-brand-green/10 rounded-full backdrop-blur-md shadow-sm"
          >
            ELEVATE YOUR LINGUISTIC JOURNEY
          </motion.span>

          <h1 className="text-5xl md:text-5xl font-black mb-12 tracking-tighter text-gray-900 uppercase">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="block"
            >
              MASTERY
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="block"
            >
              IS <span className="">POSSIBLE.</span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-xl text-xl md:text-xl text-gray-700 mb-16 leading-relaxed font-semibold italic"
          >
            "Beyond language, we build global futures." <br />Step into the world's most elite IELTS, PTE, and OET coaching hub.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
          >
            <button
              onClick={openContactModal}
              className="group w-full sm:w-auto px-12 py-5 bg-brand-green text-white rounded-2xl text-lg font-black hover:bg-brand-green-light transition-all shadow-2xl shadow-brand-green/30 active:scale-95 flex items-center justify-center gap-2"
            >
              Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
            <button
              onClick={openContactModal}
              className="w-full sm:w-auto px-12 py-5 bg-brand-green-soft backdrop-blur-md text-brand-green border-2 border-brand-green/10 rounded-2xl text-lg font-black hover:bg-white transition-all active:scale-95"
            >
              Contact Us
            </button>
          </motion.div>
        </motion.div>

        {/* Floating Stats Card-like */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 mt-16 md:mt-32 max-w-5xl mx-auto lg:mx-0 p-6 md:p-12 rounded-[32px] md:rounded-[40px] bg-brand-green-soft/80 backdrop-blur-xl border border-brand-green/10 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent pointer-events-none" />
          {[
            { label: 'Success Rate', value: '99%', icon: Trophy },
            { label: 'Students Placed', value: '10K+', icon: Globe },
            { label: 'Expert Trainers', value: '50+', icon: GraduationCap },
            { label: 'Countries', value: '15+', icon: Target },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center relative z-10">
              <span className="text-4xl md:text-3xl font-black text-brand-green mb-2">{stat.value}</span>
              <span className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest text-center">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Glassy Background Overlay for extra depth */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent z-20" />
    </section>
  );
};

export default Hero;