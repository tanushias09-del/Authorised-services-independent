import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { CheckCircle2 } from "lucide-react";

export default function BookRepair() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8">
      <SEO
        title="Book a Repair | Authorised Services"
        description="Schedule a doorstep appliance or TV repair appointment with Authorised Services. Call 98113 56807‬."
        canonical="https://authorisedservices.in/book-repair"
      />

      <div className="max-w-2xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-gray-200">
        <div className="mb-8">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
            Schedule Appointment
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1 mb-2">
            Book a Repair Service
          </h1>
          <p className="text-gray-600 text-sm">
            Fill in the details below to request a technician visit at your
            location.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-xl font-bold text-gray-900">
              Repair Booking Confirmed
            </h3>
            <p className="text-sm text-gray-600">
              Your service request has been registered. Our technician or
              support coordinator will call you shortly to confirm the schedule.
            </p>
            <div className="pt-4">
              <Link
                to="/"
                className="inline-block bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter name"
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
                  placeholder="98113 56807‬"
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Service Address *
              </label>
              <textarea
                rows={2}
                required
                placeholder="Full street address / locality"
                className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Appliance Type *
                </label>
                <select className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:border-blue-500">
                  <option>LED / Smart TV</option>
                  <option>Refrigerator</option>
                  <option>Washing Machine</option>
                  <option>Microwave Oven</option>
                  <option>Air Conditioner</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Brand Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. vu, LG, Sony"
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Repair Problem / Symptom *
              </label>
              <input
                type="text"
                required
                placeholder="Brief description of the problem"
                className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Preferred Time Slot
                </label>
                <select className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:border-blue-500">
                  <option>Morning (9 AM - 12 PM)</option>
                  <option>Afternoon (12 PM - 4 PM)</option>
                  <option>Evening (4 PM - 7 PM)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg text-sm transition-colors shadow-sm mt-4"
            >
              Confirm Booking Request
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
              <Link to="/privacy-policy" className="text-blue-600 underline">
                Privacy Policy
              </Link>
              .
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
