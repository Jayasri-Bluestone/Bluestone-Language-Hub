import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Heart, Briefcase, PlusCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { useContactModal } from '../../context/ModalContext';

const OET = () => {
  const { openContactModal } = useContactModal();
  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-green/5 opacity-40" />
          <svg className="absolute w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand-green" />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-10"
          >
             <div className="w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center shadow-xl shadow-red-500/20">
                <PlusCircle className="text-white w-6 h-6" />
             </div>
             <span className="text-red-500 font-black tracking-[0.4em] uppercase text-sm">For Healthcare Professionals</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-5xl font-black text-gray-900 leading-[0.8] tracking-tighter mb-12 uppercase"
          >
            OET <br /> <span className="text-gradient">CHAMPIONS.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto text-2xl text-gray-400 font-bold italic"
          >
            "The English test that speaks your language. Designed specifically for the healthcare sector."
          </motion.p>
        </div>
      </section>

      {/* Medical-Focused Training */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
               <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-10 leading-tight uppercase">Elite Coaching for Nurses & Doctors</h2>
               <p className="text-xl text-gray-500 mb-12 leading-relaxed font-medium">
                  We understand that your profession demands precision. Our OET training uses real-world healthcare scenarios to ensure you're not just passing a test, but preparing for your career in the UK, Ireland, or Australia.
               </p>
               
               <ul className="space-y-8 mb-16">
                  {[
                    { title: 'Nursing-Specific Modules', icon: Heart },
                    { title: 'Medicine Intensive Prep', icon: Stethoscope },
                    { title: 'Career-Focused Speaking', icon: Briefcase }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-6 group">
                       <div className="w-16 h-16 bg-red-50 rounded-3xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-500 transition-colors duration-500">
                          <item.icon className="text-red-500 w-8 h-8 group-hover:text-white transition-colors" />
                       </div>
                       <div>
                          <h4 className="text-2xl font-black text-gray-900 mb-2 uppercase">{item.title}</h4>
                          <p className="text-gray-400 font-bold">Specially curated content for your specific healthcare profession.</p>
                       </div>
                    </li>
                  ))}
               </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-16 rounded-[72px] bg-gray-50 border border-gray-100 overflow-hidden"
            >
               <div className="absolute top-0 right-0 p-12 opacity-5">
                  <Heart className="w-64 h-64 text-red-500" />
               </div>
               <h3 className="text-3xl font-black text-gray-900 mb-10 relative z-10 uppercase">Why OET with Bluestone?</h3>
               <div className="space-y-6 mb-12 relative z-10">
                  {[
                    'Specialist Healthcare Trainers',
                    'Role-play intensive speaking',
                    'OET-specific writing corrections',
                    'Access to 20+ Medical Case Studies',
                    'Verified success stories from UK Nurses'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-xl font-bold text-gray-500">
                       <ShieldCheck className="w-6 h-6 text-red-500" />
                       {item}
                    </div>
                  ))}
               </div>
               <button 
                 onClick={openContactModal}
                 className="w-full py-8 bg-red-500 text-white rounded-[32px] text-2xl font-black hover:bg-red-600 transition-all shadow-xl shadow-red-500/20 active:scale-95"
               >
                  Join Healthcare Elite
               </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OET;
