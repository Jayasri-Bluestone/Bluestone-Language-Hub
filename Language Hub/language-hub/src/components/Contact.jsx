import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    program: 'Select a Program',
    message: ''
  });
  const [status, setStatus] = React.useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost:5006/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: 'success', message: 'Thank you! Your message has been sent.' });
        setFormData({
          name: '',
          phone: '',
          email: '',
          program: 'Select a Program',
          message: ''
        });
      } else {
        setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to connect to the server.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-32 bg-white px-6">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 mb-8 border border-brand-green/20"
            >
              <MessageSquare className="w-4 h-4 text-brand-green fill-brand-green/20" />
              <span className="text-xs font-black text-brand-green uppercase tracking-widest">Get in Touch</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-black text-gray-900 mb-8 tracking-tighter"
            >
              Start Your <span className="text-brand-green">Journey.</span>
            </motion.h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-semibold leading-relaxed">
              Have questions about our programs or want to book a free counseling session? We're here to help you reach your global goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
            {/* Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900 text-white p-12 md:p-16 rounded-[60px] relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 p-12 opacity-10">
                <Send className="w-64 h-64 text-brand-green" />
              </div>

              <div className="relative z-10">
                <h3 className="text-4xl font-black mb-12 tracking-tight">Contact Information</h3>
                <div className="space-y-10">
                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-brand-green w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-400 mb-1 uppercase tracking-widest text-[10px]">Email Us</h4>
                      <p className="text-xl font-bold">
                        <a href="mailto:info@bluestoneocs.com" className="hover:text-brand-green transition-colors">info@bluestoneocs.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-brand-green w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-400 mb-1 uppercase tracking-widest text-[10px]">Call Us</h4>
                      <p className="text-xl font-bold">
                        <a href="tel:+919342899904" className="hover:text-brand-green transition-all">+91 93428 99904</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-brand-green w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-400 mb-1 uppercase tracking-widest text-[10px]">Visit Coimbatore HQ</h4>
                      <p className="text-xl font-bold">
                        <a 
                          href="https://www.google.com/maps/search/?api=1&query=Renaissance+Terrace+NO.126L+2nd+floor+Opp+Bishop+Appasamy+College+Coimbatore+641018" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-brand-green transition-all"
                        >
                          Renaissance Terrace, NO.126L, 2nd floor, Opp. Bishop Appasamy College, Coimbatore - 641018.
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-20 relative z-10">
                <div className="flex gap-4">
                  {[
                    { label: 'YT', href: 'https://www.youtube.com/@bluestonelanguagehub' },
                    { label: 'IG', href: 'https://www.instagram.com/bluestonelanguagehub' },
                    { label: 'FB', href: 'https://www.facebook.com/bluestonelanguagehub' },
                    { label: 'LI', href: 'https://www.linkedin.com/company/bluestone-language-hub/' }
                  ].map((social, i) => (
                    <a 
                      key={i} 
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-green hover:border-brand-green transition-all cursor-pointer font-black text-xs"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-green-soft p-12 md:p-16 rounded-[60px]"
            >
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-8 py-5 rounded-3xl bg-white border border-brand-green/10 focus:border-brand-green focus:ring-4 focus:ring-brand-green/5 outline-none transition-all font-bold text-gray-900" 
                      placeholder="John Doe" 
                    />
                  </div>
              
                </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-8 py-5 rounded-3xl bg-white border border-brand-green/10 focus:border-brand-green focus:ring-4 focus:ring-brand-green/5 outline-none transition-all font-bold text-gray-900" 
                      placeholder="+91" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-8 py-5 rounded-3xl bg-white border border-brand-green/10 focus:border-brand-green focus:ring-4 focus:ring-brand-green/5 outline-none transition-all font-bold text-gray-900" 
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Interested In</label>
                  <select 
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full px-8 py-5 rounded-3xl bg-white border border-gray-100 focus:border-brand-green focus:ring-4 focus:ring-brand-green/5 outline-none transition-all font-bold text-gray-900 appearance-none"
                  >
                    <option disabled>Select a Program</option>
                    <option>IELTS</option>
                    <option>TOEFL</option>
                    <option>PTE</option>
                    <option>German</option>
                    <option>French</option>
                    <option>Japanese</option>
                    <option>Study Abroad Consultancy</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Your Message</label>
                  <textarea 
                    rows="3"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-8 py-5 rounded-[32px] bg-white border border-gray-100 focus:border-brand-green focus:ring-4 focus:ring-brand-green/5 outline-none transition-all font-bold text-gray-900 resize-none" 
                    placeholder="Tell us about your goals..." 
                  />
                </div>

                {status.message && (
                  <div className={`p-4 rounded-2xl text-sm font-bold ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {status.message}
                  </div>
                )}

                <button 
                  disabled={isSubmitting}
                  className="w-full py-6 bg-brand-green text-white rounded-3xl text-xl font-black hover:bg-brand-green-light transition-all shadow-xl shadow-brand-green/20 active:scale-[0.98] flex items-center justify-center gap-4 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Contact;
