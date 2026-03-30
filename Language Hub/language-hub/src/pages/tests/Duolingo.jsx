import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Globe, Sparkles, ArrowRight, Shield, Zap } from 'lucide-react';
import { useContactModal } from '../../context/ModalContext';

const Duolingo = () => {
  const { openContactModal } = useContactModal();
  return (
    <div className="pt-20 bg-brand-green-soft/30">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ rotate: -10, scale: 0.8 }}
            animate={{ rotate: 0, scale: 1 }}
            className="w-20 h-20 bg-brand-green rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-brand-green/20"
          >
             <Smartphone className="text-white w-10 h-10" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-5xl font-black text-gray-900 leading-[0.8] tracking-tighter mb-12 uppercase"
          >
            DET <br /> <span className="text-brand-green">MODERN.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-xl mx-auto text-2xl text-gray-800 font-bold"
          >
            "The world's most convenient, fast, and affordable English test. Take it anywhere, anytime."
          </motion.p>
        </div>
      </section>

      {/* Modern Testing Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
             {[
               { title: 'Adaptive Learning', icon: Zap, desc: 'Practice with questions that adapt to your skill level in real-time.' },
               { title: 'Security First', icon: Shield, desc: 'Master the proctoring rules to ensure your results are certified.' },
               { title: 'Quick Prep', icon: Sparkles, desc: 'Get ready for the 1-hour test with our specialized crash courses.' }
             ].map((item, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="p-12 rounded-[56px] bg-white border border-brand-green/10 hover:shadow-2xl hover:shadow-brand-green/5 transition-all duration-700"
               >
                  <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-10">
                     <item.icon className="text-brand-green w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-6 tracking-tight uppercase">{item.title}</h3>
                  <p className="text-lg text-gray-400 font-bold leading-relaxed">{item.desc}</p>
               </motion.div>
             ))}
          </div>

          <div className="p-16 rounded-[72px] bg-brand-green text-white flex flex-col items-center text-center shadow-2xl shadow-brand-green/10">
             <Globe className="w-20 h-20 mb-10 opacity-50" />
             <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tighter max-w-3xl uppercase">Accepted by 4,500+ Institutions Worldwide</h2>
             <p className="text-2xl opacity-80 mb-12 font-bold max-w-2xl">Don't wait months. Get your score in 48 hours with our Duolingo English Test prep.</p>
             <button 
               onClick={openContactModal}
               className="px-16 py-7 bg-white text-brand-green-light rounded-[32px] text-2xl font-black hover:scale-105 transition-all shadow-xl active:scale-95 flex items-center gap-4"
             >
                Start Prep Now <ArrowRight className="w-8 h-8" />
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Duolingo;
