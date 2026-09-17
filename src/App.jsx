import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';       
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

import Home from './pages/Home';
import TVRepair from './pages/TVRepair';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import BookRepair from './pages/BookRepair';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import ServicePolicy from './pages/ServicePolicy';
import CancellationRefundPolicy from './pages/CanncellationRefundPolicy';
import Disclaimer from './pages/Disclaimer';
import NotFound from './pages/NotFound';

export default function App() {
  return (
<Router>    
  <div className="flex flex-col min-h-screen">
        <Header />

{/* Sticky Bottom Call-to-Action Bar */}
<div className="fixed bottom-0 left-0 w-full flex z-50 shadow-[0_-4px_15px_rgba(0,0,0,0.15)]">
  <a
    href="tel:9811356807"
    className="w-1/2 bg-blue-700 text-white py-4 flex justify-center items-center gap-2 text-sm font-bold uppercase tracking-wide border-r border-blue-900 transition-colors hover:bg-blue-800"
  >
    <Phone size={18} />
    Call Now
  </a>
  <a
    href="https://wa.me/919811356807?text=Hi%2C+I+would+like+to+get+assistance+for+my+appliance+repair."
    target="_blank"
    rel="noopener noreferrer"
    className="w-1/2 bg-emerald-600 text-white py-4 flex justify-center items-center gap-2 text-sm font-bold uppercase tracking-wide transition-colors hover:bg-emerald-700"
  >
    <MessageSquare size={18} />
    WhatsApp
  </a>
</div>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tv-repair" element={<TVRepair />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-repair" element={<BookRepair />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/service-policy" element={<ServicePolicy />} />
            <Route path="/cancellation-refund-policy" element={<CancellationRefundPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </Router>
  );
}