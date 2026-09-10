import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, ShieldAlert } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white tracking-wide">AUTHORised Services</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Independent TV & Home Appliance Repair Service. We service products from multiple brands with expert technicians.
          </p>
          <div className="flex items-start gap-2 text-xs text-amber-300 bg-amber-950/40 p-3 rounded-lg border border-amber-800/50">
            <ShieldAlert size={16} className="shrink-0 mt-0.5" />
            <span>Independent repair provider. Not officially affiliated with manufacturers unless stated.</span>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold text-base mb-4 tracking-wide border-b border-gray-800 pb-2">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
            <li><Link to="/tv-repair" className="hover:text-blue-400 transition-colors">TV Repair</Link></li>
            <li><Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
            <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            <li><Link to="/book-repair" className="hover:text-blue-400 transition-colors font-medium text-blue-400">Book a Repair</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-base mb-4 tracking-wide border-b border-gray-800 pb-2">Legal</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" className="hover:text-blue-400 transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/service-policy" className="hover:text-blue-400 transition-colors">Service Policy</Link></li>
            <li><Link to="/cancellation-refund-policy" className="hover:text-blue-400 transition-colors">Cancellation & Refund Policy</Link></li>
            <li><Link to="/disclaimer" className="hover:text-blue-400 transition-colors">Disclaimer</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-base mb-4 tracking-wide border-b border-gray-800 pb-2">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="tel:98113 56807‬" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Phone size={16} className="text-blue-400 shrink-0" />
                <span>98113 56807‬</span>
              </a>
            </li>
            <li>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-blue-400 shrink-0 mt-1" />
                <span>4A, Mavi Mohalla</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 border-t border-gray-800 text-center text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© 2026 Authorised Services. All Rights Reserved.</p>
        <p className="text-gray-400">Independent TV & Home Appliance Repair Service</p>
      </div>
    </footer>
  );
}