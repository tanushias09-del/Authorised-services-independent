import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function ServicePolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8">
      <SEO
        title="Service Policy | Authorised Services"
        description="Read the service policy of Authorised Services detailing appointment procedures, diagnosis, and repair workflows."
        canonical="https://authorisedservices.in/service-policy"
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
            Service Policy
          </h1>
          <p className="text-sm text-gray-600">
            Understand our standard operating procedures for appliance and TV
            repairs.
          </p>
        </div>

        <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              Service Request Procedure
            </h2>
            <p>
              Customers can initiate service requests by contacting us at 98113
              56807‬ or filling out our online booking form with accurate
              appliance and problem details.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              Technician Visit Process
            </h2>
            <p>
              Our technicians arrive at your location (Police Chowki, Near GS Model School, Sec-62, Noida, Ghaziabad,  U.P, 201309 service
              area) at the agreed scheduled appointment time to inspect the
              appliance.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              Diagnosis Procedure
            </h2>
            <p>
              A thorough technical inspection is performed to identify the exact
              root cause of the malfunction.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              Estimate / Quotation Process
            </h2>
            <p>
              Following diagnosis, a clear breakdown of repair costs, parts
              required, and labor charges is provided.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              Customer Approval
            </h2>
            <p>
              Repair work is initiated strictly after receiving verbal or
              written confirmation from the customer.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              Repair Procedure & Parts Replacement
            </h2>
            <p>
              Repairs are executed using appropriate tools and compatible
              replacement components.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              Testing After Repair
            </h2>
            <p>
              The appliance is thoroughly tested in front of the customer to
              verify proper functionality before service completion.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              Service Completion & Responsibilities
            </h2>
            <p>
              Customers must provide safe workspace access and verify the
              appliance upon completion.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              Service Area & Rescheduling Rules
            </h2>
            <p>
              Appointments can be rescheduled by calling 98113 56807‬ with
              reasonable prior notice.
            </p>
          </section>

          <section className="space-y-2 bg-blue-50/60 p-4 rounded-xl border border-blue-200">
            <h2 className="text-lg font-bold text-blue-900">
              Repair Warranty Policy
            </h2>
            <p className="font-medium text-blue-950">
              "Any repair warranty period, if applicable, will be communicated
              to the customer on the service invoice/job sheet before or after
              completion of the repair."
            </p>
            <p className="text-xs text-blue-900 mt-2">
              Warranty conditions may vary depending on the specific repair
              performed and replacement parts used.
            </p>
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
