import React from "react";
import { Link } from "react-router-dom";
import { Tv, CheckCircle2, Phone, ArrowRight } from "lucide-react";
import SEO from "../components/SEO";

export default function TVRepair() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8">
      <SEO
        title="Authorised Services"
        description="Expert LED, LCD, OLED, and Smart TV repair by independent technicians. Screen issues, audio problems, power failures. Call 98113 56807‬."
        canonical="https://authorisedservices.in/tv-repair"
      />

      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
            Specialized Support
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-1 mb-3">
            Professional TV Repair Services
          </h1>
          <p className="text-gray-600 text-base">
            Expert diagnostic and repair solutions for all major television
            types and multi-brand models.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200 space-y-6">
          <h2 className="text-xl font-bold text-gray-900">
            Types of TVs We Service
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-1">
                LED & Smart TVs
              </h3>
              <p className="text-sm text-gray-600">
                Smart features, Wi-Fi connectivity problems, software errors,
                and backlight issues.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-1">
                LCD & OLED Panels
              </h3>
              <p className="text-sm text-gray-600">
                Display distortion, color banding, dead pixels, and screen
                assembly troubleshooting.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 pt-4">
            Common TV Faults We Handle
          </h2>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle2
                size={18}
                className="text-blue-600 shrink-0 mt-0.5"
              />
              <span>
                <strong>No Power / Won't Turn On:</strong> Power supply board
                diagnostics and capacitor/fuse replacement.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2
                size={18}
                className="text-blue-600 shrink-0 mt-0.5"
              />
              <span>
                <strong>No Picture / Sound Only:</strong> LED backlight strip
                testing and driver circuit repair.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2
                size={18}
                className="text-blue-600 shrink-0 mt-0.5"
              />
              <span>
                <strong>Horizontal/Vertical Lines:</strong> T-Con board and
                ribbon cable inspections.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2
                size={18}
                className="text-blue-600 shrink-0 mt-0.5"
              />
              <span>
                <strong>HDMI / Port Failures:</strong> Motherboard signal
                processor evaluation and port repairs.
              </span>
            </li>
          </ul>

          <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-blue-900">
                Need your TV inspected?
              </h3>
              <p className="text-xs text-blue-700 mt-1">
                Book an appointment with our independent technicians today.
              </p>
            </div>
            <Link
              to="/book-repair"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-lg text-sm transition-colors shrink-0"
            >
              Book TV Repair
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
