import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Phone, Mail, MapPin, RotateCcw } from 'lucide-react';
import { useContactModal } from '../context/ModalContext';

const ContactModal = () => {
  const { isContactModalOpen, closeContactModal } = useContactModal();
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    program: 'Select a Program',
    message: ''
  });
  const [status, setStatus] = React.useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [captchaCode, setCaptchaCode] = React.useState('');
  const [captchaInput, setCaptchaInput] = React.useState('');

  const generateCaptcha = () => {
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(result);
  };

  React.useEffect(() => {
    if (isContactModalOpen) {
      generateCaptcha();
      setCaptchaInput('');
    }
  }, [isContactModalOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (captchaInput !== captchaCode) {
      setStatus({ type: 'error', message: 'Invalid verification code.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://bluestoneinternationalpreschool.com/bgoi_portal/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          domain: 'Language Hub',
          category: 'Website Enquiry',
          interested_in: formData.program
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: 'success', message: 'Inquiry sent successfully!' });
        setTimeout(() => {
          closeContactModal();
          setFormData({
            name: '',
            phone: '',
            email: '',
            program: 'Select a Program',
            message: ''
          });
          setStatus({ type: '', message: '' });
        }, 2000);
      } else {
        setStatus({ type: 'error', message: 'Failed to send inquiry.' });
        generateCaptcha();
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Connection error.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isContactModalOpen && (
        <div className="fixed inset-0 z-[100] mt-10 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeContactModal}
            className="absolute inset-0 bg-gray-900/60 backdrop-blur-xl"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-[95%] md:w-full max-w-4xl bg-white rounded-3xl md:rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[80vh] md:max-h-[80vh]"
          >
            {/* Left side - Brand Info */}
            <div className="w-full md:w-1/3 bg-gray-900 p-8 text-white hidden md:flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-black mb-6 tracking-tighter">Start Your <span className="text-brand-green">Journey.</span></h2>
                <div className="space-y-6">
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-brand-green" />
                    </div>
                    <span className="text-sm font-bold">+91 93428 99904</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-brand-green" />
                    </div>
                    <span className="text-sm font-bold">info@bluestoneocs.com</span>
                  </div>
                </div>
              </div>
              
              <div className="opacity-40 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                Premium Excellence in Language Coaching and Abroad Studies.
              </div>
            </div>

            {/* Right side - Form */}
            <div className="flex-1 p-6 md:p-12 overflow-y-auto custom-scrollbar relative">
              <button 
                onClick={closeContactModal}
                className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors z-20"
              >
                <X className="w-5 h-5 text-gray-900" />
              </button>

              <div className="md:hidden mb-8">
                <h2 className="text-2xl font-black text-gray-900 tracking-tight">Start Your <span className="text-brand-green">Journey</span></h2>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Get in touch with our experts</p>
              </div>

              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-3 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-green focus:ring-4 focus:ring-brand-green/5 outline-none transition-all font-bold text-gray-500" 
                    placeholder="John Doe" 
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Phone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-3 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-green focus:ring-4 focus:ring-brand-green/5 outline-none transition-all font-bold text-gray-900" 
                      placeholder="+91" 
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-3 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-green focus:ring-4 focus:ring-brand-green/5 outline-none transition-all font-bold text-gray-900" 
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Program Interested In</label>
                  <select 
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full px-6 py-3 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-green focus:ring-4 focus:ring-brand-green/5 outline-none transition-all font-bold text-gray-900 appearance-none"
                  >
                     <option disabled>Select a Program</option>
                     <option>IELTS Coaching</option>
                     <option>TOEFL Coaching</option>
                     <option>PTE Coaching</option>
                     <option>German Language</option>
                     <option>French Language</option>
                     <option>Japanese Language</option>
                     <option>Study Abroad Consultancy</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Message</label>
                  <textarea 
                    rows="3"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-6 py-3 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-green focus:ring-4 focus:ring-brand-green/5 outline-none transition-all font-bold text-gray-900 resize-none" 
                    placeholder="Tell us about your goals..." 
                  />
                </div>

                {/* Captcha Section */}
                <div className="space-y-4 bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2 block mb-2">Verification Code</label>
                      <div className="flex items-center gap-3">
                        <div className="bg-gray-900 text-brand-green px-4 py-2 rounded-xl font-mono text-xl font-black tracking-[0.2em] select-none shadow-inner flex-1 text-center italic">
                          {captchaCode}
                        </div>
                        <button 
                          type="button"
                          onClick={generateCaptcha}
                          className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center hover:bg-brand-green hover:text-white transition-all text-brand-green group/refresh"
                          title="Refresh Code"
                        >
                          <RotateCcw className="w-4 h-4 group-hover/refresh:rotate-180 transition-transform duration-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Type the code</label>
                    <input
                      type="text"
                      required
                      value={captchaInput}
                      onChange={(e) => setCaptchaInput(e.target.value)}
                      className="w-full px-6 py-3 rounded-2xl bg-white border border-gray-100 focus:border-brand-green focus:ring-4 focus:ring-brand-green/5 outline-none transition-all font-black text-gray-900 tracking-widest text-center"
                      placeholder="XXXXXX"
                      maxLength={6}
                    />
                  </div>
                </div>

                {status.message && (
                  <div className={`p-4 rounded-2xl text-sm font-bold ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {status.message}
                  </div>
                )}

                <button 
                  disabled={isSubmitting}
                  className="w-full py-3 bg-brand-green text-white rounded-2xl text-lg font-black hover:bg-brand-green-light transition-all shadow-xl shadow-brand-green/20 active:scale-[0.98] flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                  {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;