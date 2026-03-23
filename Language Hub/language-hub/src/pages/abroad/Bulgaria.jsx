import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ShieldCheck, Target, ArrowRight, BookOpen } from 'lucide-react';
import SEO from '../../components/SEO';
import { useContactModal } from '../../context/ModalContext';
import Bulgari from '../../assets/bularia.png';

const Bulgaria = () => {
  const { openContactModal } = useContactModal();
  return (
    <div className="pt-20 bg-white">
      <SEO title="Study in Bulgaria | Affordable Excellence | Bluestone Overseas" description="Explore high-quality medical and technical education at affordable costs. Expert guidance for Bulgaria admissions." />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={Bulgari} className="w-full h-full object-cover brightness-50" alt="Bulgaria" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-green/40 via-transparent to-brand-green/40" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center text-white p-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md mb-8 border border-white/30"
          >
            <Globe className="w-5 h-5 text-white" />
            <span className="text-sm font-black uppercase tracking-widest text-white">Study in Bulgaria</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-7xl md:text-9xl font-black leading-tight tracking-tighter mb-8 uppercase"
          >
            AFFORDABLE <br /> <span className="text-white opacity-80 decoration-brand-green underline underline-offset-8">EXCELLENCE.</span>
          </motion.h1>
          <p className="max-w-2xl mx-auto text-2xl font-bold italic opacity-90 px-4">
             "Get world-class medical and technical education in Bulgaria at highly competitive costs. Secure your future in Europe's rising academic center."
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
           <div className="text-center mb-24">
              <h2 className="text-6xl font-black mb-8 tracking-tighter text-gray-900">Why Study in Bulgaria?</h2>
              <p className="text-xl text-gray-400 font-bold max-w-2xl mx-auto">Discover high-quality education and globally recognized degrees at a fraction of the cost.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { title: 'Recognized Medical Degrees', desc: 'Bulgarian medical universities offer world-class curricula that are recognized globally and in the EU.', img: 'https://images.unsplash.com/photo-1576091160550-217359f48f60?auto=format&fit=crop&q=80&w=600' },
                { title: 'Low Tuition & Living', desc: 'Experience quality education and a high standard of living with highly affordable tuition and costs.', img: 'https://images.unsplash.com/photo-1555990548-6480106ced5b?auto=format&fit=crop&q=80&w=600' },
                { title: 'Rich Cultural Experience', desc: 'Study in a country with a deep historical heritage and a welcoming, diverse international community.', img: 'https://images.unsplash.com/photo-1493246507139-91e8bef99c02?auto=format&fit=crop&q=80&w=600' }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -20 }}
                  className="rounded-[60px] overflow-hidden bg-gray-50 border border-gray-100 group shadow-xl"
                >
                   <div className="h-72 overflow-hidden">
                      <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
                   </div>
                   <div className="p-12">
                      <h3 className="text-3xl font-black mb-4 text-gray-900 leading-tight">{item.title}</h3>
                      <p className="text-gray-500 font-bold mb-8 leading-relaxed">{item.desc}</p>
                      <div className="flex items-center gap-2 text-brand-green font-black uppercase tracking-widest text-sm">
                         View Requirements <ArrowRight className="w-4 h-4" />
                      </div>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 px-6 bg-gray-900 text-white overflow-hidden relative">
         <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
               <div>
                  <h2 className="text-5xl font-black mb-12 tracking-tighter">Your Bulgarian Journey</h2>
                  <div className="space-y-12">
                     {[
                       { title: 'Medical Program Admissions', desc: 'Specialized support for applying to Bulgaria\'s top medical and dental programs.' },
                       { title: 'Document Legalization', desc: 'Expert assistance with mandatory legalization and translation of your academic papers.' },
                       { title: 'Visa Application Support', desc: 'End-to-end guidance to ensure a smooth Bulgarian student visa process.' }
                     ].map((feat, i) => (
                       <div key={i} className="flex gap-8">
                          <div className="w-16 h-16 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0">
                             <Target className="text-brand-green w-8 h-8" />
                          </div>
                          <div>
                             <h4 className="text-2xl font-black mb-2">{feat.title}</h4>
                             <p className="text-gray-400 font-bold text-lg">{feat.desc}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-green/10 blur-[120px]" />
                  <div className="bg-gray-800 p-16 rounded-[60px] relative z-10 border border-white/5 shadow-2xl">
                     <h3 className="text-4xl font-black mb-10 border-b border-white/10 pb-6 uppercase tracking-tight">Bulgarian Package</h3>
                     <ul className="grid grid-cols-1 gap-6 font-bold text-gray-300 text-xl">
                        <li className="flex items-center gap-4">
                           <div className="w-3 h-3 rounded-full bg-brand-green" />
                           Entrance Exam Coordination
                        </li>
                        <li className="flex items-center gap-4">
                           <div className="w-3 h-3 rounded-full bg-brand-green" />
                           Legalization Services
                        </li>
                        <li className="flex items-center gap-4">
                           <div className="w-3 h-3 rounded-full bg-brand-green" />
                           Visa & Housing Support
                        </li>
                        <li className="flex items-center gap-4">
                           <div className="w-3 h-3 rounded-full bg-brand-green" />
                           Pre-departure Orientation
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-brand-green text-white">
        <div className="container mx-auto max-w-4xl text-center">
           <h2 className="text-6xl font-black mb-12 tracking-tighter text-balance uppercase">Ready to study in <br /><span className="opacity-80 underline underline-offset-8">Bulgaria?</span></h2>
           <button 
             onClick={openContactModal}
             className="px-16 py-8 bg-white text-brand-green rounded-full text-2xl font-black hover:scale-105 transition-all shadow-2xl active:scale-95 flex items-center gap-4 mx-auto uppercase"
           >
              Apply Now <ArrowRight className="w-8 h-8" />
           </button>
        </div>
      </section>
    </div>
  );
};
export default Bulgaria;
