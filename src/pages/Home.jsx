import React, { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';
import SEO from '../components/SEO';

export default function Home() {
  const [dynamicTitle, setDynamicTitle] = useState("SONY SERVICE CENTER");

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const h1Param = queryParams.get('h1');

    if (h1Param) {
      const decodedText = decodeURIComponent(h1Param).toUpperCase();
      setDynamicTitle(decodedText);
    }
  }, []);

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const appliance = e.target.appliance.value;
    const problem = e.target.problem.value;
    
    const text = `Hello Authorised Services,%0A%0AI want to book a repair enquiry for *${dynamicTitle}*:%0A- *Name:* ${encodeURIComponent(name)}%0A- *Phone:* ${encodeURIComponent(phone)}%0A- *Appliance:* ${encodeURIComponent(appliance)}%0A- *Problem:* ${encodeURIComponent(problem)}`;
    window.open(`https://wa.me/919811356807?text=${text}`, '_blank');
  };

  return (
    <div className="bg-[#f9f9fa] text-[#222222] antialiased relative pb-16 text-center font-sans">
      <SEO
        title={`${dynamicTitle} | Authorised Services`}
        description="Professional independent repair and service provider for TVs and home appliances. Fast doorstep diagnosis."
        canonical="https://authorisedservices.in/"
      />

      <main className="py-6 max-w-md md:max-w-5xl lg:max-w-6xl mx-auto bg-white shadow-none min-h-screen my-0 rounded-none md:rounded-lg text-center">
        
        {/* Image Container */}
        <div className="mb-4 px-4 md:px-12 flex justify-center pt-2">
          <div className="w-full max-w-[280px] md:max-w-[420px] h-24 md:h-36 overflow-hidden rounded-md bg-white flex items-center justify-center p-1 mx-auto">
            <img 
              src="/banner.png"
              alt={dynamicTitle}
              className="w-full h-full object-contain mx-auto"
            />
          </div>
        </div>

        {/* Hero Section with Dynamic H1 */}
        <div id="home" className="text-center mb-8 px-1 scroll-mt-20">
          <div className="flex justify-center items-center gap-1.5 mb-3">
            <div className="text-[#f59e0b] text-[10px] flex gap-0.5">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <span className="text-[0.65rem] font-bold text-gray-700 tracking-wide uppercase">24/7 Customer Support</span>
          </div>

          <h1 className="text-[1.35rem] md:text-2xl font-bold text-[#1a5b82] mb-3 tracking-tight text-center uppercase">
            {dynamicTitle}
          </h1>

          <p className="text-[13px] text-gray-600 mb-4 leading-relaxed px-5 text-center max-w-lg md:max-w-2xl mx-auto">
            India’s leading independent provider for fast, reliable, and professional home appliance repair. Our expert technicians use premium-grade spare parts to ensure your essential appliances run smoothly year-round.
          </p>

          {/* Quick Booking Form */}
          <div className="max-w-xl mx-auto bg-white border border-gray-200/90 p-6 sm:p-8 rounded-2xl shadow-xl text-left mt-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-1 text-center">Book Quick Service</h3>
            <p className="text-xs text-gray-500 mb-4 text-center">Send complete details directly via WhatsApp.</p>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name *</label>
                <input type="text" name="name" required placeholder="Enter your name" className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-sm" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number *</label>
                <input type="tel" name="phone" required placeholder="9811356807" className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-sm" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Select Appliance *</label>
                <select name="appliance" className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-sm">
                  <option value="LED / Smart TV">LED / Smart TV</option>
                  <option value="Refrigerator">Refrigerator</option>
                  <option value="Washing Machine">Washing Machine</option>
                  <option value="Microwave Oven">Microwave Oven</option>
                  <option value="Air Conditioner">Air Conditioner</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Describe Problem *</label>
                <input type="text" name="problem" required placeholder="e.g. No power, sound only, not cooling" className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-sm" />
              </div>

              <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg text-sm transition-colors shadow-sm flex items-center justify-center gap-2 mt-2">
                <MessageSquare size={16} />
                <span>Send Request on WhatsApp</span>
              </button>
            </form>
          </div>
        </div>

        <div className="w-8 h-[1.5px] bg-[#d1d5db] mx-auto my-10"></div>

        {/* Comprehensive Contact Details */}
        <div id="contact" className="mb-10 px-6 scroll-mt-20 text-center">
          <ul className="space-y-5 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-4 text-[12px] text-gray-700 bg-gray-50 p-5 rounded-lg border border-gray-100 shadow-sm max-w-lg md:max-w-none mx-auto text-center">
            <li className="flex flex-col items-center justify-center gap-2 border-b md:border-b-0 border-gray-200 pb-3 md:pb-0 text-center">
              <i className="fa-solid fa-phone text-[#1a5b82] text-[12px]"></i>
              <span className="leading-snug">
                <strong>CALLING LINE:</strong><br />98113 56807<br />
                <span className="text-[10px] text-gray-500">Available for all voice calls and scheduling.</span>
              </span>
            </li>
            <li className="flex flex-col items-center justify-center gap-2 border-b md:border-b-0 border-gray-200 pb-3 md:pb-0 text-center">
              <i className="fa-brands fa-whatsapp text-[#1a5b82] text-[12px]"></i>
              <span className="leading-snug">
                <strong>WhatsApp Support:</strong><br />+91 98113 56807<br />
                <span className="text-[10px] text-gray-500">Available exclusively for messaging.</span>
              </span>
            </li>
            <li className="flex flex-col items-center justify-center gap-2 border-b md:border-b-0 border-gray-200 pb-3 md:pb-0 text-center">
              <span className="text-[#1a5b82] font-bold">@</span>
              <span className="leading-snug">
                <strong>Corporate Email:</strong><br />authorisedservicesinfo@gmail.com<br />
                <span className="text-[10px] text-gray-500">Response within 15-30 minutes during business hours.</span>
              </span>
            </li>
            <li className="flex flex-col items-center justify-center gap-2 text-center">
              <i className="fa-solid fa-clock text-[#1a5b82] text-[12px]"></i>
              <span className="leading-snug">
                <strong>Availability & Schedule:</strong><br />Support desks operate 24/7. Field visits scheduled from 8:00 AM to 10:00 PM.
              </span>
            </li>
          </ul>
        </div>

        <div className="w-8 h-[1.5px] bg-[#d1d5db] mx-auto my-10"></div>

        {/* How to Book Our Service */}
        <div id="booking" className="text-center mb-10 scroll-mt-20 px-4">
          <h2 className="text-lg font-bold mb-3 text-center">How to Book Our Service?</h2>
          <p className="text-[12px] text-gray-500 mb-8 px-6 leading-relaxed text-center max-w-lg md:max-w-2xl mx-auto">
            Booking a priority service request with our team is simple, secure, and completely hassle-free.
          </p>
          <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 px-5 text-center max-w-lg md:max-w-none mx-auto">
            {[
              { num: "01", title: "Initiate Contact", desc: "Call our number or drop a message on WhatsApp to report your appliance issue." },
              { num: "02", title: "Share Comprehensive Details", desc: "Provide model number, specific symptoms, and your convenient time slot." },
              { num: "03", title: "Instant Confirmation", desc: "Receive appointment confirmation and technician profile within 5 to 10 minutes." },
              { num: "04", title: "Expert Technician Assigned", desc: "A background-verified and experienced technician is dispatched immediately." },
              { num: "05", title: "Doorstep Diagnostics & Visit", desc: "Our fully equipped technician visits on time and resolves issues on the spot." },
              { num: "06", title: "Service Finalization", desc: "Test the appliance thoroughly and pay securely via UPI, card, or cash." }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="text-[#1a5b82] bg-blue-50 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-2 shadow-sm border border-blue-100 mx-auto">{step.num}</div>
                <h3 className="font-bold text-[13px] mb-2 text-gray-800 text-center">{step.title}</h3>
                <p className="text-[11px] text-gray-500 px-4 leading-relaxed text-center">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-8 h-[1.5px] bg-[#d1d5db] mx-auto my-10"></div>

        {/* About Us */}
        <div id="about" className="mb-10 px-6 scroll-mt-20 text-center">
          <h2 className="text-lg font-bold mb-4 text-center">About Our Organization</h2>
          <div className="text-[11px] text-gray-600 text-center leading-loose space-y-4 max-w-lg md:max-w-3xl mx-auto">
            <p><strong>AUTHORISED SERVICE</strong> is a dedicated service provider strictly focused on delivering dependable technical and business support solutions with absolute consistency and precision.</p>
            <p>Our core expertise lies in providing comprehensive, end-to-end technical services, handling diagnostics, preventative maintenance routines, and complex hardware repair solutions.</p>
          </div>
        </div>

        <div className="w-8 h-[1.5px] bg-[#d1d5db] mx-auto my-10"></div>

        {/* Serving All Major Locations */}
        <div id="locations" className="mb-10 text-center px-4 scroll-mt-20">
          <h2 className="text-lg font-bold mb-3 text-center">Serving All Major Locations</h2>
          <p className="text-[11px] text-gray-500 mb-6 leading-relaxed px-2 text-center max-w-lg md:max-w-2xl mx-auto">
            We provide fast and reliable doorstep appliance repair services across major cities:
          </p>
          <div className="flex flex-wrap justify-center gap-1.5 max-w-lg md:max-w-4xl mx-auto">
            {['Noida sec 18', 'Akola', 'Delhi', 'Faridabad', 'Gandhinagar', 'Ghaziabad', 'Gorakhpur', 'Greater Noida', 'Gurugram', 'Kanpur', 'Kolkata', 'Kota', 'Meerut', 'Nagpur', 'Nashik', 'Noida', 'Patna', 'Varanasi', 'Udaipur'].map((loc, i) => (
              <span key={i} className="text-[#1a5b82] text-[10px] font-semibold px-2.5 py-1 rounded-full border border-blue-100 bg-[#f4f7fb] flex items-center justify-center gap-1">
                <i className="fa-solid fa-location-dot text-[8px]"></i> {loc}
              </span>
            ))}
          </div>
        </div>

        <div className="w-8 h-[1.5px] bg-[#d1d5db] mx-auto my-10"></div>

        {/* Verified Client Testimonials */}
        <div id="testimonials" className="mb-10 text-center px-5 scroll-mt-20">
          <h2 className="text-lg font-bold mb-3 text-center">Verified Client Testimonials</h2>
          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 max-w-lg md:max-w-none mx-auto text-center">
            {[
              { review: "Exceptional doorstep service. My Smart TV had a complete backlight failure, and their engineer fixed it within hours.", name: "Suresh Shah, DELHI" },
              { review: "Very prompt response. OLED TV screen went blank suddenly. The technician accurately diagnosed a power board issue.", name: "Karthik Rao, delhi" },
              { review: "Transparent pricing and great execution. They explained repair costs before starting work. Very satisfied.", name: "Manish Malhotra, Delhi" }
            ].map((t, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center flex flex-col justify-between">
                <div>
                  <div className="text-[#f59e0b] text-[10px] mb-2 flex justify-center gap-0.5">
                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                  </div>
                  <p className="text-[12px] text-gray-700 italic mb-3 leading-relaxed text-center">"{t.review}"</p>
                </div>
                <span className="text-[10px] font-bold text-[#1a5b82] block text-center">- {t.name}</span>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}