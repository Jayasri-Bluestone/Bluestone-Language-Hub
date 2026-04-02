import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Shield, Sparkles, Trophy, ChevronDown, BookOpen, GraduationCap, Building2, Users, FileText, HelpCircle, Image as ImageIcon, Home as HomeIcon, Target, Menu, X } from 'lucide-react';
import { useContactModal } from '../context/ModalContext';

// Import Logos
import ieltsLogo from '../assets/logos/ielts.png';
import pteLogo from '../assets/logos/pte.png';
import toeflLogo from '../assets/logos/toefl.png';
import oetLogo from '../assets/logos/oet.png';
import duolingoLogo from '../assets/logos/duolingo.png';
import languageCertLogo from '../assets/logos/cert selt.png';

const NavItem = ({ name, children, href }) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

  if (!children) {
    return (
      <Link
        to={href}
        className={`text-sm font-semibold transition-all hover:scale-105 ${location.pathname === href ? 'text-brand-green' : 'text-gray-700 hover:text-brand-green'}`}
      >
        {name}
      </Link>
    );
  }

    const isLarge = children && children.length > 6;
    const isMega = children && children.length > 12;

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className={`flex items-center gap-1 text-sm font-semibold transition-all group-hover:text-brand-green ${location.pathname.startsWith(href) ? 'text-brand-green' : 'text-gray-700'}`}>
        {name}
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
 
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className={`absolute top-full mt-4 p-5 bg-white/95 backdrop-blur-xl border border-brand-green/10 rounded-[32px] shadow-2xl z-50 ${isMega ? 'w-[780px] left-1/2 -translate-x-1/2' : isLarge ? 'w-[520px] left-1/2 -translate-x-1/2' : 'w-72 left-0'} ${isLarge ? 'max-h-[85vh] overflow-y-auto custom-scrollbar' : ''}`}
                    >
                        <div className={`grid gap-2 ${isMega ? 'grid-cols-3' : isLarge ? 'grid-cols-2' : 'grid-cols-1'}`}>
                            {children.map((item, idx) => (
                                <Link
                                    key={idx}
                                    to={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-3 p-3 rounded-2xl hover:bg-brand-green-soft transition-colors group/item"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-brand-green-soft flex items-center justify-center group-hover/item:bg-white transition-all overflow-hidden relative">
                                        {item.image ? (
                                            <img 
                                                src={item.image} 
                                                alt={item.name} 
                                                className="w-full h-full object-contain p-1.5 group-hover/item:scale-110 transition-transform" 
                                            />
                                        ) : item.flag ? (
                                            <img 
                                                src={`https://flagcdn.com/w80/${item.flag}.png`} 
                                                alt={item.name} 
                                                className="w-full h-full object-cover group-hover/item:scale-110 transition-transform" 
                                            />
                                        ) : item.icon ? (
                                            <item.icon className="w-5 h-5 text-gray-400 group-hover/item:text-brand-green transition-colors" />
                                        ) : null}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-sm font-bold text-gray-900 group-hover/item:text-brand-green transition-colors">{item.name}</div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const MobileNavItem = ({ name, href, items, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasItems = items && items.length > 0;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        {hasItems ? (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl font-black text-gray-900 hover:text-brand-green transition-colors flex items-center justify-between w-full text-left"
          >
            {name}
            <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
          </button>
        ) : (
          <Link
            to={href}
            onClick={onClick}
            className="text-xl font-black text-gray-900 hover:text-brand-green transition-colors"
          >
            {name}
          </Link>
        )}
      </div>

      <AnimatePresence>
        {hasItems && isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 gap-2 pl-4 border-l-2 border-brand-green/10 mt-2 py-2">
              {items.map((sub, sidx) => (
                <Link
                  key={sidx}
                  to={sub.href}
                  onClick={onClick}
                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-brand-green-soft transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-green-soft flex items-center justify-center overflow-hidden">
                    {sub.image ? (
                        <img src={sub.image} alt={sub.name} className="w-full h-full object-contain p-1" />
                    ) : sub.flag ? (
                        <img src={`https://flagcdn.com/w80/${sub.flag}.png`} alt={sub.name} className="w-full h-full object-cover" />
                    ) : sub.icon ? (
                        <sub.icon className="w-5 h-5 text-brand-green" />
                    ) : null}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-700">{sub.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


const Navbar = () => {
  const { openContactModal } = useContactModal();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const menuItems = [
    { name: 'Home', href: '/' },
        {
      name: 'Company',
      href: '/company',
      items: [
        { name: 'About Us', href: '/company/about', icon: Users },
        { name: 'Success Stories', href: '/company/success', icon: FileText },
        // { name: 'Blog', href: '/company/blog', icon: FileText },
        { name: 'Gallery', href: '/company/gallery', icon: ImageIcon },
        { name: 'FAQ', href: '/company/faq', icon: HelpCircle },
      ]
    },

        {
      name: 'Courses',
      href: '/#courses',
      items: [
        { name: 'IELTS', href: '/tests/ielts', image: ieltsLogo },
        { name: 'PTE', href: '/tests/pte', image: pteLogo },
        { name: 'OET', href: '/tests/oet', image: oetLogo },
        { name: 'TOEFL', href: '/tests/toefl', image: toeflLogo },
        { name: 'German', href: '/courses/german', flag: 'de' },
        { name: 'Japanese', href: '/courses/japanese', flag: 'jp' },
        { name: 'French', href: '/courses/french', flag: 'fr' },
        { name: 'Language Cert SELT', href: '/courses/language-cert-selt', image: languageCertLogo },
      ]
    },
   
    {
      name: 'Study Abroad',
      href: '/#aboard',
      items: [
        { name: 'Canada', href: '/abroad/canada', flag: 'ca' },
        { name: 'USA', href: '/abroad/usa', flag: 'us' },
        { name: 'UK', href: '/abroad/uk', flag: 'gb' },
        { name: 'Australia', href: '/abroad/australia', flag: 'au' },
        { name: 'New Zealand', href: '/abroad/new-zealand', flag: 'nz' },
        { name: 'Ireland', href: '/abroad/ireland', flag: 'ie' },
        { name: 'Germany', href: '/abroad/germany', flag: 'de' },
        { name: 'France', href: '/abroad/france', flag: 'fr' },
        { name: 'Singapore', href: '/abroad/singapore', flag: 'sg' },
        { name: 'Italy', href: '/abroad/italy', flag: 'it' },
        { name: 'Malaysia', href: '/abroad/malaysia', flag: 'my' },
        { name: 'Sweden', href: '/abroad/sweden', flag: 'se' },
        { name: 'Netherlands', href: '/abroad/netherlands', flag: 'nl' },
        { name: 'Denmark', href: '/abroad/denmark', flag: 'dk' },
        { name: 'Bulgaria', href: '/abroad/bulgaria', flag: 'bg' },
        { name: 'Russia', href: '/abroad/russia', flag: 'ru' },
        { name: 'Switzerland', href: '/abroad/switzerland', flag: 'ch' },
        { name: 'South Korea', href: '/abroad/south-korea', flag: 'kr' },
        { name: 'UAE', href: '/abroad/uae', flag: 'ae' },
        { name: 'Philippines', href: '/abroad/philippines', flag: 'ph' },
      ]
    },


     {
      name: 'Tests',
      href: '/tests',
      items: [
        { name: 'IELTS', href: '/tests/ielts', image: ieltsLogo },
        { name: 'PTE', href: '/tests/pte', image: pteLogo },
        { name: 'OET', href: '/tests/oet', image: oetLogo },
        { name: 'Duolingo', href: '/tests/duolingo', image: duolingoLogo },
        { name: 'TOEFL', href: '/tests/toefl', image: toeflLogo },
      ]
    },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-[100] bg-white/40 backdrop-blur-xl border-b border-white/20"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-green-gradient rounded-lg flex items-center justify-center shadow-lg transform active:scale-95 transition-transform">
              <Globe className="text-white w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-base md:text-xl font-bold text-gray-900 tracking-tight">
                Bluestone <span className="text-brand-green">Language Hub</span>
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {menuItems.map((item) => (
              <NavItem key={item.name} name={item.name} href={item.href}>
                {item.items}
              </NavItem>
            ))}
            <button
              onClick={openContactModal}
              className="ml-2 lg:ml-4 px-6 py-2.5 bg-brand-green text-white rounded-full font-bold hover:bg-brand-green-light transition-all shadow-lg shadow-brand-green/20 active:scale-95"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-brand-green transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer - Outside nav for perfect visibility */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[9999] md:hidden flex flex-col h-screen"
          >
            {/* Mobile Header (Inside Drawer) */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white sticky top-0 z-50">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-gradient rounded-lg flex items-center justify-center">
                  <Globe className="text-white w-5 h-5" />
                </div>
                <span className="text-lg font-bold text-gray-900 tracking-tight">
                  Bluestone <span className="text-brand-green">Language Hub</span>
                </span>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-400 hover:text-brand-green transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 pb-32 custom-scrollbar">
              <div className="flex flex-col gap-8">
                {menuItems.map((item, idx) => (
                  <MobileNavItem
                    key={idx}
                    name={item.name}
                    href={item.href}
                    items={item.items}
                    onClick={() => setIsMobileMenuOpen(false)}
                  />
                ))}
              </div>
            </div>

            <div className="p-6 bg-gradient-to-t from-white via-white to-transparent pt-12 absolute bottom-0 left-0 right-0 pointer-events-none">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openContactModal();
                }}
                className="w-full py-5 bg-green-gradient text-white rounded-2xl font-black text-lg shadow-2xl shadow-brand-green/30 active:scale-95 transition-transform pointer-events-auto"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;