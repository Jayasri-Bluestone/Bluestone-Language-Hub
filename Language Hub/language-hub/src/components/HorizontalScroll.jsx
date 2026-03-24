import React, { useRef } from 'react';
import excellenceImg from '../assets/excellence.png';
import globalImg from '../assets/global.png';
import supportImg from '../assets/support.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useContactModal } from '../context/ModalContext';
const HorizontalScroll = () => {
    const { openContactModal } = useContactModal();
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-95%"]);
    const items = [
        { title: 'Excellence', text: 'Top-tier coaching for IELTS and PTE with a focus on mastery.', image: excellenceImg },
        { title: 'Global', text: 'Opening pathways to elite universities in the USA, UK, and beyond.', image: globalImg },
        { title: 'Support', text: 'Full visa, admission, and linguistic guidance for every student.', image: supportImg },
    ];
    return (
        <section
            ref={targetRef}
            className="relative h-auto md:h-[500vh] bg-white py-20 md:py-0"
            style={{ isolation: 'isolate' }}
        >
            <div className="md:sticky md:top-0 md:h-screen flex flex-col md:flex-row items-center overflow-hidden z-10">
                <motion.div
                    style={typeof window !== 'undefined' && window.innerWidth >= 768 ? { x } : {}}
                    className="flex flex-col md:flex-row gap-16 md:gap-[1vw] px-6 md:px-[10vw] relative z-20 w-full md:w-max items-center md:items-stretch"
                >
                    {/* Main Reveal Text */}
                    <div className="flex-shrink-0 w-full md:w-[100vw] h-full flex flex-col justify-center md:pl-20 text-center md:text-left">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-brand-green font-black tracking-[0.4em] uppercase mb-8 block text-xs"
                        >
                            Our Core DNA
                        </motion.span>
                        <h2 className="text-5xl sm:text-7xl md:text-[140px] lg:text-[220px] font-black text-gray-900 leading-[0.85] md:leading-[0.8] tracking-tighter">
                            WE SHAPE <br />
                            <span className="text-gradient">FUTURES.</span>
                        </h2>
                        <p className="mt-8 md:mt-16 text-xl md:text-3xl text-gray-400 max-w-2xl font-bold leading-relaxed mx-auto md:mx-0">
                            Scroll to explore the pillars of Bluestone Language Hub. We don't just teach languages; <span className="text-gray-900 italic underline decoration-brand-green/30 underline-offset-8">we bridge worlds.</span>
                        </p>
                    </div>
                    {/* Feature Cards */}
                    {items.map((item, i) => (
                        <div key={i} className="flex-shrink-0 w-full md:w-[450px] h-[400px] md:h-[500px] flex flex-col justify-end p-8 md:p-20 rounded-[40px] md:rounded-[80px] relative overflow-hidden group shadow-2xl transition-all duration-1000 hover:translate-y-[-20px] border border-gray-100">
                            <div className="absolute inset-0 z-0">
                                <img src={item.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0" alt="" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent opacity-90" />
                            </div>
                            <div className="relative z-10 text-white">
                                <span className="text-xs font-black uppercase tracking-[0.4em] mb-4 md:mb-8 block text-brand-green-pop">Pillar 0{i + 1}</span>
                                <h3 className="text-4xl md:text-7xl font-black mb-4 md:mb-8 tracking-tighter leading-tight">{item.title}</h3>
                                <p className="text-lg md:text-2xl opacity-70 leading-relaxed font-bold max-w-md">
                                    {item.text}
                                </p>
                                <div className="mt-12 h-px w-0 group-hover:w-full bg-brand-green-pop transition-all duration-700" />
                            </div>
                        </div>
                    ))}
                    {/* Final Call to Action in Scroll */}
                    <div className="flex-shrink-0 w-full md:w-[50vw] flex flex-col justify-center items-center text-center py-10">
                        <motion.h2
                            whileInView={{ scale: [0.9, 1.1, 1], rotate: [0, 2, -2, 0] }}
                            className="text-6xl md:text-[100px] font-black text-gray-900 mb-12 md:mb-16 leading-[1]"
                        >
                            Ready to <br /> <span className="text-gradient">LEAP?</span>
                        </motion.h2>
                        <div className="p-1.5 md:p-2 rounded-full bg-green-gradient shadow-[0_30px_100px_rgba(34,197,94,0.4)]" onClick={openContactModal}>
                            <button className="px-10 py-4 md:px-16 md:py-6 bg-white text-brand-green rounded-full text-xl md:text-3xl font-black hover:bg-transparent hover:text-white transition-all transform hover:scale-105 active:scale-95 flex items-center gap-4">
                                Apply Now <ArrowRight className="w-5 h-5 md:w-8 md:h-8" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
export default HorizontalScroll;