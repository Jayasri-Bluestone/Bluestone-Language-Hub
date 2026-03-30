import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Trophy, Star, ArrowRight, CheckCircle, Target, Users } from 'lucide-react';
import { useContactModal } from '../../context/ModalContext';
import SEO from '../../components/SEO';

const Cert = () => {
  const { openContactModal } = useContactModal();
  return (
    <div className="pt-20 bg-white">
      <SEO 
        title="Professional Certifications | Bluestone Language Hub" 
        description="Verify your global competency with professional certifications from Bluestone. Join the elite network of certified linguists and professionals." 
      />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-brand-green text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2070" 
            className="w-full h-full object-cover" 
            alt="Professional Certification" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-green/80 via-transparent to-brand-green/80" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
             <Trophy className="text-white w-8 h-8 md:w-10 md:h-10" />
             <span className="font-black tracking-[0.4em] uppercase text-xs md:text-sm">Global Proficiency Certified</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black leading-none tracking-tighter mb-10 uppercase"
          >
            THE Bluestone <br /> <span className="text-gray-900 drop-shadow-2xl">CERTIFICATE.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto text-xl md:text-2xl font-bold italic mb-12 opacity-90"
          >
            "A global standard for linguistic and professional competency. Recognized by leading institutions and employers worldwide."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button 
              onClick={openContactModal}
              className="px-12 py-5 bg-white text-brand-green rounded-full text-xl font-black hover:scale-105 transition-all shadow-2xl"
            >
              Get Certified Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Certification Value */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-24 items-start">
             <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="flex-1"
             >
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight uppercase">Why the Bluestone CERT Matters</h2>
                <div className="space-y-12">
                   {[
                     { 
                       title: 'Global Recognition', 
                       desc: 'Our certification is accepted and valued by hundreds of corporate partners across Europe, Australia, and the Middle East.', 
                       icon: Target 
                     },
                     { 
                       title: 'Skill Validation', 
                       desc: 'Rigorous assessment across multiple professional and linguistic competencies to provide a true reflection of your skills.', 
                       icon: Award 
                     },
                     { 
                       title: 'Career Advancement', 
                       desc: 'Certified Bluestone alumni report higher salary outcomes and faster placement in international job markets.', 
                       icon: Users 
                     }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-8 group">
                        <div className="w-20 h-20 rounded-[32px] bg-brand-green/5 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green transition-all duration-500 shadow-sm border border-brand-green/10">
                           <item.icon className="w-10 h-10 text-brand-green group-hover:text-white transition-colors" />
                        </div>
                        <div>
                           <h4 className="text-2xl font-black text-gray-900 mb-2 uppercase">{item.title}</h4>
                           <p className="text-lg text-gray-500 font-bold leading-relaxed">{item.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </motion.div>

             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="flex-1 lg:max-w-md"
             >
                <div className="p-12 md:p-16 rounded-[64px] bg-slate-50 border border-gray-100 shadow-sm relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-8 opacity-5">
                      <GraduationCap className="w-48 h-48 text-brand-green" />
                   </div>
                   
                   <div className="text-center md:text-left relative z-10">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/10 rounded-full mb-8">
                         <Star className="w-4 h-4 text-brand-green fill-brand-green" />
                         <span className="text-xs font-black text-brand-green tracking-widest uppercase">Elite Credential</span>
                      </div>
                      <h3 className="text-3xl font-black text-gray-900 mb-8 uppercase leading-tight tracking-tighter">Your bridge to world-class <span className="text-brand-green underline italic">Professional success.</span></h3>
                      
                      <div className="space-y-6 mb-12">
                         {[
                           'Official Digital Credential',
                           'Blockchain-Verified Security',
                           'QR Code integration for Resumes',
                           'Lifetime status in Alum network',
                           'Direct Referral Priority'
                         ].map((feature, i) => (
                           <div key={i} className="flex items-center gap-3 text-lg font-bold text-gray-500 italic">
                              <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
                              {feature}
                           </div>
                         ))}
                      </div>

                      <button 
                        onClick={openContactModal}
                        className="w-full py-8 bg-gray-900 text-white rounded-[32px] text-2xl font-black hover:bg-brand-green transition-all shadow-xl active:scale-95 flex items-center justify-center gap-4"
                      >
                         Apply Now <ArrowRight className="w-8 h-8" />
                      </button>
                   </div>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Corporate Trusted Section */}
      <section className="py-24 bg-white border-t border-gray-100">
         <div className="container mx-auto px-6 text-center">
            <h4 className="text-gray-400 font-black uppercase text-sm tracking-[0.5em] mb-12">Trusted by 500+ Institutions</h4>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale contrast-125">
               {/* Placeholders for Corporate Logos if any, or just use typography for a clean institutional look */}
               <span className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tighter">Global Partners</span>
               <span className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tighter">EU Standards</span>
               <span className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tighter">Career First</span>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Cert;
