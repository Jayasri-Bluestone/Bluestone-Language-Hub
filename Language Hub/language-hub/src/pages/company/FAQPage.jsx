import React from 'react';
import FAQSection from '../../components/FAQ';
import SEO from '../../components/SEO';

const FAQPage = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="Frequently Asked Questions | Bluestone Language Hub" 
        description="Got questions about IELTS, PTE, OET or studying abroad? Find answers to commonly asked questions about our coaching and consulting services."
        canonical="/company/faq"
      />
      <FAQSection />
    </div>
  );
};

export default FAQPage;
