import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO';
import { useContactModal } from '../../context/ModalContext';

const German = () => {
  const { openContactModal } = useContactModal();
  return (
    <div className="pt-20 bg-white">
      <SEO 
        title="German Language Course | Bluestone Language Hub" 
        description="Master the German language with our expert-led courses. From A1 to C2 levels, we prepare you for life in Germany." 
      />
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=2070" 
            className="w-full h-full object-cover grayscale brightness-50" 
            alt="German Language Backdrop" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center gap-2 mb-10"
          >
             <div className="w-16 h-3 bg-black rounded-sm" />
             <div className="w-16 h-3 bg-red-600 rounded-sm" />
             <div className="w-16 h-3 bg-yellow-500 rounded-sm" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-5xl font-black leading-tight tracking-tighter mb-8 uppercase"
          >
            GERMAN <br /> <span className="text-brand-green">LANGUAGE.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto text-2xl font-bold italic opacity-90"
          >
             "Sprechen Sie Deutsch? Open doors to Europe's powerhouse with our comprehensive training."
          </motion.p>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight tracking-tighter text-gray-900 uppercase">Level up your career with German excellence</h2>
                 <p className="text-xl text-gray-500 mb-12 leading-relaxed font-bold">
                    German is the key to unlocking thousands of free education opportunities and high-paying jobs in the European Union. Our courses cover all levels from A1 (Beginner) to C2 (Advanced), with specific focus on Goethe-Institut exam preparation.
                 </p>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { title: 'Levels A1-C2', desc: 'Fully structured curriculum per CEFR standards.' },
                      { title: 'Goethe Prep', desc: 'Specialized training for certification exams.' },
                      { title: 'Daily Practice', desc: 'Speaking-focused sessions with experts.' },
                      { title: 'Job Assistance', desc: 'Resume building for the German job market.' }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                         <div className="w-2 h-2 rounded-full bg-brand-green mt-3 flex-shrink-0" />
                          <div>
                             <h4 className="text-2xl font-black mb-1 text-gray-900 uppercase">{item.title}</h4>
                            <p className="text-sm text-gray-400 font-medium">{item.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="relative">
                 <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1527633593645-d259aeas4b01?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" alt="German Student" />
                 </div>
                 <div className="absolute -bottom-10 -left-10 bg-brand-green p-10 rounded-[40px] text-white shadow-2xl max-w-[250px]">
                    <div className="text-4xl font-black mb-2">95%</div>
                    <div className="text-sm font-bold opacity-80 uppercase tracking-widest">Success Rate in Goethe Exams</div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
           <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tighter uppercase">Ready to start your <span className="text-brand-green underline">German journey?</span></h2>
           <button 
             onClick={openContactModal}
             className="px-16 py-8 bg-brand-green text-white rounded-full text-2xl font-black hover:scale-105 transition-all shadow-2xl shadow-brand-green/20 active:scale-95 flex items-center gap-4 mx-auto"
           >
              Enroll Now <ArrowRight className="w-8 h-8" />
           </button>
        </div>
      </section>
    </div>
  );
};

export default German;
