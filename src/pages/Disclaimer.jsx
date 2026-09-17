import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8">
      <SEO
        title="Disclaimer | Authorised Services"
        description="Important legal disclaimer regarding independent repair status and brand affiliations for Authorised Services."
        canonical="https://authorisedservices.in/disclaimer"
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
            Disclaimer
          </h1>
          <p className="text-sm text-gray-600">
            Important notices regarding our independent service provider status.
          </p>
        </div>

        <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl space-y-4">
            <p className="font-bold text-amber-950 text-base">
              "Authorised Services is an independent TV and home-appliance
              repair service provider."
            </p>
            <p className="font-medium text-amber-950">
              "Authorised Services is not affiliated with, sponsored by,
              endorsed by, or officially authorised by Sony, vu, LG,
              Panasonic, TCL, Haier, Xiaomi, OnePlus, or any other manufacturer
              unless explicitly stated."
            </p>
            <p className="text-xs text-amber-900">
              "Brand names are mentioned only to identify the products that our
              technicians may service. All trademarks and brand names belong to
              their respective owners."
            </p>
          </div>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              Manufacturer Warranty Verification
            </h2>
            <p>
              Customers should contact the relevant manufacturer directly to
              verify official warranty coverage or authorised service-centre
              status.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">
              General Information & Estimates
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Website information is provided for general service reference.
              </li>
              <li>
                Repair outcomes may vary depending on product condition, age,
                and nature of fault.
              </li>
              <li>
                Estimates may change if additional latent faults are discovered
                during diagnosis.
              </li>
              <li>
                The business does not guarantee manufacturer warranty coverage
                for independent repairs.
              </li>
            </ul>
          </section>

          <section className="space-y-2 pt-4 border-t border-gray-100">
            <h2 className="text-lg font-bold text-gray-900">Contact</h2>
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
