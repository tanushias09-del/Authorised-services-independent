import React from "react";
import { Link } from "react-router-dom";
import { Wrench, ArrowRight } from "lucide-react";
import SEO from "../components/SEO";

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8">
      <SEO
        title="Appliance Repair Services | Authorised Services"
        description="Multi-brand independent home appliance repair services including refrigerators, washing machines, microwaves, and AC units. Call 98113 56807‬."
        canonical="https://authorisedservices.in/services"
      />

      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
            Comprehensive Solutions
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-1 mb-3">
            All Home Appliance Services
          </h1>
          <p className="text-gray-600 text-base">
            Reliable independent repair and maintenance services for daily
            household appliances.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 space-y-3">
            <h3 className="text-lg font-bold text-gray-900">
              Refrigerator Repair
            </h3>
            <p className="text-sm text-gray-600">
              Cooling issues, compressor diagnostics, thermostat replacement,
              defrost timer errors, and gas recharging.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 space-y-3">
            <h3 className="text-lg font-bold text-gray-900">
              Washing Machine Repair
            </h3>
            <p className="text-sm text-gray-600">
              Drum spinning failures, water drainage blockage, inlet valve
              replacement, and control board faults.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 space-y-3">
            <h3 className="text-lg font-bold text-gray-900">
              Microwave Oven Repair
            </h3>
            <p className="text-sm text-gray-600">
              Heating failure, magnetron issues, turntable motor replacement,
              and touchpad unresponsive errors.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 space-y-3">
            <h3 className="text-lg font-bold text-gray-900">
              Air Conditioner Service
            </h3>
            <p className="text-sm text-gray-600">
              Cooling inefficiency, gas leakage repair, filter cleaning,
              electrical wiring checks, and compressor troubleshooting.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200 space-y-4">
          <h3 className="text-xl font-bold text-gray-900">
            Our Service Procedure
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
            <li>
              <strong>Service Request:</strong> Contact us via phone (98113
              56807‬) or booking form.
            </li>
            <li>
              <strong>Technician Visit:</strong> Our technician visits your
              location (Police Chowki, Near GS Model School, Sec-62, Noida, Ghaziabad,  U.P, 201309 area/surrounds).
            </li>
            <li>
              <strong>Diagnosis & Estimate:</strong> Thorough fault analysis
              with upfront repair cost quotation.
            </li>
            <li>
              <strong>Customer Approval:</strong> Repair proceeds strictly upon
              customer approval.
            </li>
          </ol>
          <div className="pt-4">
            <Link
              to="/book-repair"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-lg text-sm transition-colors"
            >
              <span>Schedule Service Appointment</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
