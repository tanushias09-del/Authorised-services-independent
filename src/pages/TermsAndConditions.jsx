import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8">
      <SEO
        title="Terms & Conditions | Authorised Services"
        description="Review the terms and conditions for engaging independent repair services from Authorised Services."
        canonical="https://authorisedservices.in/terms-and-conditions"
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
            Terms & Conditions
          </h1>
          <p className="text-sm text-gray-600">
            Please read these terms carefully before engaging our independent
            repair services.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl text-xs space-y-1">
          <p className="font-bold text-gray-900 mb-2">Table of Contents</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-blue-600">
            <a href="#acceptance" className="hover:underline">
              1. Acceptance of Terms
            </a>
            <a href="#about-svc" className="hover:underline">
              2. About Our Services
            </a>
            <a href="#ind-status" className="hover:underline">
              3. Independent Service Provider Status
            </a>
            <a href="#svc-req" className="hover:underline">
              4. Service Requests
            </a>
            <a href="#appt" className="hover:underline">
              5. Appointment Scheduling
            </a>
            <a href="#insp" className="hover:underline">
              6. Inspection & Diagnosis
            </a>
            <a href="#est" className="hover:underline">
              7. Repair Estimates
            </a>
            <a href="#parts" className="hover:underline">
              8. Parts and Replacement Components
            </a>
            <a href="#cust-app" className="hover:underline">
              9. Customer Approval
            </a>
            <a href="#charges" className="hover:underline">
              10. Service Charges
            </a>
            <a href="#pay" className="hover:underline">
              11. Payment
            </a>
            <a href="#warr" className="hover:underline">
              12. Warranty on Repairs
            </a>
            <a href="#mfg-warr" className="hover:underline">
              13. Third-Party/Manufacturer Warranty
            </a>
            <a href="#cust-resp" className="hover:underline">
              14. Customer Responsibilities
            </a>
            <a href="#access" className="hover:underline">
              15. Access to Premises
            </a>
            <a href="#delays" className="hover:underline">
              16. Delays and Rescheduling
            </a>
            <a href="#liability" className="hover:underline">
              17. Limitation of Liability
            </a>
            <a href="#web-acc" className="hover:underline">
              18. Website Accuracy
            </a>
            <a href="#ip" className="hover:underline">
              19. Intellectual Property
            </a>
            <a href="#prohib" className="hover:underline">
              20. Prohibited Use
            </a>
            <a href="#changes" className="hover:underline">
              21. Changes to Terms
            </a>
            <a href="#gov" className="hover:underline">
              22. Governing Law
            </a>
            <a href="#contact" className="hover:underline">
              23. Contact Information
            </a>
          </div>
        </div>

        <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <section id="acceptance" className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing authorisedservices.in or booking a service, you agree
              to comply with and be bound by these Terms & Conditions.
            </p>
          </section>

          <section id="about-svc" className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              2. About Our Services
            </h2>
            <p>
              We provide repair, maintenance, and diagnostic services for
              televisions and home appliances at customer premises or through
              coordinated support.
            </p>
          </section>

          <section
            id="ind-status"
            className="space-y-2 bg-amber-50/60 p-4 rounded-xl border border-amber-200"
          >
            <h2 className="text-lg font-bold text-amber-900">
              3. Independent Service Provider Status
            </h2>
            <p className="font-medium text-amber-950">
              "Authorised Services is an independent repair service provider and
              is not affiliated with or officially authorised by any television
              or appliance manufacturer unless explicitly stated."
            </p>
          </section>

          <section id="svc-req" className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              4. Service Requests
            </h2>
            <p>
              Service requests can be submitted via phone, WhatsApp, or our
              online booking forms. Accurate details regarding appliance faults
              help us serve you better.
            </p>
          </section>

          <section id="appt" className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              5. Appointment Scheduling
            </h2>
            <p>
              Appointments are scheduled based on technician availability and
              customer preference. We strive to adhere to scheduled time
              windows.
            </p>
          </section>

          <section id="insp" className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              6. Inspection & Diagnosis
            </h2>
            <p>
              Our technicians conduct thorough physical and technical
              inspections to diagnose appliance faults accurately.
            </p>
          </section>

          <section id="est" className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              7. Repair Estimates
            </h2>
            <p>
              Detailed repair estimates including parts and labor costs are
              provided to the customer following diagnosis before repair work
              commences.
            </p>
          </section>

          <section id="parts" className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              8. Parts and Replacement Components
            </h2>
            <p>
              We use compatible or quality replacement components necessary for
              repairing your appliance. Availability may vary by brand and
              model.
            </p>
          </section>

          <section id="cust-app" className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              9. Customer Approval
            </h2>
            <p>
              No repair work or part replacement is performed without prior
              customer approval of the estimated cost.
            </p>
          </section>

          <section id="charges" className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              10. Service Charges
            </h2>
            <p>
              Inspection, visit, or labor charges are communicated upfront or
              prior to service execution.
            </p>
          </section>

          <section id="pay" className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">11. Payment</h2>
            <p>
              Payment for completed services and parts is due upon completion of
              the repair work unless agreed otherwise.
            </p>
          </section>

          <section id="warr" className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              12. Warranty on Repairs
            </h2>
            <p>
              Any repair warranty period, if applicable, will be communicated to
              the customer on the service invoice/job sheet before or after
              completion of the repair.
            </p>
          </section>

          <section
            id="mfg-warr"
            className="space-y-2 bg-blue-50/60 p-4 rounded-xl border border-blue-200"
          >
            <h2 className="text-lg font-bold text-blue-900">
              13. Third-Party/Manufacturer Warranty
            </h2>
            <ul className="list-disc list-inside space-y-1 text-blue-950 text-xs sm:text-sm">
              <li>
                Manufacturer warranty terms are strictly controlled by the
                respective manufacturer.
              </li>
              <li>
                A repair performed by an independent service provider may have
                consequences for manufacturer warranty coverage where
                applicable.
              </li>
              <li>
                Customers should confirm warranty implications with the
                manufacturer before requesting third-party repairs.
              </li>
            </ul>
          </section>

          <section id="cust-resp" className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              14. Customer Responsibilities
            </h2>
            <p>
              Customers must ensure safe working conditions and provide accurate
              information regarding appliance history.
            </p>
          </section>

          <section id="access" className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              15. Access to Premises
            </h2>
            <p>
              Customers must grant technicians safe access to the appliance
              location at the scheduled appointment time.
            </p>
          </section>

          <section id="delays" className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              16. Delays and Rescheduling
            </h2>
            <p>
              Unforeseen traffic, weather, or prior job extensions may cause
              minor appointment delays. We endeavor to notify customers
              promptly.
            </p>
          </section>

          <section id="liability" className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              17. Limitation of Liability
            </h2>
            <p>
              Authorised Services' liability is limited to the cost of the
              repair service provided. We are not liable for pre-existing latent
              defects or secondary damages.
            </p>
          </section>

          <section id="web-acc" className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              18. Website Accuracy
            </h2>
            <p>
              Information on authorisedservices.in is presented for general
              informational and booking purposes.
            </p>
          </section>

          <section id="ip" className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              19. Intellectual Property
            </h2>
            <p>
              Website content, design, and layout are property of Authorised
              Services. Trademarks belong to their respective owners.
            </p>
          </section>

          <section id="prohib" className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              20. Prohibited Use
            </h2>
            <p>
              Users must not misuse the website, attempt unauthorized intrusion,
              or submit false booking information.
            </p>
          </section>

          <section id="changes" className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              21. Changes to Terms
            </h2>
            <p>We may modify these terms at any time by updating this page.</p>
          </section>

          <section id="gov" className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              22. Governing Law
            </h2>
            <p>These terms are governed by applicable local laws.</p>
          </section>

          <section
            id="contact"
            className="space-y-2 pt-4 border-t border-gray-100"
          >
            <h2 className="text-lg font-bold text-gray-900">
              23. Contact Information
            </h2>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-1">
              <p className="font-bold text-gray-900">Authorised Services</p>
              <p>Phone: 98113 56807‬</p>
              <p>Address: 4A, Mavi Mohalla</p>
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
