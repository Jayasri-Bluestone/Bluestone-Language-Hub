import React from 'react';
import { motion } from 'framer-motion';
import gallery1 from '../../assets/gallery1.png';
import gallery2 from '../../assets/gallery2.png';
import gallery3 from '../../assets/gallery3.png';
import gallery4 from '../../assets/gallery4.png';
import gallery5 from '../../assets/gallery5.jpeg';

const Gallery = () => {
  const images = [
   gallery1,
gallery2,
gallery3,
gallery4,
gallery5,
  ];

  return (
    <div className="pt-20 bg-white">
      <section className="py-16 px-6">
         <div className="container mx-auto">
            <div className="text-center mb-24">
               <span className="text-brand-green font-black tracking-[0.4em] uppercase mb-8 block">Life at Bluestone</span>
                <h1 className="text-5xl md:text-5xl font-black text-gray-900 leading-[0.9] tracking-tighter uppercase">OUR <br /> <span className="text-gradient uppercase">GALLERY.</span></h1>
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-12">
               {images.map((img, i) => (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="break-inside-avoid rounded-[48px] overflow-hidden shadow-2xl hover:shadow-brand-green/20 transition-all duration-700"
                 >
                    <img src={`${img}?auto=format&fit=crop&q=80&w=800`} className="w-full h-auto hover:scale-105 transition-transform duration-1000" alt="Gallery" />
                 </motion.div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default Gallery;
