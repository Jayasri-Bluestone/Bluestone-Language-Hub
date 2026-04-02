import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Trophy, Star, ArrowRight, CheckCircle, Target, Users, Shield, Zap, Globe, Quote } from 'lucide-react';
import { useContactModal } from '../../context/ModalContext';
import SEO from '../../components/SEO';

// Import candidate portraits
import SujithPortrait from '../../assets/candidates/sujith.png';
import YogPortrait from '../../assets/candidates/yoganandhan.png';
import ArpitaPortrait from '../../assets/candidates/arpita_avatar.png';

const LanguageCertSELT = () => {
  const { openContactModal } = useContactModal();
  return (
    <div className="pt-20 bg-white">
      <SEO
        title="Language Cert & SELT (UKVI) | Bluestone Language Hub"
        description="Global proficiency certifications and UKVI-ready SELT preparation. Professional coaching and recognized credentials for your global career."
      />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2070"
            className="w-full h-full object-cover opacity-40"
            alt="Language Certification and SELT"
          />
          <div className="absolute inset-0" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <Trophy className="text-white w-8 h-8 md:w-10 md:h-10" />
            <span className="font-black tracking-[0.4em] uppercase text-xs md:text-sm">Global Proficiency & UKVI Success</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-brand-green leading-none tracking-tighter mb-10 uppercase"
          >
            Language Cert <br /> <span className="text-gray-900 drop-shadow-2xl">& SELT UKVI.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mx-auto text-slate-800 text-xl md:text-2xl font-bold italic mb-12 opacity-90"
          >
            "Your dual pathway to global recognition and UK visa compliance. Professional credentials recognized by leading institutions worldwide."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row gap-6 justify-center"
          >
            <button
              onClick={openContactModal}
              className="px-12 py-5 bg-white text-brand-green rounded-full text-xl font-black hover:scale-105 transition-all shadow-2xl"
            >
              Get Certified
            </button>
            <button
              onClick={openContactModal}
              className="px-12 py-5 bg-gray-900 text-white rounded-full text-xl font-black hover:scale-105 transition-all shadow-2xl border border-white/20"
            >
              UKVI Preparation
            </button>
          </motion.div>
        </div>
      </section>

      {/* Certification Value Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 uppercase tracking-tighter">Professional <span className="text-brand-green">Certification.</span></h2>
            <p className="text-xl text-gray-500 font-bold max-w-2xl mx-auto">A global standard for linguistic and professional competency recognized by leading employers.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="space-y-12">
                {[
                  {
                    title: 'Global Recognition',
                    desc: 'Our certification is accepted and valued by hundreds of corporate partners across Europe, Australia, and the Middle East.',
                    icon: Target
                  },
                  {
                    title: 'Skill Validation',
                    desc: 'Rigorous assessment across multiple professional and linguistic competencies to provide a true reflection of your skills.',
                    icon: Award
                  },
                  {
                    title: 'Career Advancement',
                    desc: 'Certified Bluestone alumni report higher salary outcomes and faster placement in international job markets.',
                    icon: Users
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="w-20 h-20 rounded-[32px] bg-brand-green/5 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green transition-all duration-500 shadow-sm border border-brand-green/10">
                      <item.icon className="w-10 h-10 text-brand-green group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-gray-900 mb-2 uppercase">{item.title}</h4>
                      <p className="text-lg text-gray-500 font-bold leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-1 lg:max-w-md"
            >
              <div className="p-12 md:p-16 rounded-[64px] bg-slate-50 border border-gray-100 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <GraduationCap className="w-48 h-48 text-brand-green" />
                </div>

                <div className="text-center md:text-left relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/10 rounded-full mb-8">
                    <Star className="w-4 h-4 text-brand-green fill-brand-green" />
                    <span className="text-xs font-black text-brand-green tracking-widest uppercase">Elite Credential</span>
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-8 uppercase leading-tight tracking-tighter">Your bridge to world-class <span className="text-brand-green underline italic">Professional success.</span></h3>

                  <div className="space-y-6 mb-12">
                    {[
                      'Official Digital Credential',
                      'Blockchain-Verified Security',
                      'QR Code integration for Resumes',
                      'Lifetime status in Alum network',
                      'Direct Referral Priority'
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-lg font-bold text-gray-500 italic">
                        <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={openContactModal}
                    className="w-full py-8 bg-gray-900 text-white rounded-[32px] text-2xl font-black hover:bg-brand-green transition-all shadow-xl active:scale-95 flex items-center justify-center gap-4"
                  >
                    Apply Now <ArrowRight className="w-8 h-8" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SELT (UKVI) Section */}
      <section className="py-32 px-6 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <Globe className="w-[800px] h-[800px] absolute -top-40 -right-40 text-brand-green" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">UKVI <span className="text-brand-green">SELT Prep.</span></h2>
            <p className="text-xl text-slate-400 font-bold max-w-2xl mx-auto">Get UKVI ready with specialized Secure English Language Test preparation for A1, A2, and B1 levels.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-black mb-8 leading-tight uppercase">Guaranteed Compliance <br /> <span className="text-brand-green underline">For Your Visa.</span></h3>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed font-bold">
                The Secure English Language Test (SELT) is mandatory for many UK visa applications. At Bluestone, we specialize in high-speed, result-oriented training that ensures you meet Home Office requirements on your first attempt.
              </p>

              <div className="space-y-6">
                {[
                  { title: 'A1 Level', desc: 'Family, Spouse or Partner Visas' },
                  { title: 'A2 Level', desc: 'Further Leave to Remain (Extension)' },
                  { title: 'B1 Level', desc: 'Indefinite Leave to Remain / Citizenship' }
                ].map((level, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 bg-slate-800/50 rounded-3xl border border-slate-700 hover:border-brand-green transition-colors group">
                    <div className="w-16 h-16 bg-slate-700 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green group-hover:scale-110 transition-all shadow-sm">
                      <CheckCircle className="text-brand-green w-8 h-8 group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black uppercase text-white">{level.title}</h4>
                      <p className="text-slate-500 font-bold uppercase tracking-wide text-xs">{level.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-slate-800 rounded-[80px] overflow-hidden relative border-8 border-slate-800 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1543730335-48495bc2884f?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover opacity-60 grayscale" alt="UK Visa Ready" />
                <div className="absolute inset-0 bg-brand-green/10" />
              </div>

              <div className="absolute -bottom-12 -right-12 p-12 bg-white rounded-[40px] shadow-2xl border border-gray-100 max-w-[300px]">
                <Zap className="w-12 h-12 text-brand-green mb-6" />
                <h3 className="text-2xl font-black text-gray-900 mb-2 uppercase">99% Success</h3>
                <p className="text-gray-400 font-bold uppercase tracking-tighter text-sm">Pass rate for our SELT candidates since 2020.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges - Merged */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
            <div className="flex items-center gap-3 grayscale">
              <Shield className="w-8 h-8" />
              <span className="text-xl font-black tracking-tighter uppercase whitespace-nowrap text-gray-600">Secure Protocol</span>
            </div>
            <div className="flex items-center gap-3 grayscale">
              <Award className="w-8 h-8" />
              <span className="text-xl font-black tracking-tighter uppercase whitespace-nowrap text-gray-600">Home Office Compliant</span>
            </div>
            <div className="flex items-center gap-3 grayscale">
              <Globe className="w-8 h-8" />
              <span className="text-xl font-black tracking-tighter uppercase whitespace-nowrap text-gray-600">Global Validity</span>
            </div>
            <div className="flex items-center gap-3 grayscale">
              <Target className="w-8 h-8" />
              <span className="text-xl font-black tracking-tighter uppercase whitespace-nowrap text-gray-600">EU Standards</span>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Trusted Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h4 className="text-gray-400 font-black uppercase text-sm tracking-[0.5em] mb-12">Trusted by 500+ Institutions</h4>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale contrast-125">
            <span className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tighter">Global Partners</span>
            <span className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tighter">EU Standards</span>
            <span className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tighter">Career First</span>
            <span className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tighter">Visa Expert</span>
          </div>
        </div>
      </section>

      {/* Global Success Stories */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 uppercase tracking-tighter">Global <span className="text-brand-green">Success Stories.</span></h2>
            <p className="text-xl text-gray-500 font-bold max-w-2xl mx-auto">Real results from real candidates who achieved their dreams with Bluestone.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                name: 'Sujith', 
                score: 'IELTS 7.5', 
                text: 'The structured workshops at Bluestone, especially the vocabulary drills, got me to 7.5. First-attempt success!', 
                image: SujithPortrait 
              },
              { 
                name: 'Yoganandhan', 
                score: 'IELTS 7.5', 
                text: 'Kiruthikas grammar modules and speaking practice built my foundation. The environment felt like family!', 
                image: YogPortrait 
              },
              { 
                name: 'Arpita', 
                score: 'IELTS 8.0', 
                text: 'Targeted mock tests and personalized feedback transformed my approach. Secured 8 overall!', 
                image: ArpitaPortrait 
              }
            ].map((story, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-8 rounded-[48px] bg-slate-50 border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="absolute top-8 right-8 text-brand-green/10">
                  <Quote className="w-12 h-12 fill-current" />
                </div>
                <div className="w-24 h-24 rounded-3xl overflow-hidden border-4 border-white shadow-xl mb-8 group-hover:scale-105 transition-transform duration-500">
                  <img src={story.image} className="w-full h-full object-cover" alt={story.name} />
                </div>
                <h4 className="text-2xl font-black text-gray-900 mb-2 uppercase">{story.name}</h4>
                <div className="text-brand-green font-black text-sm mb-6 uppercase tracking-widest">{story.score}</div>
                <p className="text-lg text-gray-500 font-bold italic leading-relaxed">
                  "{story.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-12 uppercase leading-none tracking-tighter">Take your career and visa <br /> <span className="text-brand-green">to the next level.</span></h2>
          <button
            onClick={openContactModal}
            className="px-16 py-8 bg-brand-green text-white rounded-full text-2xl font-black hover:bg-brand-green-light transition-all shadow-2xl shadow-brand-green/20 inline-flex items-center gap-4"
          >
            Book Your Session <ArrowRight className="w-8 h-8" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default LanguageCertSELT;
