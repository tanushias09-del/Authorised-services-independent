import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8">
      <SEO
        title="Privacy Policy | Authorised Services"
        description="Read the Privacy Policy of Authorised Services detailing information collection, usage, and data protection practices."
        canonical="https://authorisedservices.in/privacy-policy"
      />

      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-gray-200 space-y-8">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <Link
            to="/"
            className="text-sm font-semibold text-blue-600 hover:underline"
          >
            ← Back to Home
          </Link>
          <span className="text-xs text-gray-400">
            Last Updated: September 2026
          </span>
        </div>

        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-600">
            Authorised Services respects your privacy and is committed to
            protecting your personal information.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl text-xs space-y-1">
          <p className="font-bold text-gray-900 mb-2">Table of Contents</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-blue-600">
            <a href="#intro" className="hover:underline">
              1. Introduction
            </a>
            <a href="#info-collect" className="hover:underline">
              2. Information We Collect
            </a>
            <a href="#personal-info" className="hover:underline">
              3. Personal Information
            </a>
            <a href="#service-req" className="hover:underline">
              4. Service Request Information
            </a>
            <a href="#how-use" className="hover:underline">
              5. How We Use Information
            </a>
            <a href="#phone-comm" className="hover:underline">
              6. Phone Number and Communication
            </a>
            <a href="#whatsapp" className="hover:underline">
              7. WhatsApp Communication
            </a>
            <a href="#tech-info" className="hover:underline">
              8. Website/Technical Information
            </a>
            <a href="#cookies" className="hover:underline">
              9. Cookies
            </a>
            <a href="#protect" className="hover:underline">
              10. How We Protect Information
            </a>
            <a href="#retention" className="hover:underline">
              11. Data Retention
            </a>
            <a href="#third-party" className="hover:underline">
              12. Third-Party Services
            </a>
            <a href="#payment" className="hover:underline">
              13. Payment Information
            </a>
            <a href="#children" className="hover:underline">
              14. Children's Privacy
            </a>
            <a href="#rights" className="hover:underline">
              15. Your Rights
            </a>
            <a href="#deletion" className="hover:underline">
              16. Data Deletion Requests
            </a>
            <a href="#changes" className="hover:underline">
              17. Changes to Privacy Policy
            </a>
            <a href="#contact" className="hover:underline">
              18. Contact Us
            </a>
          </div>
        </div>

        <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <section id="intro" className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">1. Introduction</h2>
            <p>
              Welcome to Authorised Services ("we", "our", "us"). We operate as
              an independent TV and home appliance repair service provider. This
              Privacy Policy outlines how we collect, use, and protect your
              information when you visit our website (authorisedservices.in) or
              engage our repair services.
            </p>
          </section>

          <section id="info-collect" className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              2. Information We Collect
            </h2>
            <p>
              We collect information that you directly provide to us when
              scheduling service requests, filling out contact forms, or
              communicating with us via phone or messaging platforms.
            </p>
          </section>

          <section id="personal-info" className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              3. Personal Information
            </h2>
            <p>
              Personal information submitted through our forms may include your
              name, phone number, and service address.
            </p>
          </section>

          <section id="service-req" className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              4. Service Request Information
            </h2>
            <p>
              When requesting repairs, you may provide appliance details, brand
              name, specific repair problems, and preferred appointment timing.
            </p>
          </section>

          <section id="how-use" className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              5. How We Use Information
            </h2>
            <p>
              Information collected is used strictly for responding to
              enquiries, scheduling service visits, contacting customers,
              providing repair services, customer support, and maintaining
              service records.
            </p>
            <p className="font-semibold text-gray-900 mt-2">
              Authorised Services does not sell personal information to third
              parties.
            </p>
          </section>

          <section id="phone-comm" className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              6. Phone Number and Communication
            </h2>
            <p>
              Your phone number is used exclusively for coordination regarding
              technician visits, repair estimates, and customer service updates.
            </p>
          </section>

          <section id="whatsapp" className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              7. WhatsApp Communication
            </h2>
            <p>
              If you choose to contact us via WhatsApp, your interactions and
              phone details are governed by WhatsApp's platform privacy policies
              as well as our internal record-keeping practices.
            </p>
          </section>

          <section id="tech-info" className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              8. Website/Technical Information
            </h2>
            <p>
              Our hosting infrastructure may automatically record standard web
              server logs including IP addresses, browser types, and access
              timestamps for security and operational purposes.
            </p>
          </section>

          <section id="cookies" className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">9. Cookies</h2>
            <p>
              We use basic session cookies or local storage preferences only
              where necessary for website functionality. You can manage or clear
              cookies via your browser settings.
            </p>
          </section>

          <section id="protect" className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              10. How We Protect Information
            </h2>
            <p>
              We implement reasonable administrative, technical, and physical
              safeguards to protect customer data against unauthorized access,
              alteration, or disclosure.
            </p>
          </section>

          <section id="retention" className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              11. Data Retention
            </h2>
            <p>
              Service records and customer contact details are retained for as
              long as necessary to fulfill repair warranty commitments,
              accounting requirements, and customer support history.
            </p>
          </section>

          <section id="third-party" className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              12. Third-Party Services
            </h2>
            <p>
              Our website may contain links to external sites or integrate
              standard hosting services. We are not responsible for the privacy
              practices of external third-party websites.
            </p>
          </section>

          <section id="payment" className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              13. Payment Information
            </h2>
            <p>
              Payments for repair services are typically handled directly with
              technicians via cash or verified digital transfer methods. We do
              not store credit card or sensitive banking credentials on our
              website servers.
            </p>
          </section>

          <section id="children" className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              14. Children's Privacy
            </h2>
            <p>
              Our services are intended for adults. We do not knowingly collect
              personal information from minors.
            </p>
          </section>

          <section id="rights" className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">15. Your Rights</h2>
            <p>
              You have the right to request access to, correction of, or updates
              to your personal contact information held by us.
            </p>
          </section>

          <section id="deletion" className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              16. Data Deletion Requests
            </h2>
            <p>
              You may request the deletion of your personal records from our
              active database by contacting us directly, subject to legal and
              service record retention obligations.
            </p>
          </section>

          <section id="changes" className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              17. Changes to Privacy Policy
            </h2>
            <p>
              We reserve the right to update this Privacy Policy at any time.
              Changes will be reflected with a revised "Last Updated" date on
              this page.
            </p>
          </section>

          <section
            id="contact"
            className="space-y-2 pt-4 border-t border-gray-100"
          >
            <h2 className="text-lg font-bold text-gray-900">18. Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy, please
              contact:
            </p>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-1">
              <p className="font-bold text-gray-900">Authorised Services</p>
              <p>Phone: 98113 56807‬</p>
              <p>Address: Police Chowki, Near GS Model School, Sec-62, Noida, Ghaziabad,  U.P, 201309</p>
            </div>
          </section>
        </div>

        <div className="pt-6 border-t border-gray-100">
          <Link
            to="/"
            className="text-sm font-semibold text-blue-600 hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
