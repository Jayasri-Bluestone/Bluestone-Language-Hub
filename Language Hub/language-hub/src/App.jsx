import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ContactModal from './components/ContactModal';

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-brand-green/20 border-t-brand-green rounded-full animate-spin"></div>
      <p className="text-gray-500 font-medium animate-pulse">Loading experience...</p>
    </div>
  </div>
);

// Home
const Home = lazy(() => import('./pages/Home'));

// Tests
const IELTS = lazy(() => import('./pages/tests/IELTS'));
const PTE = lazy(() => import('./pages/tests/PTE'));
const OET = lazy(() => import('./pages/tests/OET'));
const DuolingoPage = lazy(() => import('./pages/tests/Duolingo'));
const TOEFLPage = lazy(() => import('./pages/tests/TOEFL'));

// Abroad
const CanadaPage = lazy(() => import('./pages/abroad/Canada'));
const USAPage = lazy(() => import('./pages/abroad/USA'));
const UKPage = lazy(() => import('./pages/abroad/UK'));
const AustraliaPage = lazy(() => import('./pages/abroad/Australia'));
const NewZealandPage = lazy(() => import('./pages/abroad/NewZealand'));
const IrelandPage = lazy(() => import('./pages/abroad/Ireland'));
const GermanyAbroad = lazy(() => import('./pages/abroad/Germany'));
const FranceAbroad = lazy(() => import('./pages/abroad/France'));
const SingaporePage = lazy(() => import('./pages/abroad/Singapore'));
const ItalyPage = lazy(() => import('./pages/abroad/Italy'));
const MalaysiaPage = lazy(() => import('./pages/abroad/Malaysia'));
const SwedenPage = lazy(() => import('./pages/abroad/Sweden'));
const NetherlandsPage = lazy(() => import('./pages/abroad/Netherlands'));
const DenmarkPage = lazy(() => import('./pages/abroad/Denmark'));
const BulgariaPage = lazy(() => import('./pages/abroad/Bulgaria'));
const RussiaPage = lazy(() => import('./pages/abroad/Russia'));
const SwitzerlandPage = lazy(() => import('./pages/abroad/Switzerland'));
const SouthKoreaPage = lazy(() => import('./pages/abroad/SouthKorea'));
const UAEPage = lazy(() => import('./pages/abroad/UAE'));
const PhilippinesPage = lazy(() => import('./pages/abroad/Philippines'));

// Company
const AboutUsPage = lazy(() => import('./pages/company/AboutUsPage'));
const SuccessStories = lazy(() => import('./pages/company/SuccessStories'));
const Blog = lazy(() => import('./pages/company/Blog'));
const Gallery = lazy(() => import('./pages/company/Gallery'));
const FAQPage = lazy(() => import('./pages/company/FAQPage'));
 
// Courses
const GermanPage = lazy(() => import('./pages/courses/German'));
const JapanesePage = lazy(() => import('./pages/courses/Japanese'));
const FrenchPage = lazy(() => import('./pages/courses/French'));
const SeltPage = lazy(() => import('./pages/courses/Selt'));
const CertPage = lazy(() => import('./pages/courses/Cert'));
const Contact = lazy(() => import('./components/Contact'));


function App() {
  return (
    <Router>
      <ScrollToTop />
      <ContactModal />
      <div className="relative min-h-screen bg-white font-sans text-gray-900">
        <Navbar />
        <Suspense fallback={<PageLoader />}>
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
            <Route path="/courses/selt" element={<SeltPage />} />
            <Route path="/courses/cert" element={<CertPage />} />

            {/* Contact */}
            <Route path='/contact' element={<Contact />} />
            

          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}


export default App;

