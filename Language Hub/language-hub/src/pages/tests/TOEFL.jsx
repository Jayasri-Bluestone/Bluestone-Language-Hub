import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Globe, ArrowRight, CheckCircle, BarChart } from 'lucide-react';
import { useContactModal } from '../../context/ModalContext';

const TOEFL = () => {
  const { openContactModal } = useContactModal();
  return (
    <div className="pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(var(--color-brand-green)_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-green font-black tracking-[0.4em] uppercase mb-8 block text-sm"
          >
            Academic Excellence
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-5xl font-black text-gray-900 leading-[0.8] tracking-tighter mb-12 uppercase"
          >
            TOEFL <br /> <span className="text-brand-green">iBT.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto text-2xl text-gray-400 font-bold italic"
          >
            "The premier English-language test for university study, immigration and workers worldwide."
          </motion.p>
        </div>
      </section>

      {/* Academic Rigorous Prep */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-8">
                   {[
                     { title: 'Reading', value: '30 pts', icon: BookOpen },
                     { title: 'Listening', value: '30 pts', icon: GraduationCap },
                     { title: 'Speaking', value: '30 pts', icon: Globe },
                     { title: 'Writing', value: '30 pts', icon: BarChart }
                   ].map((item, i) => (
                     <motion.div
                       key={i}
                       initial={{ opacity: 0, scale: 0.9 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       className="p-10 rounded-[48px] bg-white shadow-xl shadow-brand-green/5 border border-brand-green/10 group hover:border-brand-green transition-all duration-500"
                     >
                        <item.icon className="text-brand-green w-10 h-10 mb-6 group-hover:scale-110 transition-transform" />
                        <h4 className="text-xl font-black text-gray-900 mb-2 uppercase">{item.title}</h4>
                        <div className="text-3xl font-black text-brand-green">{item.value}</div>
                     </motion.div>
                   ))}
                </div>
             </div>

             <div className="order-1 lg:order-2">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-10 leading-tight uppercase">Master the Academic Language</h2>
                <p className="text-xl text-gray-500 mb-12 leading-relaxed font-medium">
                  TOEFL iBT requires a high level of academic English. Our course focuses on synthesizing information, integrated tasks, and the specific academic vocabulary required by US universities.
                </p>
                <div className="space-y-6 mb-16">
                   {[
                     'Personalized feedback on 12 mock tests',
                     'Access to official ETS preparation materials',
                     'Special focus on Integrated Writing tasks',
                     'Advanced Listening strategies for lectures'
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-4 text-xl font-bold text-gray-600">
                        <CheckCircle className="w-6 h-6 text-brand-green" />
                        {item}
                     </div>
                   ))}
                </div>
                <button 
                  onClick={openContactModal}
                  className="px-12 py-6 bg-brand-green text-white rounded-[32px] text-xl font-black hover:bg-brand-green-light transition-all shadow-xl shadow-brand-green/20 active:scale-95 flex items-center gap-4"
                >
                   Enroll for TOEFL <ArrowRight className="w-6 h-6" />
                </button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TOEFL;
