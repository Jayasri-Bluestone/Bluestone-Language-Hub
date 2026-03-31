import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
   const reviews = [
      { name: 'Arpita', score: 'IELTS 8', text: 'I joined Bluestone Language Hub feeling overwhelmed by IELTS Writing and Speaking, scoring only 5.5 initially. Kiruthika mam targeted mock tests and personalized feedback transformed my approach—her tips on paraphrasing and fluency helped me secure 8 overall (L8, R7.5, W7.5, S7). Grateful for the confidence boost!', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150' },
      { name: 'Yoganandhan', score: 'IELTS 7.5', text: 'Coming from a non-English background in Coimbatore, I needed 7+ for migration. Kiruthikas grammar modules and speaking practice built my foundation, leading to 7.5 (L8, R7.5, W7, S7). The supportive environment felt like family!', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150' },
      { name: 'Ram', score: 'IELTS 7.5', text: 'IELTS Listening was my weak spot at 6.0, but after Kiruthika mam accent-training audio drills and weekly reviews at Bluestone Language Hub, I hit 8.0 there and 7.5 overall (L8, R7.5, W7, S7). Her motivation kept me going—perfect for ambitious goals!', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150' },
   ];

   return (
      <section id="success" className="py-32 bg-white px-6 overflow-hidden">
         <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 md:mb-24 gap-8">
                <div className="max-w-2xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter uppercase"
                    >
                        Voice of Our <br /> <span className="text-gradient">Elite Alumni.</span>
                    </motion.h2>
                </div>
               <div className="flex items-center gap-4 bg-brand-green-soft p-6 rounded-[32px] border border-brand-green/10">
                  <div className="flex -space-x-4">
                     {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-gray-200">
                           <img src={`https://i.pravatar.cc/150?u=${i}`} alt="" />
                        </div>
                     ))}
                     <div className="w-12 h-12 rounded-full border-4 border-white bg-brand-green flex items-center justify-center text-white text-xs font-black">
                        +1k
                     </div>
                  </div>
                  <div className="pr-4">
                     <div className="text-xl font-black text-gray-900">4.9/5</div>
                     <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Global Rating</div>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
               {reviews.map((review, i) => (
                  <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="p-8 md:p-12 rounded-3xl md:rounded-[56px] border border-brand-green/10 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.02)] relative group hover:border-brand-green/20 transition-all duration-700"
                  >
                     <div className="absolute top-12 right-12 text-brand-green/10 group-hover:text-brand-green/20 transition-colors">
                        <Quote className="w-20 h-20 fill-current" />
                     </div>

                     <div className="flex items-center gap-5 mb-10 relative z-10">
                        <div className="w-16 h-16 rounded-3xl overflow-hidden border border-brand-green/10 shadow-xl">
                           <img src={review.image} className="w-full h-full object-cover" alt={review.name} />
                        </div>
                         <div>
                            <h4 className="text-3xl font-black text-gray-900 tracking-tight uppercase">{review.name}</h4>
                           <div className="flex items-center gap-2">
                              <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                              <span className="text-xs font-black text-brand-green uppercase tracking-tighter">{review.score}</span>
                           </div>
                        </div>
                     </div>

                     <p className="text-md text-gray-500 font-bold leading-relaxed relative z-10 italic">
                        "{review.text}"
                     </p>

                     <div className="mt-10 pt-10 border-t border-brand-green/5 flex items-center justify-between">
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Verified Alumni</span>
                        <div className="w-8 h-8 rounded-full bg-brand-green-soft flex items-center justify-center">
                           <Star className="w-4 h-4 text-brand-green fill-brand-green" />
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Testimonials;