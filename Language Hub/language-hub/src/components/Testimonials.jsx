import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle, ShieldCheck } from 'lucide-react';

// Import candidate portraits
import ArpitaImg from '../assets/candidates/arpita_avatar.png';
import YogImg from '../assets/candidates/yoganandhan.png';
import SujithImg from '../assets/candidates/sujith.png';
import PranavImg from '../assets/candidates/pranav.png';

const Testimonials = () => {
   const [currentIndex, setCurrentIndex] = useState(0);

   const reviews = [
      { 
         name: 'Arpita', 
         score: 'IELTS 8.0', 
         text: "Kiruthika mam's personalized feedback transformed my approach. Secured 8 overall in my first attempt!", 
         image: ArpitaImg 
      },
      { 
         name: 'Yoganandhan', 
         score: 'IELTS 7.5', 
         text: 'From a non-English background to 7.5! The speaking practice sessions were a game-changer.', 
         image: YogImg 
      },
      { 
         name: 'Sujith', 
         score: 'IELTS 7.5', 
         text: 'The reading workshops and vocabulary drills helped me overcome my time-management hurdles. Highly recommend!', 
         image: SujithImg 
      },
      { 
         name: 'Pranav', 
         score: 'IELTS 7.0', 
         text: 'Flexible online sessions and realistic mock exams made scoring 7.0 possible while working full-time.', 
         image: PranavImg 
      },
   ];

   const next = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
   const prev = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

   return (
      <section id="success" className="py-32 bg-white px-6 overflow-hidden relative">
         <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-10">
               <div className="max-w-xl">
                  <span className="text-brand-green font-black uppercase tracking-[0.3em] text-xs mb-4 block">Proven Success</span>
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight tracking-tighter uppercase">
                     Voice of <span className="text-gradient">Elite Alumni.</span>
                  </h2>
               </div>
               
               <div className="flex gap-4">
                  <button onClick={prev} className="w-12 h-12 rounded-full border border-gray-200 hover:border-brand-green hover:text-brand-green transition-all flex items-center justify-center text-gray-400 bg-white shadow-sm">
                     <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button onClick={next} className="w-12 h-12 rounded-full border border-gray-200 hover:border-brand-green hover:text-brand-green transition-all flex items-center justify-center text-gray-400 bg-white shadow-sm">
                     <ChevronRight className="w-6 h-6" />
                  </button>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {/* 
                  To maintain the carousel feel requested previously, 
                  but respecting the "small corner image" request, 
                  let's show a dynamic grid or a multi-card view.
               */}
               <AnimatePresence mode="popLayout">
                  {reviews.slice(currentIndex, currentIndex + 3).concat(
                     reviews.slice(0, Math.max(0, (currentIndex + 3) - reviews.length))
                  ).map((review, i) => (
                     <motion.div
                        key={review.name}
                        layout
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="p-8 pb-10 bg-gray-50 rounded-[40px] border border-gray-100 relative group hover:bg-white hover:shadow-2xl hover:shadow-brand-green/5 transition-all duration-500"
                     >
                        {/* Profile Image - Small Left Corner */}
                        <div className="absolute top-8 left-8 w-14 h-14 rounded-2xl overflow-hidden border-2 border-white shadow-lg z-10 transition-transform group-hover:scale-110">
                           <img src={review.image} className="w-full h-full object-cover" alt={review.name} />
                        </div>

                        {/* Verified Icon */}
                        <div className="absolute top-16 left-16 w-6 h-6 bg-brand-green rounded-full flex items-center justify-center text-white border-2 border-white shadow-md z-20">
                           <CheckCircle className="w-3 h-3 fill-current" />
                        </div>

                        <div className="mt-16 md:mt-20">
                           <div className="flex gap-1 mb-6">
                              {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-amber-500 fill-current" />)}
                           </div>
                           
                           <p className="text-lg md:text-xl font-bold text-gray-700 leading-tight mb-8 italic">
                              "{review.text}"
                           </p>

                           <div className="pt-6 border-t border-gray-200/60">
                              <h4 className="text-xl font-black text-gray-900 tracking-tight flex items-center gap-2">
                                 {review.name}
                                 <ShieldCheck className="w-4 h-4 text-brand-green" />
                              </h4>
                              <span className="text-[10px] font-black text-brand-green uppercase tracking-widest bg-brand-green/10 px-2 py-0.5 rounded-full inline-block mt-2">
                                 {review.score}
                              </span>
                           </div>
                        </div>

                        <Quote className="absolute bottom-8 right-8 w-12 h-12 text-brand-green opacity-5 group-hover:opacity-10 transition-opacity" />
                     </motion.div>
                  ))}
               </AnimatePresence>
            </div>
         </div>
      </section>
   );
};

export default Testimonials;
