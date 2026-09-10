import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { ShieldCheck, MapPin } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8">
      <SEO
        title="About Us | Authorised Services"
        description="Learn about Authorised Services, an independent TV and home appliance repair service provider based at 4A, Mavi Mohalla. Call 98113 56807‬."
        canonical="https://authorisedservices.in/about"
      />

      <div className="max-w-3xl mx-auto space-y-8 bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-gray-200">
        <div>
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
            Independent Provider
          </span>
          <h1 className="text-3xl font-extrabold text-gray-900 mt-1 mb-4">
            About Authorised Services
          </h1>
        </div>

        <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
          <p>
            <strong>Authorised Services</strong> provides independent TV and
            appliance repair services. We specialize in diagnosing,
            troubleshooting, and repairing a wide variety of household
            electronic and electrical appliances from multiple brands.
          </p>
          <p>
            Operating out of our service base at{" "}
            <strong>4A, Mavi Mohalla</strong>, our core focus is delivering
            transparent, reliable, and professional repair support directly to
            our customers.
          </p>
          <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl space-y-2">
            <h3 className="font-bold text-gray-900 text-sm flex items-center gap-2">
              <ShieldCheck size={16} className="text-blue-600" />
              <span>Independent Status Clarification</span>
            </h3>
            <p className="text-xs text-gray-600">
              Authorised Services is an independent repair service provider. We
              are not officially affiliated with, authorised by, or representing
              manufacturers such as Sony, vu, LG, Panasonic, TCL, Haier,
              Xiaomi, or OnePlus unless explicitly stated in writing.
            </p>
          </div>
          <p>
            For service enquiries or to schedule a technician visit, please
            reach out to us at <strong>98113 56807‬</strong> or use our online
            booking platform.
          </p>
        </div>

        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
          <Link
            to="/"
            className="text-sm font-semibold text-blue-600 hover:underline"
          >
            ← Back to Home
          </Link>
          <Link
            to="/contact"
            className="bg-blue-600 text-white text-xs font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
