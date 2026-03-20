import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ContactModal from './components/ContactModal';
import Home from './pages/Home';

// Tests
import IELTS from './pages/tests/IELTS';
import PTE from './pages/tests/PTE';
import OET from './pages/tests/OET';
import DuolingoPage from './pages/tests/Duolingo';
import TOEFLPage from './pages/tests/TOEFL';

// Abroad
import CanadaPage from './pages/abroad/Canada';
import USAPage from './pages/abroad/USA';
import UKPage from './pages/abroad/UK';
import AustraliaPage from './pages/abroad/Australia';
import NewZealandPage from './pages/abroad/NewZealand';
import IrelandPage from './pages/abroad/Ireland';
import GermanyAbroad from './pages/abroad/Germany';
import FranceAbroad from './pages/abroad/France';
import SingaporePage from './pages/abroad/Singapore';
import ItalyPage from './pages/abroad/Italy';
import MalaysiaPage from './pages/abroad/Malaysia';
import SwedenPage from './pages/abroad/Sweden';
import NetherlandsPage from './pages/abroad/Netherlands';
import DenmarkPage from './pages/abroad/Denmark';
import BulgariaPage from './pages/abroad/Bulgaria';
import RussiaPage from './pages/abroad/Russia';
import SwitzerlandPage from './pages/abroad/Switzerland';
import SouthKoreaPage from './pages/abroad/SouthKorea';
import UAEPage from './pages/abroad/UAE';
import PhilippinesPage from './pages/abroad/Philippines';

// Company
import AboutUsPage from './pages/company/AboutUsPage';
import SuccessStories from './pages/company/SuccessStories';
import Blog from './pages/company/Blog';
import Gallery from './pages/company/Gallery';
import FAQPage from './pages/company/FAQPage';
 
// Courses
import GermanPage from './pages/courses/German';
import JapanesePage from './pages/courses/Japanese';
import FrenchPage from './pages/courses/French';
import Contact from './components/Contact';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <ContactModal />
      <div className="relative min-h-screen bg-white font-sans text-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Tests */}
          <Route path="/tests/ielts" element={<IELTS />} />
          <Route path="/tests/pte" element={<PTE />} />
          <Route path="/tests/oet" element={<OET />} />
          <Route path="/tests/duolingo" element={<DuolingoPage />} />
          <Route path="/tests/toefl" element={<TOEFLPage />} />

          {/* Abroad */}
          <Route path="/abroad/canada" element={<CanadaPage />} />
          <Route path="/abroad/usa" element={<USAPage />} />
          <Route path="/abroad/uk" element={<UKPage />} />
          <Route path="/abroad/australia" element={<AustraliaPage />} />
          <Route path="/abroad/new-zealand" element={<NewZealandPage />} />
          <Route path="/abroad/ireland" element={<IrelandPage />} />
          <Route path="/abroad/germany" element={<GermanyAbroad />} />
          <Route path="/abroad/france" element={<FranceAbroad />} />
          <Route path="/abroad/singapore" element={<SingaporePage />} />
          <Route path="/abroad/italy" element={<ItalyPage />} />
          <Route path="/abroad/malaysia" element={<MalaysiaPage />} />
          <Route path="/abroad/sweden" element={<SwedenPage />} />
          <Route path="/abroad/netherlands" element={<NetherlandsPage />} />
          <Route path="/abroad/denmark" element={<DenmarkPage />} />
          <Route path="/abroad/bulgaria" element={<BulgariaPage />} />
          <Route path="/abroad/russia" element={<RussiaPage />} />
          <Route path="/abroad/switzerland" element={<SwitzerlandPage />} />
          <Route path="/abroad/south-korea" element={<SouthKoreaPage />} />
          <Route path="/abroad/uae" element={<UAEPage />} />
          <Route path="/abroad/philippines" element={<PhilippinesPage />} />

          {/* Company */}
          <Route path="/company/about" element={<AboutUsPage />} />
          <Route path="/company/success" element={<SuccessStories />} />
          <Route path="/company/blog" element={<Blog />} />
          <Route path="/company/gallery" element={<Gallery />} />
          <Route path="/company/faq" element={<FAQPage />} />
 
          {/* Courses */}
          <Route path="/courses/german" element={<GermanPage />} />
          <Route path="/courses/japanese" element={<JapanesePage />} />
          <Route path="/courses/french" element={<FrenchPage />} />

          {/* Contact */}
          <Route path='/contact' element={<Contact />} />
          

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

