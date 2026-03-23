import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, MapPin, ArrowRight, Star, Globe, Languages } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContactModal } from '../context/ModalContext';
import Singapore from '../assets/singapore.png';
import Ireland from '../assets/ireland.png';
import Netherlands from '../assets/nether.png';
import Switzerland from '../assets/swit.png';
import Bulgaria from '../assets/bularia.png';

const Abroad = () => {
    const { openContactModal } = useContactModal();
    const [hoveredIndex, setHoveredIndex] = useState(0);

  const destinations = [
    { name: 'USA', img: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=800', link: '/abroad/usa', icon: Globe },
    { name: 'UK', img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800', link: '/abroad/uk', icon: MapPin },
    { name: 'Canada', img: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=800', link: '/abroad/canada', icon: Globe },
    { name: 'Australia', img: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=800', link: '/abroad/australia', icon: MapPin },
    { name: 'New Zealand', img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800', link: '/abroad/new-zealand', icon: Globe },
    { name: 'Ireland', img: 'https://images.unsplash.com/photo-1590089415225-403ed3fb5bca?auto=format&fit=crop&q=80&w=800', link: '/abroad/ireland', icon: MapPin },
    { name: 'Germany', img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800', link: '/abroad/germany', icon: Globe },
    { name: 'France', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800', link: '/abroad/france', icon: MapPin },
    { name: 'Singapore', img: 'https://images.unsplash.com/photo-1559599141-860824e8678d?auto=format&fit=crop&q=80&w=800', link: '/abroad/singapore', icon: Globe },
    { name: 'Italy', img: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=800', link: '/abroad/italy', icon: MapPin },
    { name: 'Malaysia', img: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=800', link: '/abroad/malaysia', icon: Globe },
    { name: 'Sweden', img: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&q=80&w=800', link: '/abroad/sweden', icon: MapPin },
    { name: 'Netherlands', img: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=800', link: '/abroad/netherlands', icon: Globe },
    { name: 'Denmark', img: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&q=80&w=800', link: '/abroad/denmark', icon: MapPin },
    { name: 'Bulgaria', img: 'https://images.unsplash.com/photo-1561532325-7d5231a2dede?auto=format&fit=crop&q=80&w=800', link: '/abroad/bulgaria', icon: Globe },
    { name: 'Russia', img: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&q=80&w=800', link: '/abroad/russia', icon: MapPin },
    { name: 'Switzerland', img: 'https://images.unsplash.com/photo-1530122622335-36423407e735?auto=format&fit=crop&q=80&w=800', link: '/abroad/switzerland', icon: Globe },
    { name: 'South Korea', img: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&q=80&w=800', link: '/abroad/south-korea', icon: MapPin },
    { name: 'UAE', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800', link: '/abroad/uae', icon: Globe },
    { name: 'Philippines', img: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&q=80&w=800', link: '/abroad/philippines', icon: MapPin }
  ];

    return (
        <section id="aboard" className="py-20 md:py-32 bg-white px-6 overflow-hidden relative">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-16 gap-8">
                    <div className="max-w-2xl text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 mb-6 md:mb-8 border border-brand-green/20"
                        >
                            <Star className="w-4 h-4 text-brand-green fill-brand-green" />
                            <span className="text-[10px] md:text-xs font-black text-brand-green uppercase tracking-widest">Global Standards</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl sm:text-6xl md:text-7xl font-black text-gray-900 tracking-tighter"
                        >
                            Our Elite Offering <br />
                            <span className="text-brand-green">Abroad Studies</span>
                        </motion.h2>
                    </div>

                    <div className="flex gap-4">
                        <button className="w-14 h-14 rounded-full border-2 border-brand-green/10 flex items-center justify-center hover:bg-brand-green-soft transition-colors">
                            <ArrowRight className="w-6 h-6 rotate-180 text-gray-400" />
                        </button>
                        <button className="w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center hover:bg-brand-green transition-colors">
                            <ArrowRight className="w-6 h-6 text-white" />
                        </button>
                    </div>
                </div>

                {/* Scrollable Accordion Wrapper */}
                <div className="overflow-x-auto pb-10 custom-scrollbar -mx-6 px-6">
                    <div className="flex gap-4 h-[500px] md:h-[600px] w-max md:w-full md:min-w-[1200px]">
                        {destinations.map((dest, i) => (
                            <motion.div
                                key={i}
                                onMouseEnter={() => setHoveredIndex(i)}
                                animate={{
                                    flex: (typeof window !== 'undefined' && window.innerWidth < 768) ? '0 0 280px' : (hoveredIndex === i ? 4 : 1),
                                    minWidth: (typeof window !== 'undefined' && window.innerWidth < 768) ? '280px' : (hoveredIndex === i ? '500px' : '200px')
                                }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                className="relative rounded-[32px] md:rounded-[40px] overflow-hidden group cursor-pointer"
                            >
                                <Link to={dest.link} className="block w-full h-full">
                                    {/* Background Image */}
                                    <div
                                        className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                                        style={{
                                            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.8)), url(${dest.img})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}
                                    />

                                    {/* Icon Overlay */}
                                    <div className="absolute top-6 left-6 md:top-8 md:left-8 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 z-10 transition-all duration-500 group-hover:bg-white group-hover:scale-110">
                                        <dest.icon className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-brand-green transition-colors" />
                                    </div>

                  {/* Content Panel */}
                  <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end min-h-[50%] z-20">
                    <AnimatePresence mode="wait">
                      {hoveredIndex === i ? (
                        <motion.div
                          key="expanded"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                          className="max-w-md"
                        >
                          <h3 className="text-4xl font-black text-white mb-4 tracking-tight uppercase leading-none">{dest.name}</h3>
                          <p className="text-gray-200 font-medium leading-relaxed mb-8 opacity-90">
                            Explore world-class educational opportunities and cultural experiences in {dest.name}.
                          </p>
                          <button 
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              openContactModal();
                            }}
                            className="px-8 py-3 bg-white text-gray-900 rounded-full font-bold flex items-center gap-2 hover:bg-brand-green hover:text-white transition-all group/btn shadow-xl"
                          >
                            Explore Now
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="collapsed"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="md:rotate-[-90deg] origin-bottom-left whitespace-nowrap absolute bottom-12 left-1/2 md:left-20 -translate-x-1/2 md:translate-x-0"
                        >
                          <span className="text-2xl font-black text-white tracking-wider uppercase opacity-80 group-hover:opacity-100 transition-opacity">
                            {dest.name}
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abroad;