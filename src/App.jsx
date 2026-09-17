import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useSearchParams } from 'react-router-dom';
import { Phone, MessageSquare, MapPin, ShieldCheck, ShieldAlert, CheckCircle2, ArrowRight, Menu, X, Send, Wrench, Clock, Star, PlusCircle } from 'lucide-react';

// --- Header Component ---
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const linkClass = ({ isActive }) =>
    isActive ? "text-blue-600 font-semibold transition-colors" : "text-gray-600 hover:text-blue-600 font-medium transition-colors";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
            Authorised <span className="text-blue-600">Services</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link to="/" className={linkClass}>Home</Link>
          <Link to="/tv-repair" className={linkClass}>TV Repair</Link>
          <Link to="/services" className={linkClass}>Services</Link>
          <Link to="/about" className={linkClass}>About Us</Link>
          <Link to="/contact" className={linkClass}>Contact</Link>
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/919811356807?text=Hello%20Authorised%20Services,%20I%20need%20appliance%20repair%20assistance."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            <MessageSquare size={16} />
            <span>WhatsApp</span>
          </a>
          <Link to="/book-repair" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm">
            Book a Repair
          </Link>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none" aria-label="Toggle menu">
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 font-medium border-b border-gray-100">Home</Link>
          <Link to="/tv-repair" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 font-medium border-b border-gray-100">TV Repair</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 font-medium border-b border-gray-100">Services</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 font-medium border-b border-gray-100">About Us</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 font-medium border-b border-gray-100">Contact</Link>
          <div className="pt-2 flex flex-col gap-2">
            <Link to="/book-repair" onClick={() => setIsOpen(false)} className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium">Book a Repair</Link>
            <a href="https://wa.me/919811356807" target="_blank" rel="noopener noreferrer" className="w-full text-center flex items-center justify-center gap-2 bg-emerald-600 text-white py-2.5 rounded-lg font-medium">
              <MessageSquare size={16} /> WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// --- Footer Component ---
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8 px-6 text-[11px] leading-relaxed relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white tracking-wide">AUTHORISED SERVICES</h3>
          <p className="text-sm text-gray-400 leading-relaxed">Independent TV & Home Appliance Repair Service. Expert multi-brand support.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold text-base mb-4 border-b border-gray-800 pb-2">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link to="/tv-repair" className="hover:text-blue-400">TV Repair</Link></li>
            <li><Link to="/services" className="hover:text-blue-400">Services</Link></li>
            <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold text-base mb-4 border-b border-gray-800 pb-2">Legal</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/privacy-policy" className="hover:text-blue-400">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" className="hover:text-blue-400">Terms & Conditions</Link></li>
            <li><Link to="/service-policy" className="hover:text-blue-400">Service Policy</Link></li>
            <li><Link to="/cancellation-refund-policy" className="hover:text-blue-400">Refund Policy</Link></li>
            <li><Link to="/disclaimer" className="hover:text-blue-400">Disclaimer</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold text-base mb-4 border-b border-gray-800 pb-2">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="tel:9811356807" className="flex items-center gap-2 hover:text-blue-400"><Phone size={16} /> 98113 56807</a></li>
            <li><div className="flex items-start gap-2"><MapPin size={16} className="mt-1 text-blue-400" /><span>Noida & Delhi NCR</span></div></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        <p>© 2026 AUTHORISED SERVICE. All Rights Reserved under Indian law.</p>
      </div>
    </footer>
  );
}

// --- Home Page Component (Full Layout + Dynamic Brand) ---
function Home() {
  const [searchParams] = useSearchParams();
  const h1Param = searchParams.get('h1');
  const [brandTitle, setBrandTitle] = useState("AUTHORISED SERVICES");

  useEffect(() => {
    if (h1Param) {
      const decodedBrand = decodeURIComponent(h1Param).toUpperCase();
      const finalTitle = decodedBrand.includes("SERVICE") ? decodedBrand : `${decodedBrand} SERVICE CENTER`;
      setBrandTitle(finalTitle);
      document.title = `${finalTitle} | Authorised Services`;
    }
  }, [h1Param]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const text = `Hello Authorised Services,%0A%0AI want to book a repair enquiry for *${brandTitle}*:%0A- *Name:* ${encodeURIComponent(name)}%0A- *Phone:* ${encodeURIComponent(phone)}`;
    window.open(`https://wa.me/919811356807?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#fcfbfa] text-gray-800">
      {/* Hero Section */}
      <section className="py-10 sm:py-14 px-4 sm:px-8 bg-gradient-to-b from-indigo-50/60 to-[#fcfbfa] border-b border-gray-200/60 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-indigo-100 border border-indigo-200 text-indigo-900 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mx-auto">
            <ShieldCheck size={16} className="text-indigo-700" />
            <span>Independent Repair Service Provider</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight uppercase">
            {brandTitle}
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            India’s leading independent provider for fast, reliable, and professional home appliance repair. Our expert technicians use premium-grade spare parts to ensure your essential appliances run smoothly year-round.
          </p>

          {/* Quick Booking Form */}
          <div className="max-w-xl mx-auto bg-white border border-gray-200/90 p-6 sm:p-8 rounded-2xl shadow-xl text-left mt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-1">Book Quick Service</h3>
            <p className="text-xs text-gray-500 mb-4">Send details directly via WhatsApp.</p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name *</label>
                <input type="text" name="name" required placeholder="Enter your name" className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number *</label>
                <input type="tel" name="phone" required placeholder="9811356807" className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-sm" />
              </div>
              <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg text-sm transition-colors flex items-center justify-center gap-2">
                <MessageSquare size={16} />
                <span>Send Request on WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Details Bar */}
      <div className="max-w-6xl mx-auto my-10 px-6">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-gray-700 bg-gray-50 p-5 rounded-lg border border-gray-100 shadow-sm text-center">
          <li className="flex flex-col items-center justify-center gap-2 border-b md:border-b-0 border-gray-200 pb-3 md:pb-0">
            <Phone className="text-blue-600" size={16} />
            <span><strong>CALLING LINE:</strong><br />98113 56807</span>
          </li>
          <li className="flex flex-col items-center justify-center gap-2 border-b md:border-b-0 border-gray-200 pb-3 md:pb-0">
            <MessageSquare className="text-blue-600" size={16} />
            <span><strong>WhatsApp Support:</strong><br />+91 98113 56807</span>
          </li>
          <li className="flex flex-col items-center justify-center gap-2 border-b md:border-b-0 border-gray-200 pb-3 md:pb-0">
            <span className="text-blue-600 font-bold">@</span>
            <span><strong>Email:</strong><br />authorisedservicesinfo@gmail.com</span>
          </li>
          <li className="flex flex-col items-center justify-center gap-2">
            <Clock className="text-blue-600" size={16} />
            <span><strong>Schedule:</strong><br />24/7 Support | 8:00 AM - 10:00 PM</span>
          </li>
        </ul>
      </div>

      {/* How to Book Our Service */}
      <div className="max-w-6xl mx-auto my-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-3">How to Book Our Service?</h2>
        <p className="text-xs text-gray-500 mb-8 max-w-xl mx-auto">Simple, secure, and completely hassle-free steps to get your appliances fixed.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            { step: "01", title: "Initiate Contact", desc: "Call or drop a message on our WhatsApp support line." },
            { step: "02", title: "Share Details", desc: "Provide your appliance model and describe the technical problem." },
            { step: "03", title: "Instant Confirmation", desc: "Receive appointment confirmation and technician details within minutes." },
            { step: "04", title: "Expert Assigned", desc: "A background-verified and experienced technician is dispatched." },
            { step: "05", title: "Doorstep Visit", desc: "Rigorous multi-point diagnostic check and spot repair at your home." },
            { step: "06", title: "Service Finalization", desc: "Test the appliance thoroughly and pay securely via UPI, card, or cash." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-2">
              <div className="text-blue-600 bg-blue-50 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold">{item.step}</div>
              <h3 className="font-bold text-sm text-gray-800">{item.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Serving All Major Locations */}
      <div className="max-w-6xl mx-auto my-10 text-center px-4">
        <h2 className="text-lg font-bold mb-3">Serving All Major Locations</h2>
        <p className="text-xs text-gray-500 mb-6 max-w-xl mx-auto">We provide fast doorstep appliance repair services across major cities:</p>
        <div className="flex flex-wrap justify-center gap-2">
          {['Noida', 'Delhi', 'Faridabad', 'Ghaziabad', 'Gurugram', 'Greater Noida', 'Kanpur', 'Kolkata', 'Meerut', 'Nagpur', 'Patna', 'Varanasi', 'Akola', 'Udaipur'].map((loc, i) => (
            <span key={i} className="text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-100 bg-blue-50/50 flex items-center gap-1">
              <MapPin size={10} /> {loc}
            </span>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto my-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-3">Verified Client Testimonials</h2>
        <p className="text-xs text-gray-500 mb-8 max-w-xl mx-auto">Read feedback from our satisfied clients.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            { name: "Suresh Shah, DELHI", review: "Exceptional doorstep service. My 55-inch Smart TV backlight failure was fixed within hours right at home." },
            { name: "Karthik Rao, delhi", review: "Very prompt response. OLED TV screen went blank suddenly; technician replaced power board cleanly." },
            { name: "Hiren Patel, noida", review: "Impressive speed. They arrived within an hour of logging our complaint and repaired the unit swiftly." }
          ].map((t, i) => (
            <div key={i} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between space-y-3">
              <div className="text-amber-500 flex gap-0.5 text-xs"><Star size={12}/><Star size={12}/><Star size={12}/><Star size={12}/><Star size={12}/></div>
              <p className="text-xs text-gray-700 italic leading-relaxed">"{t.review}"</p>
              <span className="text-[11px] font-bold text-blue-600">- {t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- Other Pages Placeholder ---
function TVRepair() { return <div className="py-12 px-8 max-w-4xl mx-auto"><h1 className="text-3xl font-bold mb-4">TV Repair Services</h1></div>; }
function ServicesPage() { return <div className="py-12 px-8 max-w-4xl mx-auto"><h1 className="text-3xl font-bold mb-4">Appliance Services</h1></div>; }
function About() { return <div className="py-12 px-8 max-w-4xl mx-auto"><h1 className="text-3xl font-bold mb-4">About Us</h1></div>; }
function Contact() { return <div className="py-12 px-8 max-w-4xl mx-auto"><h1 className="text-3xl font-bold mb-4">Contact Us</h1></div>; }
function BookRepair() { return <div className="py-12 px-8 max-w-4xl mx-auto"><h1 className="text-3xl font-bold mb-4">Book a Repair</h1></div>; }
function PrivacyPolicy() { return <div className="py-12 px-8 max-w-4xl mx-auto"><h1 className="text-3xl font-bold mb-4">Privacy Policy</h1></div>; }
function Terms() { return <div className="py-12 px-8 max-w-4xl mx-auto"><h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1></div>; }
function ServicePolicy() { return <div className="py-12 px-8 max-w-4xl mx-auto"><h1 className="text-3xl font-bold mb-4">Service Policy</h1></div>; }
function RefundPolicy() { return <div className="py-12 px-8 max-w-4xl mx-auto"><h1 className="text-3xl font-bold mb-4">Refund Policy</h1></div>; }
function Disclaimer() { return <div className="py-12 px-8 max-w-4xl mx-auto"><h1 className="text-3xl font-bold mb-4">Disclaimer</h1></div>; }
function NotFound() { return <div className="py-20 text-center"><h1 className="text-6xl font-bold text-blue-600">404</h1><p className="text-gray-600 mt-2">Page Not Found</p><Link to="/" className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg">Back to Home</Link></div>; }

// --- Main App ---
export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tv-repair" element={<TVRepair />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-repair" element={<BookRepair />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<Terms />} />
            <Route path="/service-policy" element={<ServicePolicy />} />
            <Route path="/cancellation-refund-policy" element={<RefundPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}