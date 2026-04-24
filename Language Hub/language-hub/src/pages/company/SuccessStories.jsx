import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Eye, X, Award, CheckCircle, FileText } from 'lucide-react';

// Import Candidate Portraits
import ArpitaPortrait from '../../assets/candidates/arpita_avatar.png';
import YogPortrait from '../../assets/candidates/yoganandhan.png';
import SujithPortrait from '../../assets/candidates/sujith.png';
import PranavPortrait from '../../assets/candidates/pranav.png';
import ShyamPortrait from '../../assets/candidates/shyam.png';
import VarunPortrait from '../../assets/candidates/varun.png';

// Import Full Certificates (for Preview)
import ArpitaCert from '../../assets/certificates/arpitacert.jpg';
import ShyamCert from '../../assets/certificates/shyam_pte.png';
import VarunCert from '../../assets/certificates/varun_oet.png';
import Sujith from '../../assets/certificates/sujith.pdf';
import Yog from '../../assets/certificates/yog.pdf';
import Pranav from '../../assets/certificates/pranav.PDF';

// Import Certificate Thumbnails (for the 'Official Credential' box)
import YogThumb from '../../assets/certificates/yoganandhan_thumb.png';
import SujithThumb from '../../assets/certificates/sujith_thumb.png';
import PranavThumb from '../../assets/certificates/pranav_thumb.png';

import SEO from '../../components/SEO';

const SuccessStories = () => {
   const [selectedCert, setSelectedCert] = useState(null);

   const isPDF = (url) => url?.toLowerCase().endsWith('.pdf');

   const stories = [
      
      { 
         name: 'Yoganandhan', 
         result: 'IELTS 7.5', 
         text: '"Coming from a non-English background in Coimbatore, I needed 7+ for migration. Kiruthikas grammar modules and speaking practice built my foundation, leading to 7.5 (L8, R7.5, W7, S7). The supportive environment felt like family!"', 
         image: YogPortrait,
         cert: Yog,
         thumb: YogThumb
      },
      { 
         name: 'Sujith', 
         result: 'IELTS 7.5', 
         text: '"Struggling with Reading speed, I aimed for 7+ for my study abroad dreams. The structured workshops at Bluestone, especially Kiruthikas vocabulary drills and time-management strategies, got me to 7.5 (L7.5, R8, W7, S7). First-attempt success—highly recommend!"', 
         image: SujithPortrait,
         cert: Sujith,
         thumb: SujithThumb
      },
      { 
         name: 'Arpita', 
         result: 'IELTS 8', 
         text: '"I joined Bluestone Language Hub feeling overwhelmed by IELTS Writing and Speaking, scoring only 5.5 initially. Kiruthika mam targeted mock tests and personalized feedback transformed my approach—her tips on paraphrasing and fluency helped me secure 8 overall (L8, R7.5, W7.5, S7). Grateful for the confidence boost!"', 
         image: ArpitaPortrait,
         cert: ArpitaCert,
         thumb: null
      },
    
      { 
         name: 'Pranav', 
         result: 'IELTS 7', 
         text: '"As a working professional, balancing IELTS prep was tough, but Kiruthika mams flexible online sessions and real-exam simulations made it possible. From 6.0 to 7.0 overall (L7, R7, W7, S7), her focus on task response was game-changing. Thank you!"', 
         image: PranavPortrait,
         cert: Pranav,
         thumb: PranavThumb
      },
     
   ];

   return (
      <div className="pt-20 bg-white">
         <SEO 
            title="Success Stories & Hall of Fame" 
            description="Real stories of excellence. See how Bluestone Language Hub helped students achieve 8+ IELTS bands and secure global university admissions."
            canonical="/company/success"
         />
         <section className="py-16 px-6">
            <div className="container mx-auto">
               <div className="text-center mb-24">
                  <span className="text-brand-green font-black tracking-[0.4em] uppercase mb-8 block">Hall of Fame</span>
                  <h1 className="text-5xl md:text-5xl font-black text-gray-900 leading-[0.9] tracking-tighter uppercase">SUCCESS <br /> <span className="text-gradient uppercase">STORIES.</span></h1>
               </div>

               <div className="grid grid-cols-1 gap-16">
                  {stories.map((story, i) => (
                     <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 p-12 rounded-[80px] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-700`}
                     >
                        <div className="w-full lg:w-1/2 relative group">
                           <div className="rounded-[60px] overflow-hidden shadow-2xl relative">
                              <img src={story.image} className="w-full aspect-[4/3] object-cover transition-transform duration-1000 group-hover:scale-105" alt={story.name} />
                           </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                           <div className="flex items-center justify-between mb-8">
                              <div className="flex items-center gap-1">
                                 {[...Array(5)].map((_, i) => <Star key={i} className="text-amber-500 w-5 h-5 fill-current" />)}
                              </div>
                              <div className="flex items-center gap-2 px-4 py-2 bg-brand-green/10 rounded-full border border-brand-green/20">
                                 <CheckCircle className="w-4 h-4 text-brand-green" />
                                 <span className="text-[10px] font-black text-brand-green uppercase tracking-widest">Score Verified</span>
                              </div>
                           </div>
                           <h3 className="text-3xl font-black text-gray-900 mb-2 uppercase">{story.name}</h3>
                           <div className="text-2xl font-black text-brand-green mb-8">{story.result}</div>
                           <p className="text-lg text-gray-500 font-bold leading-relaxed italic mb-12">
                              {story.text}
                           </p>

                           {/* Certificate Preview Section */}
                           <div className="flex flex-col sm:flex-row items-center gap-8 p-6 bg-white rounded-[40px] border border-gray-100 shadow-xl shadow-gray-200/50 text-center sm:text-left">
                              <div className="relative group/cert w-22 h-28 flex-shrink-0 cursor-pointer" onClick={() => setSelectedCert(story.cert)}>
                                 <div className="absolute inset-0 bg-brand-green/20 rounded-2xl blur-xl group-hover/cert:blur-2xl transition-all" />
                                 {story.thumb ? (
                                    <img src={story.thumb} className="w-full h-full object-cover rounded-2xl border-2 border-white relative z-10 transition-transform group-hover/cert:scale-105" alt="Certificate Cover" />
                                 ) : isPDF(story.cert) ? (
                                    <div className="w-full h-full bg-brand-green-soft rounded-2xl border-2 border-white relative z-10 flex flex-col items-center justify-center gap-2 text-brand-green">
                                       <FileText className="w-10 h-10" />
                                       <span className="text-[10px] font-black uppercase tracking-widest">View PDF</span>
                                    </div>
                                 ) : (
                                    <img src={story.cert} className="w-full h-full object-cover rounded-2xl border-2 border-white relative z-10 transition-transform group-hover/cert:scale-105" alt="Certificate Thumbnail" />
                                 )}
                                 <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover/cert:opacity-100 transition-opacity bg-black/20 rounded-2xl">
                                    <Eye className="text-white w-8 h-8" />
                                 </div>
                              </div>
                              <div className="flex-1 text-center sm:text-left">
                                 <h4 className="text-lg font-black text-gray-900 mb-1 uppercase tracking-tight">Official Credential</h4>
                                 <p className="text-sm text-gray-400 font-bold mb-4 uppercase tracking-tighter">Verified Achievement Report</p>
                                 <button
                                    onClick={() => setSelectedCert(story.cert)}
                                    className="px-6 py-3 bg-gray-900 text-white rounded-2xl text-sm font-black hover:bg-brand-green transition-all shadow-lg flex items-center justify-center gap-2 mx-auto sm:mx-0"
                                 >
                                    Preview<Eye className="w-4 h-4" />
                                 </button>
                              </div>
                           </div>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* Certificate Modal */}
         <AnimatePresence>
            {selectedCert && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[2000] flex items-center justify-center p-6 md:p-12 lg:p-20 bg-slate-900/90 backdrop-blur-xl"
                  onClick={() => setSelectedCert(null)}
               >
                  <button
                     className="absolute top-8 right-8 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-[2001]"
                     onClick={() => setSelectedCert(null)}
                   >
                     <X className="w-8 h-8" />
                  </button>

                  <motion.div
                     initial={{ scale: 0.9, opacity: 0, rotateX: 20 }}
                     animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                     exit={{ scale: 0.9, opacity: 0, rotateX: 20 }}
                     transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                     className="relative max-w-5xl w-full h-[90vh] bg-white rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl shadow-black/50 border-8 border-white/20"
                     onClick={(e) => e.stopPropagation()}
                  >
                     {isPDF(selectedCert) ? (
                        <iframe
                           src={`${selectedCert}#toolbar=0&navpanes=0`}
                           className="w-full h-full border-none"
                           title="Certificate PDF"
                        />
                     ) : (
                        <img src={selectedCert} className="w-full h-full object-contain bg-white" alt="Full Certificate View" />
                     )}

                     {/* Subtle info overlay */}
                     <div className="absolute bottom-8 left-12 right-12 flex justify-between items-center text-gray-900/40 pointer-events-none">
                        <div className="flex items-center gap-2">
                           <Award className="w-5 h-5 text-brand-green" />
                           <span className="text-xs font-black uppercase tracking-widest">Bluestone Language Hub • Verified</span>
                        </div>
                     </div>
                  </motion.div>
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   );
};

export default SuccessStories;
