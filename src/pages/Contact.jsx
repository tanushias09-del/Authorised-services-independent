import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, MapPin, MessageSquare, Send } from "lucide-react";
import SEO from "../components/SEO";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    appliance: "LED/Smart TV",
    brand: "",
    problem: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.problem) {
      alert("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8">
      <SEO
        title="Contact Us | Authorised Services"
        description="Contact Authorised Services for TV and appliance repair. Call 98113 56807‬ or visit Police Chowki, Near GS Model School, Sec-62, Noida, Ghaziabad,  U.P, 201309. Fast independent repair support."
        canonical="https://authorisedservices.in/contact"
      />

      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
            Get in Touch
          </span>
          <h1 className="text-3xl font-extrabold text-gray-900 mt-1 mb-2">
            Contact Authorised Services
          </h1>
          <p className="text-gray-600 text-sm">
            Reach out to our independent support team for service enquiries and
            appointment bookings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Details & Quick Actions */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 space-y-6 lg:col-span-1">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="text-blue-600 shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="text-xs font-semibold text-gray-500 uppercase">
                    Phone
                  </h3>
                  <a
                    href="tel:98113 56807‬"
                    className="text-base font-bold text-gray-900 hover:text-blue-600"
                  >
                    98113 56807‬
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-600 shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="text-xs font-semibold text-gray-500 uppercase">
                    Address
                  </h3>
                  <p className="text-sm font-medium text-gray-900">
                    covered all sectors in Noida and Delhi                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 space-y-3">
              <a
                href="tel:98113 56807‬"
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                <Phone size={16} />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/9198113 56807‬?text=Hello%20Authorised%20Services,%20I%20would%20like%20to%20enquire%20about%20repair%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                <MessageSquare size={16} />
                <span>WhatsApp</span>
              </a>
              <Link
                to="/book-repair"
                className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                <span>Book a Repair</span>
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200 lg:col-span-2">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Enquiry Submitted Successfully
                </h3>
                <p className="text-gray-600 text-sm">
                  Thank you for contacting Authorised Services. Our team will
                  get in touch with you shortly at {formData.phone}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Send Us a Message
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your full name"
                      className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="98113 56807‬"
                      className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    placeholder="Your address / locality"
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Appliance
                    </label>
                    <select
                      value={formData.appliance}
                      onChange={(e) =>
                        setFormData({ ...formData, appliance: e.target.value })
                      }
                      className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:border-blue-500"
                    >
                      <option>LED/Smart TV</option>
                      <option>Refrigerator</option>
                      <option>Washing Machine</option>
                      <option>Microwave</option>
                      <option>Air Conditioner</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Brand
                    </label>
                    <input
                      type="text"
                      value={formData.brand}
                      onChange={(e) =>
                        setFormData({ ...formData, brand: e.target.value })
                      }
                      placeholder="e.g. vu, LG, Sony"
                      className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Problem Description *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.problem}
                    onChange={(e) =>
                      setFormData({ ...formData, problem: e.target.value })
                    }
                    placeholder="Briefly describe the issue (e.g. no power)"
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Additional Message
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Any specific instructions..."
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:border-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg text-sm transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  <span>Submit Enquiry</span>
                </button>

                <p className="text-[11px] text-gray-500 text-center pt-2">
                  By submitting this form, you agree to our{" "}
                  <Link
                    to="/terms-and-conditions"
                    className="text-blue-600 underline"
                  >
                    Terms & Conditions
                  </Link>{" "}
                  and acknowledge our{" "}
                  <Link
                    to="/privacy-policy"
                    className="text-blue-600 underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
