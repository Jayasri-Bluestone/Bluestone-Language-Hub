import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    { title: 'Mastering IELTS Writing Task 2', date: 'March 15, 2026', author: 'Dr. Emily Watson', tag: 'Academic', image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8' },
    { title: 'Top 5 Universities in Canada for 2026', date: 'March 12, 2026', author: 'Mark Stevens', tag: 'Study Abroad', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1' },
    { title: 'PTE vs IELTS: Which One is Right for You?', date: 'March 10, 2026', author: 'Sarah Lee', tag: 'Guides', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3' },
  ];

  return (
    <div className="pt-20 bg-white">
      <section className="py-16 px-6">
         <div className="container mx-auto">
            <div className="text-center mb-24">
               <span className="text-brand-green font-black tracking-[0.4em] uppercase mb-8 block">Educational Insights</span>
               <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-[0.9] tracking-tighter">LATEST <br /> <span className="text-gradient">BLOGS.</span></h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
               {posts.map((post, i) => (
                 <motion.article
                   key={i}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="group cursor-pointer"
                 >
                    <div className="rounded-[56px] overflow-hidden mb-8 shadow-2xl relative">
                       <img src={post.image} className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-110" alt={post.title} />
                       <div className="absolute top-8 left-8">
                          <span className="px-6 py-3 bg-white/90 backdrop-blur-md text-brand-green rounded-2xl text-sm font-black uppercase tracking-widest shadow-xl">
                             {post.tag}
                          </span>
                       </div>
                    </div>
                    <div className="flex items-center gap-6 text-sm font-black text-gray-400 uppercase tracking-widest mb-6">
                       <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-brand-green" />
                          {post.date}
                       </div>
                       <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-brand-green" />
                          {post.author}
                       </div>
                    </div>
                    <h2 className="text-3xl font-black text-gray-900 mb-6 leading-tight group-hover:text-brand-green transition-colors">
                       {post.title}
                    </h2>
                    <button className="flex items-center gap-3 text-lg font-black text-brand-green group-hover:gap-5 transition-all">
                       Read More <ArrowRight className="w-6 h-6" />
                    </button>
                 </motion.article>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default Blog;
