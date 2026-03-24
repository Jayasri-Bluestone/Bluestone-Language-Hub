import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Shield, Sparkles, Trophy, ChevronDown, BookOpen, GraduationCap, Building2, Users, FileText, HelpCircle, Image as ImageIcon, Home as HomeIcon, Target, Menu, X } from 'lucide-react';
import { useContactModal } from '../context/ModalContext';

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
                        className={`absolute top-full left-0 mt-4 p-4 bg-white/95 backdrop-blur-xl border border-brand-green/10 rounded-3xl shadow-2xl z-50 ${isLarge ? 'w-[520px] max-h-[80vh] overflow-y-auto custom-scrollbar' : 'w-72'}`}
                    >
                        <div className={`grid gap-2 ${isLarge ? 'grid-cols-2' : 'grid-cols-1'}`}>
                            {children.map((item, idx) => (
                                <Link
                                    key={idx}
                                    to={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-3 p-3 rounded-2xl hover:bg-brand-green-soft transition-colors group/item"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-brand-green-soft flex items-center justify-center group-hover/item:bg-white transition-colors">
                                        {item.icon && <item.icon className="w-5 h-5 text-gray-400 group-hover/item:text-brand-green transition-colors" />}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-sm font-bold text-gray-900 truncate">{item.name}</div>
                                        <div className="text-[10px] text-gray-400 font-medium truncate">{item.desc}</div>
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
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-brand-green-soft transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-green-soft flex items-center justify-center">
                    {sub.icon && <sub.icon className="w-5 h-5 text-brand-green" />}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-700">{sub.name}</span>
                    {sub.desc && <span className="text-[10px] text-gray-400 font-medium">{sub.desc}</span>}
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
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-brand-green-soft transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-green-soft flex items-center justify-center">
                    {sub.icon && <sub.icon className="w-5 h-5 text-brand-green" />}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-700">{sub.name}</span>
                    {sub.desc && <span className="text-[10px] text-gray-400 font-medium">{sub.desc}</span>}
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
    // ... (omitting menuItems for brevity in thought, but I will include it in the tool call)
    { name: 'Home', href: '/' },
        {
      name: 'Company',
      href: '/company',
      items: [
        { name: 'About Us', href: '/company/about', icon: Users, desc: 'Our journey & mission' },
        { name: 'Success Stories', href: '/company/success', icon: FileText, desc: 'Hear from our alumni' },
        { name: 'Blog', href: '/company/blog', icon: FileText, desc: 'Latest updates & tips' },
        { name: 'Gallery', href: '/company/gallery', icon: ImageIcon, desc: 'Life at Bluestone' },
        { name: 'FAQ', href: '/company/faq', icon: HelpCircle, desc: 'Quick answers' },
      ]
    },

        {
      name: 'Courses',
      href: '/courses',
      items: [
        { name: 'IELTS', href: '/tests/ielts', icon: BookOpen, desc: 'Master all 4 modules' },
        { name: 'PTE', href: '/tests/pte', icon: Target, desc: 'Fast-track your success' },
        { name: 'TOEFL', href: '/tests/toefl', icon: BookOpen, desc: 'Academic excellence' },
        { name: 'German', href: '/courses/german', icon: Globe, desc: 'Berlin to Munich' },
        { name: 'Japanese', href: '/courses/japanese', icon: Globe, desc: 'Land of the rising sun' },
        { name: 'French', href: '/courses/french', icon: Globe, desc: 'From Paris with love' },
      ]
    },
   
    {
      name: 'Study Abroad',
      href: '/abroad',
      items: [
        { name: 'Canada', href: '/abroad/canada', icon: Globe, desc: 'Quality education & PR' },
        { name: 'USA', href: '/abroad/usa', icon: Target, desc: 'World-class universities' },
        { name: 'UK', href: '/abroad/uk', icon: Shield, desc: 'Short duration masters' },
        { name: 'Australia', href: '/abroad/australia', icon: Users, desc: 'Vibrant student life' },
        { name: 'New Zealand', href: '/abroad/new-zealand', icon: Sparkles, desc: 'Safety & Innovation' },
        { name: 'Ireland', href: '/abroad/ireland', icon: BookOpen, desc: 'Post-study work visa' },
        { name: 'Germany', href: '/abroad/germany', icon: Globe, desc: 'Euro powerhouse' },
        { name: 'France', href: '/abroad/france', icon: Trophy, desc: 'Art & Management' },
        { name: 'Singapore', href: '/abroad/singapore', icon: Globe, desc: 'Asian financial hub' },
        { name: 'Italy', href: '/abroad/italy', icon: Target, desc: 'Design & Heritage' },
        { name: 'Malaysia', href: '/abroad/malaysia', icon: Shield, desc: 'Affordable quality' },
        { name: 'Sweden', href: '/abroad/sweden', icon: Users, desc: 'Sustainable future' },
        { name: 'Netherlands', href: '/abroad/netherlands', icon: Sparkles, desc: 'Tech & Commerce' },
        { name: 'Denmark', href: '/abroad/denmark', icon: Shield, desc: 'Innovation & Life' },
        { name: 'Bulgaria', href: '/abroad/bulgaria', icon: Globe, desc: 'Affordable Excellence' },
        { name: 'Russia', href: '/abroad/russia', icon: Target, desc: 'Medicine & Eng.' },
        { name: 'Switzerland', href: '/abroad/switzerland', icon: Shield, desc: 'Hospitality & Finance' },
        { name: 'South Korea', href: '/abroad/south-korea', icon: Sparkles, desc: 'Tech & Wave' },
        { name: 'UAE', href: '/abroad/uae', icon: Globe, desc: 'Success & Luxury' },
        { name: 'Philippines', href: '/abroad/philippines', icon: Target, desc: 'Affordable Med' },
      ]
    },


     {
      name: 'Tests',
      href: '/tests',
      items: [
        { name: 'IELTS', href: '/tests/ielts', icon: BookOpen, desc: 'Master all 4 modules' },
        { name: 'PTE', href: '/tests/pte', icon: GraduationCap, desc: 'Fast-track your success' },
        { name: 'OET', href: '/tests/oet', icon: Users, desc: 'For healthcare pros' },
        { name: 'Duolingo', href: '/tests/duolingo', icon: Globe, desc: 'The modern test' },
        { name: 'TOEFL', href: '/tests/toefl', icon: BookOpen, desc: 'Academic excellence' },
      ]
    },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-8 py-4 bg-white/40 backdrop-blur-xl border-b border-white/20"
      >
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-green-gradient rounded-lg flex items-center justify-center shadow-lg">
            <Globe className="text-white w-5 h-5 md:w-6 md:h-6" />
          </div>
          <span className="text-lg md:text-xl font-bold text-gray-900 tracking-tight">
            Bluestone <span className="text-brand-green">Language Hub</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <NavItem key={item.name} name={item.name} href={item.href}>
              {item.items}
            </NavItem>
          ))}
          <button
            onClick={openContactModal}
            className="ml-4 px-6 py-2.5 bg-brand-green text-white rounded-full font-bold hover:bg-brand-green-light transition-all shadow-lg shadow-brand-green/20 active:scale-95 leading-none"
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