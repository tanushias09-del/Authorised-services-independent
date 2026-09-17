import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Wrench, Tv, ShieldCheck, Clock, Phone, ArrowRight, MessageSquare } from 'lucide-react';
import SEO from '../components/SEO';

export default function Home() {
  const location = useLocation();
  const [dynamicTitle, setDynamicTitle] = useState("AUTHORISED SERVICES - Independent TV & Home Appliance Repair");
  const [brandQuery, setBrandQuery] = useState("");

  useEffect(() => {
    // URL se ?h1= parameter extract karne ke liye
    const params = new URLSearchParams(location.search);
    const h1Param = params.get('h1');

    if (h1Param) {
      const decodedText = decodeURIComponent(h1Param).toUpperCase();
      setDynamicTitle(decodedText);
      setBrandQuery(h1Param);
    }
  }, [location]);

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const message = `Hello Authorised Services,%0A%0AI want to book a repair enquiry for *${brandQuery || 'Appliance'}*:%0A- *Name:* ${encodeURIComponent(e.target.name.value)}%0A- *Phone:* ${encodeURIComponent(e.target.phone.value)}`;
    window.open(`https://wa.me/9198113 56807?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#fcfbfa] text-gray-800">
      <SEO
        title={`${dynamicTitle} | Authorised Services`}
        description="Professional independent repair and service provider for TVs and home appliances. Fast doorstep diagnosis. Call 98113 56807."
        canonical="https://authorisedservices.in/"
      />

      {/* Hero Section */}
      <section className="py-10 sm:py-14 px-4 sm:px-8 bg-gradient-to-b from-indigo-50/60 via-[#fcfbfa] to-[#fcfbfa] border-b border-gray-200/60">
        <div className="max-w-6xl mx-auto space-y-8">

          {/* Image Banner */}
          <div className="bg-white border border-gray-200/90 rounded-3xl p-4 sm:p-8 shadow-xl shadow-indigo-100/50 overflow-hidden">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-indigo-50/50 via-white to-indigo-50/50 flex items-center justify-center p-2 sm:p-6">
              <img
                src="/banner.jpg"
                alt="Repair Technicians"
              />
            </div>
          </div>

          {/* Dynamic Heading jo URL ke hisaab se change hogi */}
          <div className="text-center max-w-3xl mx-auto space-y-4 pt-2">
            <div className="inline-flex items-center gap-2 bg-indigo-100 border border-indigo-200 text-indigo-900 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-sm">
              <ShieldCheck size={16} className="text-indigo-700" />
              <span>Independent Repair Service Provider</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight uppercase">
              {dynamicTitle}
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              India’s leading independent provider for fast, reliable, and professional home appliance repairs.
            </p>
          </div>

          {/* Quick Form */}
          <div className="max-w-xl mx-auto bg-white border border-gray-200/90 p-6 sm:p-8 rounded-2xl shadow-xl shadow-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-1">Book Quick Service</h3>
            <p className="text-xs text-gray-500 mb-4">Send details directly via WhatsApp.</p>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name *</label>
                <input type="text" name="name" required placeholder="Enter your name" className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number *</label>
                <input type="tel" name="phone" required placeholder="98113 56807" className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-sm" />
              </div>
              <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg text-sm transition-colors shadow-sm flex items-center justify-center gap-2">
                <MessageSquare size={16} />
                <span>Send Request on WhatsApp</span>
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* NAYE SECTIONS - CONVERTED TO JSX (FORM KE THEEK NEECHEY) */}
      {/* ======================================================== */}

      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-10 space-y-10">

        {/* Comprehensive Contact Details */}
        <div id="contact" className="mb-10 px-6 scroll-mt-20 text-center">
          <ul className="space-y-5 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-4 text-[12px] text-gray-700 bg-gray-50 p-5 rounded-lg border border-gray-100 shadow-sm max-w-lg md:max-w-none mx-auto text-center">
            <li className="flex flex-col items-center justify-center gap-2 border-b md:border-b-0 border-gray-200 pb-3 md:pb-0 text-center">
              <div className="min-w-[16px]">
                <i className="fa-solid fa-phone text-brand-blue text-[12px]"></i>
              </div>
              <span className="leading-snug">
                <strong>CALLING LINE:</strong>
                <br />
                98113 56807<br />
                <span className="text-[10px] text-gray-500">Available for all voice calls and scheduling.</span>
              </span>
            </li>
            <li className="flex flex-col items-center justify-center gap-2 border-b md:border-b-0 border-gray-200 pb-3 md:pb-0 text-center">
              <div className="min-w-[16px]">
                <i className="fa-brands fa-whatsapp text-brand-blue text-[12px]"></i>
              </div>
              <span className="leading-snug">
                <strong>WhatsApp Support:</strong>
                <br />
                +91 98113 56807<br />
                <span className="text-[10px] text-gray-500">Available exclusively for messaging.</span>
              </span>
            </li>
            <li className="flex flex-col items-center justify-center gap-2 border-b md:border-b-0 border-gray-200 pb-3 md:pb-0 text-center">
              <div className="min-w-[16px]">
                <i className="fa-solid fa-envelope text-brand-blue text-[12px]"></i>
              </div>
              <span className="leading-snug">
                <strong>Corporate Email:</strong>
                <br />
                authorisedservicesinfo@gmail.com<br />
                <span className="text-[10px] text-gray-500">We aim to respond to all written inquiries within 15-30 minutes during standard business hours.</span>
              </span>
            </li>
            <li className="flex flex-col items-center justify-center gap-2 text-center">
              <div className="min-w-[16px]">
                <i className="fa-solid fa-clock text-brand-blue text-[12px]"></i>
              </div>
              <span className="leading-snug">
                <strong>Availability & Operational Schedule:</strong>
                <br />Our customer support network and complaint registration desks operate 24 hours a day, 7 days a week. Field service engineer visits are scheduled across all days from 8:00 AM to 10:00 PM.
              </span>
            </li>
          </ul>
        </div>
        <div className="divider-line"></div>

        {/* How to Book Our Service? */}
        <div id="booking" className="text-center mb-10 scroll-mt-20">
          <h2 className="text-lg font-bold mb-3 text-center">
            How to Book Our Service?
          </h2>
          <p className="text-[12px] text-gray-500 mb-8 px-6 leading-relaxed text-center max-w-lg md:max-w-2xl mx-auto">
            Booking a priority service request with our team is simple, secure, and completely hassle-free. Just follow these verified steps to get your home appliances diagnosed and fixed professionally.
          </p>
          <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 px-5 text-center max-w-lg md:max-w-none mx-auto">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-brand-blue bg-blue-50 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-2 shadow-sm border border-blue-100 mx-auto">
                01
              </div>
              <h3 className="font-bold text-[13px] mb-2 text-gray-800 text-center">
                Initiate Contact
              </h3>
              <p className="text-[11px] text-gray-500 px-4 leading-relaxed text-center">
                Call our toll-free number or drop a message on our dedicated WhatsApp line to report your appliance issue to our experienced customer support team and request a priority appointment.
              </p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-brand-blue bg-blue-50 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-2 shadow-sm border border-blue-100 mx-auto">
                02
              </div>
              <h3 className="font-bold text-[13px] mb-2 text-gray-800 text-center">
                Share Comprehensive Details
              </h3>
              <p className="text-[11px] text-gray-500 px-4 leading-relaxed text-center">
                Provide us with the complete details of your appliance's exact model number, the specific symptoms or technical problems you are experiencing, and select your most convenient date and time slot.
              </p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-brand-blue bg-blue-50 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-2 shadow-sm border border-blue-100 mx-auto">
                03
              </div>
              <h3 className="font-bold text-[13px] mb-2 text-gray-800 text-center">
                Instant Confirmation
              </h3>
              <p className="text-[11px] text-gray-500 px-4 leading-relaxed text-center">
                You will instantly receive your formalized appointment confirmation details, including the assigned technician's profile and estimated arrival time, via SMS or WhatsApp within 5 to 10 minutes.
              </p>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-brand-blue bg-blue-50 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-2 shadow-sm border border-blue-100 mx-auto">
                04
              </div>
              <h3 className="font-bold text-[13px] mb-2 text-gray-800 text-center">
                Expert Technician Assigned
              </h3>
              <p className="text-[11px] text-gray-500 px-4 leading-relaxed text-center">
                A background-verified, extensively trained, and highly experienced localized technician is dispatched and assigned to your specific service request without any administrative delays.
              </p>
            </div>
            {/* Step 5 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-brand-blue bg-blue-50 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-2 shadow-sm border border-blue-100 mx-auto">
                05
              </div>
              <h3 className="font-bold text-[13px] mb-2 text-gray-800 text-center">
                Doorstep Diagnostics & Visit
              </h3>
              <p className="text-[11px] text-gray-500 px-4 leading-relaxed text-center">
                Our fully equipped technician will visit your home precisely at the scheduled time, perform a rigorous multi-point diagnostic check, and resolve your appliance issue safely on the spot.
              </p>
            </div>
            {/* Step 6 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-brand-blue bg-blue-50 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-2 shadow-sm border border-blue-100 mx-auto">
                06
              </div>
              <h3 className="font-bold text-[13px] mb-2 text-gray-800 text-center">
                Service Finalization
              </h3>
              <p className="text-[11px] text-gray-500 px-4 leading-relaxed text-center">
                Once the service is completed to your absolute satisfaction and the appliance is thoroughly tested, you can securely pay for the labor and parts via UPI, credit/debit card, or cash.
              </p>
            </div>
          </div>
        </div>
        <div className="divider-line"></div>

        {/* About Us */}
        <div id="about" className="mb-10 px-6 scroll-mt-20 text-center">
          <h2 className="text-lg font-bold mb-4 text-center">
            About Our Organization
          </h2>
          <div className="text-[11px] text-gray-600 text-center leading-loose space-y-4 max-w-lg md:max-w-3xl mx-auto">
            <p>
              <strong>AUTHORISED SERVICE</strong>
              is a dedicated service provider strictly focused on delivering dependable technical and business support solutions with absolute consistency and precision. Established with the core objective of bridging the significant gap between high-quality technical service and enduring customer trust, we have steadily grown into a reliable, household name for families, local professionals, and commercial businesses seeking efficient assistance.
            </p>
            <p>
              Our core expertise lies in providing comprehensive, end-to-end technical services, where we handle a wide range of requirements including advanced multi-stage diagnostics, preventative maintenance routines, and complex hardware repair solutions. Rather than applying temporary fixes, we approach every task by identifying the root cause of the malfunction, paying careful attention to stringent quality standards to ensure durable, long-term reliability.
            </p>
            <p>
              Our expansive team undergoes rigorous continuous training programs and strict background verification to ensure they are up-to-date with the latest microprocessors and modern home appliance technologies. We adhere to non-negotiable safety protocols during every single home visit, ensuring your total peace of mind and maximizing the operational lifespan of your valuable electronics.
            </p>
          </div>
        </div>
        <div className="divider-line"></div>

        {/* Serving All Major Locations */}
        <div id="locations" className="mb-10 text-center px-4 scroll-mt-20">
          <h2 className="text-lg font-bold mb-3 text-center">
            Serving All Major Locations
          </h2>
          <p className="text-[11px] text-gray-500 mb-6 leading-relaxed px-2 text-center max-w-lg md:max-w-2xl mx-auto">
            We provide fast and reliable doorstep appliance repair services across the following major cities and their surrounding areas:
          </p>
          <div className="flex flex-wrap justify-center gap-1.5 max-w-lg md:max-w-4xl mx-auto">
            <span className="text-brand-blue text-[10px] font-semibold px-2.5 py-1 rounded-full border border-blue-100 bg-[#f4f7fb] flex items-center justify-center gap-1">
              <i className="fa-solid fa-location-dot text-[8px]"></i> noida sec 18
            </span>
            <span className="text-brand-blue text-[10px] font-semibold px-2.5 py-1 rounded-full border border-blue-100 bg-[#f4f7fb] flex items-center justify-center gap-1">
              <i className="fa-solid fa-location-dot text-[8px]"></i> Akola
            </span>
            <span className="text-brand-blue text-[10px] font-semibold px-2.5 py-1 rounded-full border border-blue-100 bg-[#f4f7fb] flex items-center justify-center gap-1">
              <i className="fa-solid fa-location-dot text-[8px]"></i> delhi
            </span>
            <span className="text-brand-blue text-[10px] font-semibold px-2.5 py-1 rounded-full border border-blue-100 bg-[#f4f7fb] flex items-center justify-center gap-1">
              <i className="fa-solid fa-location-dot text-[8px]"></i> Delhi
            </span>
            <span className="text-brand-blue text-[10px] font-semibold px-2.5 py-1 rounded-full border border-blue-100 bg-[#f4f7fb] flex items-center justify-center gap-1">
              <i className="fa-solid fa-location-dot text-[8px]"></i> Faridabad
            </span>
            <span className="text-brand-blue text-[10px] font-semibold px-2.5 py-1 rounded-full border border-blue-100 bg-[#f4f7fb] flex items-center justify-center gap-1">
              <i className="fa-solid fa-location-dot text-[8px]"></i> Gandhinagar
            </span>
            <span className="text-brand-blue text-[10px] font-semibold px-2.5 py-1 rounded-full border border-blue-100 bg-[#f4f7fb] flex items-center justify-center gap-1">
              <i className="fa-solid fa-location-dot text-[8px]"></i> Gaziabad
            </span>
            <span className="text-brand-blue text-[10px] font-semibold px-2.5 py-1 rounded-full border border-blue-100 bg-[#f4f7fb] flex items-center justify-center gap-1">
              <i className="fa-solid fa-location-dot text-[8px]"></i> Gorakhpur
            </span>
            <span className="text-brand-blue text-[10px] font-semibold px-2.5 py-1 rounded-full border border-blue-100 bg-[#f4f7fb] flex items-center justify-center gap-1">
              <i className="fa-solid fa-location-dot text-[8px]"></i> Greater Noida
            </span>
            <span className="text-brand-blue text-[10px] font-semibold px-2.5 py-1 rounded-full border border-blue-100 bg-[#f4f7fb] flex items-center justify-center gap-1">
              <i className="fa-solid fa-location-dot text-[8px]"></i> Gurugram
            </span>
            <span className="text-brand-blue text-[10px] font-semibold px-2.5 py-1 rounded-full border border-blue-100 bg-[#f4f7fb] flex items-center justify-center gap-1">
              <i className="fa-solid fa-location-dot text-[8px]"></i> ghaziabad
            </span>
            <span className="text-brand-blue text-[10px] font-semibold px-2.5 py-1 rounded-full border border-blue-100 bg-[#f4f7fb] flex items-center justify-center gap-1">
              <i className="fa-solid fa-location-dot text-[8px]"></i> Kanpur
            </span>
            <span className="text-brand-blue text-[10px] font-semibold px-2.5 py-1 rounded-full border border-blue-100 bg-[#f4f7fb] flex items-center justify-center gap-1">
              <i className="fa-solid fa-location-dot text-[8px]"></i> Kolkata
            </span>
            <span className="text-brand-blue text-[10px] font-semibold px-2.5 py-1 rounded-full border border-blue-100 bg-[#f4f7fb] flex items-center justify-center gap-1">
              <i className="fa-solid fa-location-dot text-[8px]"></i> Kota
            </span>
            <span className="text-brand-blue text-[10px] font-semibold px-2.5 py-1 rounded-full border border-blue-100 bg-[#f4f7fb] flex items-center justify-center gap-1">
              <i className="fa-solid fa-location-dot text-[8px]"></i> Meerut
            </span>
            <span className="text-brand-blue text-[10px] font-semibold px-2.5 py-1 rounded-full border border-blue-100 bg-[#f4f7fb] flex items-center justify-center gap-1">
              <i className="fa-solid fa-location-dot text-[8px]"></i> Nagpur
            </span>
            <span className="text-brand-blue text-[10px] font-semibold px-2.5 py-1 rounded-full border border-blue-100 bg-[#f4f7fb] flex items-center justify-center gap-1">
              <i className="fa-solid fa-location-dot text-[8px]"></i> Nashik
            </span>
            <span className="text-brand-blue text-[10px] font-semibold px-2.5 py-1 rounded-full border border-blue-100 bg-[#f4f7fb] flex items-center justify-center gap-1">
              <i className="fa-solid fa-location-dot text-[8px]"></i> Noida
            </span>
            <span className="text-brand-blue text-[10px] font-semibold px-2.5 py-1 rounded-full border border-blue-100 bg-[#f4f7fb] flex items-center justify-center gap-1">
              <i className="fa-solid fa-location-dot text-[8px]"></i> Patna
            </span>
            <span className="text-brand-blue text-[10px] font-semibold px-2.5 py-1 rounded-full border border-blue-100 bg-[#f4f7fb] flex items-center justify-center gap-1">
              <i className="fa-solid fa-location-dot text-[8px]"></i> Pimpri-Chinchwad
            </span>
            <span className="text-brand-blue text-[10px] font-semibold px-2.5 py-1 rounded-full border border-blue-100 bg-[#f4f7fb] flex items-center justify-center gap-1">
              <i className="fa-solid fa-location-dot text-[8px]"></i> Prayagraj
            </span>
            <span className="text-brand-blue text-[10px] font-semibold px-2.5 py-1 rounded-full border border-blue-100 bg-[#f4f7fb] flex items-center justify-center gap-1">
              <i className="fa-solid fa-location-dot text-[8px]"></i> noida sec 15
            </span>
            <span className="text-brand-blue text-[10px] font-semibold px-2.5 py-1 rounded-full border border-blue-100 bg-[#f4f7fb] flex items-center justify-center gap-1">
              <i className="fa-solid fa-location-dot text-[8px]"></i> Rajkot
            </span>
            <span className="text-brand-blue text-[10px] font-semibold px-2.5 py-1 rounded-full border border-blue-100 bg-[#f4f7fb] flex items-center justify-center gap-1">
              <i className="fa-solid fa-location-dot text-[8px]"></i> Udaipur
            </span>
            <span className="text-brand-blue text-[10px] font-semibold px-2.5 py-1 rounded-full border border-blue-100 bg-[#f4f7fb] flex items-center justify-center gap-1">
              <i className="fa-solid fa-location-dot text-[8px]"></i> Vadodra
            </span>
            <span className="text-brand-blue text-[10px] font-semibold px-2.5 py-1 rounded-full border border-blue-100 bg-[#f4f7fb] flex items-center justify-center gap-1">
              <i className="fa-solid fa-location-dot text-[8px]"></i> Varanasi
            </span>
            <span className="text-brand-blue text-[10px] font-semibold px-2.5 py-1 rounded-full border border-blue-100 bg-[#f4f7fb] flex items-center justify-center gap-1">
              <i className="fa-solid fa-circle-plus text-[8px]"></i> & More Locations
            </span>
          </div>
        </div>
        <div className="divider-line"></div>

        {/* Comprehensive FAQs & Process */}
        <div id="faq" className="mb-10 px-5 scroll-mt-20 text-center">
          <h2 className="text-lg font-bold mb-3 text-center">Comprehensive FAQs</h2>
          <div className="max-w-lg md:max-w-5xl mx-auto md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="font-bold text-[13px] mb-4 text-brand-blue bg-blue-50 p-2 rounded text-center">
                General Repair & Logistics
              </h3>
              <ul className="space-y-4 text-[12px] text-gray-700 mb-8 md:mb-0 text-center">
                <li className="flex flex-col items-center justify-center gap-1 text-center">
                  <div className="text-brand-blue">
                    <i className="fa-solid fa-circle-check text-[10px]"></i>
                  </div>
                  <span className="leading-snug">
                    <strong>What types of displays and TVs do you repair?</strong>
                    <br />We provide expert diagnostics and repair for LED, LCD, OLED, QLED, Plasma, and modern Smart TVs across all sizing categories.
                  </span>
                </li>
                <li className="flex flex-col items-center justify-center gap-1 text-center">
                  <div className="text-brand-blue">
                    <i className="fa-solid fa-circle-check text-[10px]"></i>
                  </div>
                  <span className="leading-snug">
                    <strong>Do you offer home service for TV repair?</strong>
                    <br />Yes, we provide secure, fully-equipped doorstep TV repair services for your total convenience, eliminating the risk of transporting fragile electronics.
                  </span>
                </li>
                <li className="flex flex-col items-center justify-center gap-1 text-center">
                  <div className="text-brand-blue">
                    <i className="fa-solid fa-circle-check text-[10px]"></i>
                  </div>
                  <span className="leading-snug">
                    <strong>Is it worth repairing a TV or replacing it?</strong>
                    <br />As a general rule, if the total repair cost is less than 50% of a comparable new TV’s price, repairing it is highly recommended to save money and extend its life.
                  </span>
                </li>
                <li className="flex flex-col items-center justify-center gap-1 text-center">
                  <div className="text-brand-blue">
                    <i className="fa-solid fa-circle-check text-[10px]"></i>
                  </div>
                  <span className="leading-snug">
                    <strong>What geographical areas do you cover?</strong>
                    <br />We provide prompt, reliable service across all major locations in delhi and its extended suburbs.
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[13px] mb-4 text-brand-blue bg-blue-50 p-2 rounded text-center">
                Technical & Repair Process
              </h3>
              <ul className="space-y-4 text-[12px] text-gray-700 text-center">
                <li className="flex flex-col items-center justify-center gap-1 text-center">
                  <div className="text-brand-blue">
                    <i className="fa-solid fa-wrench text-[10px]"></i>
                  </div>
                  <span className="leading-snug">
                    <strong>What are the most common TV problems you fix?</strong>
                    <br />We routinely resolve critical issues like completely blank displays, audio/sound failures, severe backlight bleeding, motherboard power failures, and HDMI connectivity issues.
                  </span>
                </li>
                <li className="flex flex-col items-center justify-center gap-1 text-center">
                  <div className="text-brand-blue">
                    <i className="fa-solid fa-wrench text-[10px]"></i>
                  </div>
                  <span className="leading-snug">
                    <strong>Can a physically broken TV screen be repaired?</strong>
                    <br />Screen replacement is technically possible and we source authentic panels; however, physical panel replacements can be expensive depending strictly on the specific brand and model.
                  </span>
                </li>
                <li className="flex flex-col items-center justify-center gap-1 text-center">
                  <div className="text-brand-blue">
                    <i className="fa-solid fa-wrench text-[10px]"></i>
                  </div>
                  <span className="leading-snug">
                    <strong>Can you repair Smart TV software issues?</strong>
                    <br />Yes, our technicians regularly fix complex software glitches, perpetual app loading issues, motherboard firmware corruption, and wireless network connectivity problems.
                  </span>
                </li>
                <li className="flex flex-col items-center justify-center gap-1 text-center">
                  <div className="text-brand-blue">
                    <i className="fa-solid fa-wrench text-[10px]"></i>
                  </div>
                  <span className="leading-snug">
                    <strong>How long does the average TV repair take?</strong>
                    <br />Once diagnosed, most standard component repairs are completed within 24–48 hours. Many software or minor hardware issues are resolved on the very same day.
                  </span>
                </li>
                <li className="flex flex-col items-center justify-center gap-1 text-center">
                  <div className="text-brand-blue">
                    <i className="fa-solid fa-wrench text-[10px]"></i>
                  </div>
                  <span className="leading-snug">
                    <strong>Do you use original replacement spare parts?</strong>
                    <br />Absolutely. We strictly utilize genuine OEM parts or high-quality, fully compatible certified spare components to guarantee longevity.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="divider-line"></div>

        {/* Testimonials */}
        <div id="testimonials" className="mb-10 text-center px-5 scroll-mt-20">
          <h2 className="text-lg font-bold mb-3 text-center">
            Verified Client Testimonials
          </h2>
          <p className="text-[11px] text-gray-500 mb-8 px-2 text-center max-w-lg md:max-w-2xl mx-auto">
            Read detailed feedback from our satisfied clients who trust our enterprise for fast, highly reliable, and professional electronic repairs.
          </p>
          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 max-w-lg md:max-w-none mx-auto text-center">
            {/* Testimonial 1 */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center flex flex-col justify-between">
              <div>
                <div className="text-[#f59e0b] text-[10px] mb-2 flex justify-center gap-0.5">
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
                <p className="text-[12px] text-gray-700 italic mb-3 leading-relaxed text-center">
                  "Exceptional doorstep service in DELHI. My 55-inch Smart TV had a complete backlight failure, and their engineer fixed it within hours right at my home. Highly professional!"
                </p>
              </div>
              <span className="text-[10px] font-bold text-brand-blue block text-center">- Suresh Shah, DELHI</span>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center flex flex-col justify-between">
              <div>
                <div className="text-[#f59e0b] text-[10px] mb-2 flex justify-center gap-0.5">
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
                <p className="text-[12px] text-gray-700 italic mb-3 leading-relaxed text-center">
                  "Very prompt response in delhi. My OLED TV screen went blank suddenly. The technician accurately diagnosed a power board issue and replaced it cleanly."
                </p>
              </div>
              <span className="text-[10px] font-bold text-brand-blue block text-center">- Karthik Rao, delhi</span>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center flex flex-col justify-between">
              <div>
                <div className="text-[#f59e0b] text-[10px] mb-2 flex justify-center gap-0.5">
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
                <p className="text-[12px] text-gray-700 italic mb-3 leading-relaxed text-center">
                  "Transparent pricing and great execution in Delhi. They explained the repair costs before starting work. Very satisfied with the picture quality now."
                </p>
              </div>
              <span className="text-[10px] font-bold text-brand-blue block text-center">- Manish Malhotra, Delhi</span>
            </div>
            {/* Testimonial 4 */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center flex flex-col justify-between">
              <div>
                <div className="text-[#f59e0b] text-[10px] mb-2 flex justify-center gap-0.5">
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
                <p className="text-[12px] text-gray-700 italic mb-3 leading-relaxed text-center">
                  "Quick scheduling in DELHI. The technician was polite, wore proper safety gear, and restored my sound board problem efficiently."
                </p>
              </div>
              <span className="text-[10px] font-bold text-brand-blue block text-center">- Swathi Reddy, DELHI</span>
            </div>
            {/* Testimonial 5 */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center flex flex-col justify-between">
              <div>
                <div className="text-[#f59e0b] text-[10px] mb-2 flex justify-center gap-0.5">
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
                <p className="text-[12px] text-gray-700 italic mb-3 leading-relaxed text-center">
                  "Reliable service right here in delhi. Fixed our smart panel connection glitches without any hassle. Truly dependable support."
                </p>
              </div>
              <span className="text-[10px] font-bold text-brand-blue block text-center">- Alok Kulkarni, delhi</span>
            </div>
            {/* Testimonial 6 */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center flex flex-col justify-between">
              <div>
                <div className="text-[#f59e0b] text-[10px] mb-2 flex justify-center gap-0.5">
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
                <p className="text-[12px] text-gray-700 italic mb-3 leading-relaxed text-center">
                  "Great customer handling in noida sec 15. Called them for a motherboard fault on my 4K TV, and they resolved it cleanly on the same day."
                </p>
              </div>
              <span className="text-[10px] font-bold text-brand-blue block text-center">- Tanvi Deshmukh, noida sec 15</span>
            </div>
            {/* Testimonial 7 */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center flex flex-col justify-between">
              <div>
                <div className="text-[#f59e0b] text-[10px] mb-2 flex justify-center gap-0.5">
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
                <p className="text-[12px] text-gray-700 italic mb-3 leading-relaxed text-center">
                  "Prompt doorstep visit in ghaziabad. Very reasonable visiting charges and clean execution. Highly recommended team!"
                </p>
              </div>
              <span className="text-[10px] font-bold text-brand-blue block text-center">- Rajesh Sharma, ghaziabad</span>
            </div>
            {/* Testimonial 8 */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center flex flex-col justify-between">
              <div>
                <div className="text-[#f59e0b] text-[10px] mb-2 flex justify-center gap-0.5">
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
                <p className="text-[12px] text-gray-700 italic mb-3 leading-relaxed text-center">
                  "Smooth experience in ghaziabad. My TV display lines were fixed efficiently by their senior technician. Very happy with the results."
                </p>
              </div>
              <span className="text-[10px] font-bold text-brand-blue block text-center">- Zeeshan Khan, ghaziabad</span>
            </div>
            {/* Testimonial 9 */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center flex flex-col justify-between">
              <div>
                <div className="text-[#f59e0b] text-[10px] mb-2 flex justify-center gap-0.5">
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
                <p className="text-[12px] text-gray-700 italic mb-3 leading-relaxed text-center">
                  "Impressive speed in noida. They arrived within an hour of logging our complaint and repaired the power supply unit swiftly."
                </p>
              </div>
              <span className="text-[10px] font-bold text-brand-blue block text-center">- Hiren Patel, noida</span>
            </div>
          </div>
        </div>
        <div className="divider-line"></div>

        {/* Detailed Legal Policies Section */}
        <div id="policies" className="mb-10 px-6 text-center scroll-mt-20">
          <h2 className="text-lg font-bold mb-3 text-center">
            Our Comprehensive Policies
          </h2>
          <p className="text-[11px] text-gray-500 mb-6 px-2 text-center max-w-lg md:max-w-2xl mx-auto">
            Please review our strict operational policies governing refunds, privacy, and service warranties to ensure complete transparency before booking your service.
          </p>
          <div className="text-center mt-6 space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-6 max-w-lg md:max-w-none mx-auto">
            <div className="text-center">
              <h3 className="font-bold text-[13px] mb-2 text-gray-800 text-center">
                1. Detailed Refund Policy & Standard Visit Charges
              </h3>
              <p className="text-[11px] text-gray-600 leading-relaxed text-center">
                Our standard doorstep inspection and visiting charge starts from Rs. 200, which is applicable once the dispatched technician has visited your location, regardless of whether you approve the final repair quote. Service and skilled labor charges are completely non-refundable once the physical work has been successfully completed. Charges applied for new spare parts are non-refundable once the component is permanently installed. If a newly installed defective part is identified within the active warranty period, it will be promptly repaired or replaced free of charge, but not refunded.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-[13px] mb-2 text-gray-800 text-center">
                2. Data Privacy Policy
              </h3>
              <p className="text-[11px] text-gray-600 leading-relaxed text-center">
                AUTHORISED SERVICE is rigorously committed to protecting your digital and physical privacy. We collect vital Personal Information (such as full name, phone number, email, and exact residential address) and Service Details strictly to schedule accurate service visits and process secure payments. We unconditionally pledge that we do not sell, rent, or trade your personal information to third-party marketers. Your data may be shared confidentially only with internal staff for service delivery or fully encrypted, trusted payment processors. We retain your information securely only for as long as necessary to fulfill service obligations, maintain financial records for legal tax purposes, or quickly resolve customer disputes.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-[13px] mb-2 text-gray-800 text-center">
                3. Service Warranty Terms
              </h3>
              <p className="text-[11px] text-gray-600 leading-relaxed text-center">
                We offer a default service warranty of up to 30 days on standard repairs and replaced components, covering defects in workmanship or parts supplied. However, please note that in certain complex cases—such as severe physical damage, component level liquid ingress, intermittent software corruptions, or legacy panel repairs—the warranty is strictly Nill (0 days), which will be explicitly communicated by our technician prior to starting work. Presenting the original digital or physical service invoice is mandatory for any warranty claim. The warranty automatically voids if the appliance undergoes post-repair modifications by unauthorized third parties or suffers damage from severe power surges.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}