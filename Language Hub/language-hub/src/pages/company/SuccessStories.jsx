import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Play } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    { name: 'Sarah Jenkins', result: 'IELTS 8.5', uni: 'Oxford University', text: 'I never thought I could get an 8.5, but the personalized attention at Bluestone made it possible.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' },
    { name: 'Rahul Sharma', result: 'PTE 82', uni: 'University of Toronto', text: 'The mock tests were almost identical to the real exam. It boosted my confidence significantly.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d' },
    { name: 'Elena Petrova', result: 'OET Grade A', uni: 'NHS UK', text: 'As a nurse, I needed specialized help. Bluestone provided the best medical-focused training.', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2' },
  ];

  return (
    <div className="pt-20 bg-white">
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-24">
             <span className="text-brand-green font-black tracking-[0.4em] uppercase mb-8 block">Hall of Fame</span>
             <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-[0.9] tracking-tighter">SUCCESS <br /> <span className="text-gradient">STORIES.</span></h1>
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
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                           <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl">
                              <Play className="text-brand-green w-8 h-8 fill-current" />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="w-full lg:w-1/2">
                     <div className="flex items-center gap-2 mb-6">
                        {[...Array(5)].map((_, i) => <Star key={i} className="text-amber-500 w-5 h-5 fill-current" />)}
                     </div>
                     <h3 className="text-5xl font-black text-gray-900 mb-4">{story.name}</h3>
                     <div className="text-2xl font-black text-brand-green mb-8">{story.result} • {story.uni}</div>
                     <p className="text-2xl text-gray-500 font-bold leading-relaxed italic mb-10">
                        "{story.text}"
                     </p>
                     <button className="px-10 py-5 bg-brand-green text-white rounded-3xl text-lg font-black hover:bg-brand-green-light transition-all shadow-xl shadow-brand-green/20 flex items-center gap-3">
                        View Case Study <ArrowRight className="w-6 h-6" />
                     </button>
                  </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
