import React, { useState } from 'react';
import { Globe, Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Youtube, ArrowRight, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setTimeout(() => setSubscribed(false), 3000);
            setEmail('');
        }
    };

    const footerColumns = [
        {
            title: 'Top Destinations',
            links: [
                { name: 'Study in Canada', href: '/abroad/canada' },
                { name: 'Study in UK', href: '/abroad/uk' },
                { name: 'Study in USA', href: '/abroad/usa' },
                { name: 'Study in Australia', href: '/abroad/australia' },
                { name: 'Study in Germany', href: '/abroad/germany' }
            ]
        },
        {
            title: 'Elite Tests',
            links: [
                { name: 'IELTS Coaching', href: '/tests/ielts' },
                { name: 'PTE Academic', href: '/tests/pte' },
                { name: 'OET for Nurses', href: '/tests/oet' },
                { name: 'Duolingo Test', href: '/tests/duolingo' },
                { name: 'TOEFL Prep', href: '/tests/toefl' }
            ]
        },
        {
            title: 'Company',
            links: [
                { name: 'About Us', href: '/company/about' },
                { name: 'Success Stories', href: '/company/success' },
                { name: 'Elite Blogs', href: '/company/blog' },
                { name: 'Our Gallery', href: '/company/gallery' },
                { name: 'F.A.Q', href: '/company/faq' }
            ]
        }
    ];

    return (
        <footer id="contact" className="bg-[#050505] text-white pt-10 md:pt-16 pb-12 px-6 relative overflow-hidden">
            {/* Animated Mesh Gradient Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-green/30 to-transparent" />
                <motion.div 
                    animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                        x: [0, 50, 0],
                        y: [0, -50, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-brand-green/10 rounded-full blur-[160px]"
                />
                <motion.div 
                    animate={{ 
                        scale: [1.2, 1, 1.2],
                        opacity: [0.05, 0.15, 0.05],
                        x: [0, -30, 0],
                        y: [0, 30, 0]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[140px]"
                />
            </div>

            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
                    {/* Brand Column */}
                    <div className="lg:col-span-4 max-w-sm">
                        <Link to="/" className="flex items-center gap-4 mb-10 group">
                            <div className="w-14 h-14 bg-green-gradient rounded-[20px] flex items-center justify-center shadow-2xl shadow-brand-green/30 group-hover:rotate-12 transition-transform duration-500">
                                <Globe className="text-white w-8 h-8" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-black tracking-tighter leading-none">Bluestone</span>
                                <span className="text-brand-green font-black uppercase text-[10px] tracking-[0.4em] mt-1">Language Hub</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 leading-relaxed mb-12 font-bold text-lg italic opacity-80">
                            "Where global ambitions meet elite preparation. Bridging the gap between your potential and world-class opportunities since 2026."
                        </p>
                        <div className="flex gap-4">
                            {[
                                { Icon: Youtube, href: 'https://www.youtube.com/@bluestonelanguagehub' },
                                { Icon: Instagram, href: 'https://www.instagram.com/bluestonelanguagehub' },
                                { Icon: Facebook, href: 'https://www.facebook.com/bluestonelanguagehub' },
                                { Icon: Linkedin, href: 'https://www.linkedin.com/company/bluestone-language-hub/' }
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -8, scale: 1.1, backgroundColor: '#00F5A0' }}
                                    className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center transition-all border border-white/10 backdrop-blur-md"
                                >
                                    <social.Icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="lg:col-span-1" /> {/* Spacer */}
                    
                    {footerColumns.map((col, idx) => (
                        <div key={idx} className="lg:col-span-2">
                            <h4 className="text-xs font-black uppercase tracking-[0.5em] text-brand-green mb-10">{col.title}</h4>
                            <ul className="space-y-6 text-gray-500 font-bold">
                                {col.links.map(link => (
                                    <li key={link.name}>
                                        <Link to={link.href} className="hover:text-brand-green transition-colors flex items-center gap-3 group whitespace-nowrap">
                                            <span className="w-1 h-1 rounded-full bg-brand-green opacity-0 group-hover:opacity-100 transition-opacity" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact & Newsletter Column */}
                    <div className="lg:col-span-3">
                        <h4 className="text-xs font-black uppercase tracking-[0.5em] text-brand-green mb-10">Get In Touch</h4>
                        <div className="space-y-10">
                            <ul className="space-y-8 text-gray-400 font-bold">
                                <li className="flex gap-4 group cursor-pointer" onClick={() => window.open('https://wa.me/919876543210')}>
                                    <div className="w-11 h-11 rounded-2xl bg-brand-green/5 flex items-center justify-center flex-shrink-0 border border-white/5 group-hover:bg-brand-green transition-colors">
                                        <MessageCircle className="w-5 h-5 text-brand-green group-hover:text-white" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-600 uppercase tracking-widest leading-none mb-1">WhatsApp Chat</span>
                                        <span className="text-sm font-black text-gray-200">+91 98765 43210</span>
                                    </div>
                                </li>
                                <li className="flex gap-4 group">
                                    <div className="w-11 h-11 rounded-2xl bg-brand-green/5 flex items-center justify-center flex-shrink-0 border border-white/5 group-hover:bg-brand-green transition-colors">
                                        <Mail className="w-5 h-5 text-brand-green group-hover:text-white" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-600 uppercase tracking-widest leading-none mb-1">Admissions</span>
                                        <span className="text-sm font-black text-gray-200">admissions@bluestonehub.com</span>
                                    </div>
                                </li>
                            </ul>

                            {/* Newsletter */}
                          
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-8 text-gray-600 text-[10px] font-black uppercase tracking-[0.3em] text-center lg:text-left">
                    <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
                        <p>© 2026 Bluestone Language Hub. Engineered for Excellence.</p>
                        <div className="w-1 h-1 rounded-full bg-white/10 hidden lg:block" />
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms</a>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                        <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                        <span className="opacity-80">Global Network Status: Active</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;