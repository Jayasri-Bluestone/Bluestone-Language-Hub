import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Plus, Minus, MessageCircle } from 'lucide-react';

const FAQItem = ({ question, answer, i }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      className={`mb-6 rounded-[32px] overflow-hidden border transition-all duration-500 ${isOpen ? 'border-brand-green bg-white shadow-2xl shadow-brand-green/5' : 'border-brand-green/10 bg-brand-green-soft/50 hover:bg-white hover:border-brand-green/20'}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-10 py-8 flex items-center justify-between text-left"
      >
        <span className="text-xl font-black text-gray-900 tracking-tight">{question}</span>
        <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-brand-green text-white' : 'bg-white text-gray-400 border border-brand-green/10'}`}>
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="px-10 pb-10 text-lg text-gray-500 font-bold leading-relaxed border-t border-brand-green/5 pt-6">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const faqs = [
    { question: 'What is the duration of the IELTS course?', answer: 'Our standard IELTS program lasts 8 weeks, with intensive options available for 4 weeks. We also offer flexible weekend batches for working professionals.' },
    { question: 'Do you provide study material?', answer: 'Yes, we provide comprehensive study materials, including mock test papers, vocabulary sheets, and access to our online portal with 100+ practice tests.' },
    { question: 'Can I get help with my university application?', answer: 'Absolutely! Our Study Abroad consulting team handles everything from university selection and SOP writing to visa filing and scholarship assistance.' },
    { question: 'What is the success rate of Bluestone Hub?', answer: 'We pride ourselves on a 99% success rate, with over 10,000 students successfully placed in top global universities across 15+ countries.' },
    { question: 'Is online coaching available?', answer: 'Yes, we offer high-quality online coaching via our interactive learning platform, featuring live classes with expert trainers and recorded sessions.' },
  ];

  return (
    <section id="faq" className="py-32 bg-white px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-brand-green font-black tracking-[0.4em] uppercase mb-8 block text-xs"
          >
            Quick Answers
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter mb-16 uppercase"
          >
            Frequently Asked <span className="text-gradient uppercase">Questions.</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} i={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-12 rounded-[48px] bg-brand-green text-white text-center shadow-2xl shadow-brand-green/20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <HelpCircle className="w-64 h-64" />
          </div>
          <h4 className="text-2xl font-black mb-6 relative z-10 uppercase">Still have questions?</h4>
          <p className="text-lg opacity-80 mb-10 relative z-10 font-bold max-w-xl mx-auto">Our linguistic consultants are here to help you draft your roadmap to success.</p>
          <a 
            href="https://wa.me/919342899904" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 px-12 py-5 bg-white text-brand-green rounded-2xl text-lg font-black hover:bg-white hover:scale-105 transition-all shadow-xl active:scale-95 relative z-10"
          >
            <MessageCircle className="w-6 h-6 fill-current text-brand-green/20" />
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;