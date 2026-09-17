import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function CancellationRefundPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8">
      <SEO
        title="Cancellation & Refund Policy | Authorised Services"
        description="Review the appointment cancellation, inspection charges, and refund policy of Authorised Services."
        canonical="https://authorisedservices.in/cancellation-refund-policy"
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
            Cancellation & Refund Policy
          </h1>
          <p className="text-sm text-gray-600">
            Fair and transparent guidelines regarding service cancellations and
            refunds.
          </p>
        </div>

        <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              Appointment Cancellation
            </h2>
            <p>
              Customers can contact Authorised Services at{" "}
              <strong>98113 56807‬</strong> to cancel or reschedule a service
              request at any time prior to technician dispatch.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              Inspection / Visit Charges
            </h2>
            <p>
              If a visit or inspection charge applies for diagnosing the
              appliance, the applicable amount must be communicated to the
              customer before the service is provided.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              Repair Cancellation
            </h2>
            <p>
              If the customer declines a repair after diagnosis and quotation,
              no repair work will be performed, and only applicable
              inspection/visit charges (if any pre-notified) will apply.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">Refunds</h2>
            <p>
              If an advance amount has been paid and a refund is applicable, it
              will be processed according to the applicable payment and service
              terms.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">Parts Policy</h2>
            <p>
              Special-order or already-installed components may have different
              refund or return conditions, which should be communicated before
              purchase and installation.
            </p>
          </section>

          <section className="space-y-2 pt-4 border-t border-gray-100">
            <h2 className="text-lg font-bold text-gray-900">
              Contact Information
            </h2>
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
