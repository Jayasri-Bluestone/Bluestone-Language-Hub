import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Globe, ArrowRight, Award, Zap } from 'lucide-react';
import { useContactModal } from '../../context/ModalContext';
import SEO from '../../components/SEO';

const Selt = () => {
  const { openContactModal } = useContactModal();
  return (
    <div className="pt-20 bg-white">
      <SEO 
        title="Language SELT (UKVI) Preparation | Bluestone Language Hub" 
        description="Get UKVI ready with our specialized Secure English Language Test (SELT) preparation. Expert coaching for A1 and B1 levels." 
      />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=2070" 
            className="w-full h-full object-cover opacity-30 grayscale" 
            alt="UK Background for SELT" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
             <div className="w-16 h-1 bg-red-600 rounded-full" />
             <span className="text-red-500 font-black tracking-widest uppercase text-sm">UKVI OFFICIAL PREPARATION</span>
             <div className="w-16 h-1 bg-red-600 rounded-full" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black leading-none tracking-tighter mb-10 uppercase"
          >
            SELT <br /> <span className="text-brand-green">SUCCESS.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-xl mx-auto text-xl md:text-2xl font-bold italic opacity-80 mb-12"
          >
            "Secure your UK future with confidence. Professional coaching for A1, A2, and B1 SELT exams."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button 
              onClick={openContactModal}
              className="px-12 py-5 bg-brand-green text-white rounded-full text-xl font-black hover:scale-105 transition-all shadow-2xl shadow-brand-green/20"
            >
              Get UKVI Ready
            </button>
          </motion.div>
        </div>
      </section>

      {/* Compliance & Levels */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
               <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight uppercase">Guaranteed Compliance for Your Visa</h2>
               <p className="text-xl text-gray-500 mb-12 leading-relaxed font-bold">
                  The Secure English Language Test (SELT) is mandatory for many UK visa applications. At Bluestone, we specialize in high-speed, result-oriented training that ensures you meet Home Office requirements on your first attempt.
               </p>
               
               <div className="space-y-6">
                  {[
                    { title: 'A1 Level', desc: 'Family, Spouse or Partner Visas' },
                    { title: 'A2 Level', desc: 'Further Leave to Remain (Extension)' },
                    { title: 'B1 Level', desc: 'Indefinite Leave to Remain / Citizenship' }
                  ].map((level, i) => (
                    <div key={i} className="flex items-center gap-6 p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:border-brand-green transition-colors group">
                       <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green group-hover:scale-110 transition-all shadow-sm">
                          <CheckCircle className="text-brand-green w-8 h-8 group-hover:text-white" />
                       </div>
                       <div>
                          <h4 className="text-2xl font-black text-gray-900 uppercase">{level.title}</h4>
                          <p className="text-gray-400 font-bold uppercase tracking-wide text-xs">{level.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
               <div className="aspect-square bg-slate-50 rounded-[80px] overflow-hidden relative border-8 border-white shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1543730335-48495bc2884f?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" alt="UK Visa Ready" />
                  <div className="absolute inset-0 bg-brand-green/10" />
               </div>
               
               <div className="absolute -bottom-12 -right-12 p-12 bg-white rounded-[40px] shadow-2xl border border-gray-100 max-w-[300px]">
                  <Zap className="w-12 h-12 text-brand-green mb-6" />
                  <h3 className="text-2xl font-black text-gray-900 mb-2 uppercase">99% Success</h3>
                  <p className="text-gray-400 font-bold uppercase tracking-tighter text-sm">Pass rate for our SELT candidates since 2020.</p>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-24 bg-slate-50 border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
             <div className="flex items-center gap-3 grayscale">
                <Shield className="w-8 h-8" />
                <span className="text-xl font-black tracking-tighter uppercase whitespace-nowrap text-gray-600">Secure Protocol</span>
             </div>
             <div className="flex items-center gap-3 grayscale">
                <Award className="w-8 h-8" />
                <span className="text-xl font-black tracking-tighter uppercase whitespace-nowrap text-gray-600">Home Office Compliant</span>
             </div>
             <div className="flex items-center gap-3 grayscale">
                <Globe className="w-8 h-8" />
                <span className="text-xl font-black tracking-tighter uppercase whitespace-nowrap text-gray-600">Global Validity</span>
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6">
        <div className="container mx-auto text-center">
           <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-12 uppercase leading-none tracking-tighter">Secure your UK future <br /> <span className="text-brand-green">with the elite.</span></h2>
           <button 
             onClick={openContactModal}
             className="px-16 py-8 bg-brand-green text-white rounded-full text-2xl font-black hover:bg-brand-green-light transition-all shadow-2xl shadow-brand-green/20 inline-flex items-center gap-4"
           >
              Book Your Session <ArrowRight className="w-8 h-8" />
           </button>
        </div>
      </section>
    </div>
  );
};

export default Selt;
