import React from 'react';
import Hero from '../components/Hero';
import HorizontalScroll from '../components/HorizontalScroll';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import GlobalImpact from '../components/GlobalImpact';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Aboard from '../components/Aboard';
import CoursesScroll from '../components/CoursesScroll';

const Home = () => {
  return (
    <main>
      <Hero />
      <HorizontalScroll />
      <About />
      <WhyChooseUs />
      <CoursesScroll />
      <GlobalImpact />
      <Aboard />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
};

export default Home;
