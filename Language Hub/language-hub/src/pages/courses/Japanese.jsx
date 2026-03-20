import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ShieldCheck, ArrowRight, Languages } from 'lucide-react';
import SEO from '../../components/SEO';
import { useContactModal } from '../../context/ModalContext';

const Japanese = () => {
  const { openContactModal } = useContactModal();
  return (
    <div className="pt-20 bg-white">
      <SEO 
        title="Japanese Language Course | Bluestone Language Hub" 
        description="Learn Japanese from native-level experts. Prepare for JLPT and explore career opportunities in Japan." 
      />
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=2070" 
            className="w-full h-full object-cover grayscale brightness-50" 
            alt="Japanese Language Backdrop" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center mb-10"
          >
             <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-2xl relative">
                <div className="w-16 h-16 rounded-full bg-[#bc002d]" /> {/* Japan Circle */}
             </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-black leading-tight tracking-tighter mb-8"
          >
            JAPANESE <br /> <span className="text-brand-green">TRAINING.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto text-2xl font-bold italic opacity-90"
          >
             "From Hiragana to JLPT N1. Explore the technology and culture of the rising sun."
          </motion.p>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1">
                 <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl border-2 border-gray-50">
                    <img src="https://images.unsplash.com/photo-1528605105345-5334a14876ee?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" alt="Japan Career" />
                 </div>
              </div>
              <div className="order-1 lg:order-2">
                 <h2 className="text-5xl font-black mb-10 leading-tight tracking-tighter text-gray-900">Your Gateway to a Career in Japan</h2>
                 <p className="text-xl text-gray-500 mb-12 leading-relaxed font-bold">
                    With Japan's increasing demand for skilled technical and healthcare professionals, Japanese language proficiency is a powerful asset. Our course is specifically designed for the JLPT exam and cultural adaptation.
                 </p>
                 
                 <div className="space-y-6">
                    {[
                      { title: 'JLPT Focused', desc: 'Comprehensive prep for N5, N4, N3, N2, and N1 levels.' },
                      { title: 'Cultural Immersion', desc: 'Learn the nuances of Japanese work culture and etiquette.' },
                      { title: 'Visa Assistance', desc: 'End-to-end help with specified skilled worker (SSW) visas.' }
                    ].map((item, i) => (
                      <div key={i} className="p-8 rounded-[40px] bg-gray-50 border border-gray-100 hover:border-brand-green/30 transition-colors">
                         <h4 className="text-2xl font-black mb-2 text-gray-900">{item.title}</h4>
                         <p className="text-gray-500 font-bold">{item.desc}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-brand-green text-white">
        <div className="container mx-auto max-w-4xl text-center">
           <h2 className="text-6xl font-black mb-12 tracking-tighter">Start your Japanese <br /><span className="opacity-60 underline">Odyssey today.</span></h2>
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

export default Japanese;
