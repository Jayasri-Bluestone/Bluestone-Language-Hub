import React from 'react';
import { Globe, Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Youtube, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#050505] text-white pt-32 pb-12 px-6 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-green/20 to-transparent" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-[150px] -z-0" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-10">
               <div className="w-12 h-12 bg-green-gradient rounded-xl flex items-center justify-center shadow-2xl shadow-brand-green/20">
                  <Globe className="text-white w-7 h-7" />
               </div>
               <span className="text-2xl font-black tracking-tighter">Bluestone <span className="text-brand-green">Hub</span></span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm mb-10 font-bold text-lg">
              Empowering students to achieve their global education dreams through elite coaching and personalized consulting.
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
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="w-12 h-12 rounded-2xl bg-brand-green-soft/10 flex items-center justify-center hover:bg-brand-green transition-colors border border-brand-green/10"
                 >
                    <social.Icon className="w-5 h-5" />
                 </motion.a>
               ))}
            </div>
          </div>

          <div className="md:col-span-2">
             <h4 className="text-xs font-black uppercase tracking-[0.3em] text-brand-green mb-10">Quick Links</h4>
              <ul className="space-y-6 text-gray-400 font-bold">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'Courses', href: '/courses' },
                  { name: 'About Us', href: '/company/about' },
                  { name: 'Success Stories', href: '/company/success' },
                  { name: 'Blogs', href: '/company/blog' }
                ].map(item => (
                  <li key={item.name}>
                    <Link to={item.href} className="hover:text-white transition-colors flex items-center gap-2 group">
                       <span className="w-1.5 h-1.5 rounded-full bg-brand-green scale-0 group-hover:scale-100 transition-transform" />
                       {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
          </div>

          <div className="md:col-span-3">
             <h4 className="text-xs font-black uppercase tracking-[0.3em] text-brand-green mb-10">Get In Touch</h4>
             <ul className="space-y-8 text-gray-400 font-bold">
                <li className="flex gap-5">
                   <div className="w-10 h-10 rounded-xl bg-brand-green-soft/10 flex items-center justify-center flex-shrink-0 border border-white/5">
                      <Phone className="w-5 h-5 text-brand-green" />
                   </div>
                   <a href="tel:+919876543210" className="text-sm hover:text-white transition-colors tracking-tight">+91 98765 43210 <br /> <span className="text-gray-600">+91 01234 56789</span></a>
                </li>
                <li className="flex gap-5">
                   <div className="w-10 h-10 rounded-xl bg-brand-green-soft/10 flex items-center justify-center flex-shrink-0 border border-white/5">
                      <Mail className="w-5 h-5 text-brand-green" />
                   </div>
                   <a href="mailto:info@bluestonehub.com" className="text-sm hover:text-white transition-colors tracking-tight">info@bluestonehub.com <br /> <span className="text-gray-600">admissions@bluestonehub.com</span></a>
                </li>
                <li className="flex gap-5">
                   <div className="w-10 h-10 rounded-xl bg-brand-green-soft/10 flex items-center justify-center flex-shrink-0 border border-white/5">
                      <MapPin className="w-5 h-5 text-brand-green" />
                   </div>
                   <a 
                     href="https://www.google.com/maps/search/?api=1&query=123+Education+Mall+Coimbatore+Tamil+Nadu" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="text-sm hover:text-white transition-colors tracking-tight"
                   >
                     123, Education Mall, <br /> <span className="text-gray-600">Coimbatore, Tamil Nadu</span>
                   </a>
                </li>
             </ul>
          </div>

          <div className="md:col-span-3">
             <h4 className="text-xs font-black uppercase tracking-[0.3em] text-brand-green mb-10">Join Our Insider</h4>
             <p className="text-gray-400 mb-8 font-bold leading-relaxed">Get the latest updates on study abroad opportunities.</p>
             <form className="relative group">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-brand-green-soft/10 border border-brand-green/10 px-6 py-5 rounded-2xl w-full focus:outline-none focus:border-brand-green transition-colors font-bold placeholder:text-gray-600" 
                />
                <button className="absolute right-2 top-2 bottom-2 bg-brand-green hover:bg-brand-green-light px-5 rounded-xl transition-all active:scale-95 flex items-center justify-center">
                   <ArrowRight className="w-5 h-5" />
                </button>
             </form>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-600 text-[10px] font-black uppercase tracking-widest">
           <p>© 2026 Bluestone Language Hub. Engineered for Excellence.</p>
           <div className="flex gap-10">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
