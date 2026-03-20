import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
    'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45',
  ];

  return (
    <div className="pt-20 bg-white">
      <section className="py-32 px-6">
         <div className="container mx-auto">
            <div className="text-center mb-24">
               <span className="text-brand-green font-black tracking-[0.4em] uppercase mb-8 block">Life at Bluestone</span>
               <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-[0.9] tracking-tighter">OUR <br /> <span className="text-gradient">GALLERY.</span></h1>
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
