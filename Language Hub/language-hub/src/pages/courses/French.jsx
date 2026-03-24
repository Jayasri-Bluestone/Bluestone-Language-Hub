import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ArrowRight, ShieldCheck, BookOpen } from 'lucide-react';
import SEO from '../../components/SEO';
import { useContactModal } from '../../context/ModalContext';

const French = () => {
  const { openContactModal } = useContactModal();
  return (
    <div className="pt-20 bg-white">
      <SEO 
        title="Master French Language | A1 to C2 | Bluestone Language Hub" 
        description="Join our elite French language program. From DELF/DALF preparation to career opportunities in France and Canada, we guide you all the way." 
      />
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=2070" 
            className="w-full h-full object-cover brightness-50" 
            alt="Paris Backdrop" 
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
            <span className="text-sm font-black uppercase tracking-widest text-white">La Francophonie</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-9xl font-black leading-tight tracking-tighter mb-8"
          >
            PARIS <br /> <span className="text-white opacity-80">AWAITS.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto text-2xl font-bold italic opacity-90"
          >
             "The language of diplomacy, fashion, and culinary arts. Unlock your global potential in the French-speaking world."
          </motion.p>
        </div>
      </section>

      {/* Proficiency Levels */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
           <div className="text-center mb-24">
              <h2 className="text-6xl font-black mb-8 tracking-tighter text-gray-900">Course Levels</h2>
              <p className="text-xl text-gray-400 font-bold max-w-2xl mx-auto">From complete beginner to advanced proficiency, we cover everything according to CEFR standards.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { level: 'A1 - A2', desc: 'Survival French. Perfect for tourists and basic everyday interactions.', img: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=600' },
                { level: 'B1 - B2', desc: 'Intermediate mastery. Required for work and university admissions.', img: 'https://images.unsplash.com/photo-1543349689-9a4d426bee8e?auto=format&fit=crop&q=80&w=600' },
                { level: 'C1 - C2', desc: 'Professional fluency. Become an expert in literature and complex business.', img: 'https://images.unsplash.com/photo-1431274172761-fca41d93e114?auto=format&fit=crop&q=80&w=600' }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -20 }}
                  className="rounded-[60px] overflow-hidden bg-gray-50 border border-gray-100 group shadow-xl"
                >
                   <div className="h-72 overflow-hidden">
                      <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.level} />
                   </div>
                   <div className="p-12">
                      <h3 className="text-4xl font-black mb-4 text-gray-900">{item.level}</h3>
                      <p className="text-gray-500 font-bold mb-8 leading-relaxed">{item.desc}</p>
                      <div className="flex items-center gap-2 text-brand-green font-black uppercase tracking-widest text-sm">
                         Explore Catalog <ArrowRight className="w-4 h-4" />
                      </div>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 px-6 bg-gray-900 text-white overflow-hidden relative">
         <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 text-balance">
               <div>
                  <h2 className="text-5xl font-black mb-12 tracking-tighter">Why Learn French?</h2>
                  <div className="space-y-10">
                     {[
                       { title: 'Global Opportunities', desc: 'Spoken by 300+ million people across 5 continents.' },
                       { title: 'Career Advantage', desc: 'Essential for luxury, art, and international relations.' },
                       { title: 'Quebec Migration', desc: 'Crucial for Express Entry and PR in Canada.' }
                     ].map((feat, i) => (
                       <div key={i} className="flex gap-6">
                          <div className="w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0">
                             <ShieldCheck className="text-brand-green w-6 h-6" />
                          </div>
                          <div>
                             <h4 className="text-2xl font-black mb-2">{feat.title}</h4>
                             <p className="text-gray-400 font-bold">{feat.desc}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-green/10 blur-[120px]" />
                  <BookOpen className="w-full h-full text-brand-green opacity-10 absolute animate-pulse" />
                  <div className="bg-gray-800 p-12 rounded-[60px] relative z-10 border border-white/5">
                     <h3 className="text-3xl font-black mb-8 border-b border-white/10 pb-4">Exam Preparation</h3>
                     <ul className="space-y-6 font-bold text-gray-300">
                        <li className="flex items-center gap-4">
                           <div className="w-2 h-2 rounded-full bg-brand-green" />
                           DELF (A1, A2, B1, B2)
                        </li>
                        <li className="flex items-center gap-4">
                           <div className="w-2 h-2 rounded-full bg-brand-green" />
                           DALF (C1, C2)
                        </li>
                        <li className="flex items-center gap-4">
                           <div className="w-2 h-2 rounded-full bg-brand-green" />
                           TEF Canada & TCF Quebec
                        </li>
                        <li className="flex items-center gap-4">
                           <div className="w-2 h-2 rounded-full bg-brand-green" />
                           Business French Modules
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-brand-green text-white">
        <div className="container mx-auto max-w-4xl text-center">
           <h2 className="text-6xl font-black mb-12 tracking-tighter text-balance">Become part of the global <br /><span className="opacity-80 underline">Francophonie today.</span></h2>
           <button 
             onClick={openContactModal}
             className="px-16 py-8 bg-white text-brand-green rounded-full text-2xl font-black hover:scale-105 transition-all shadow-2xl active:scale-95 flex items-center gap-4 mx-auto"
           >
              Enroll Now <ArrowRight className="w-8 h-8" />
           </button>
        </div>
      </section>
    </div>
  );
};

export default French;
