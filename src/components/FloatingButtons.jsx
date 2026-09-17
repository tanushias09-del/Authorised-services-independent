import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/919811356807?text=Hi%2C+I+would+like+to+get+assistance+for+my+appliance+repair."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Support"
        className="bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
      >
        <MessageSquare size={22} />
      </a>

      {/* Call Floating Icon */}
      <a
        href="tel:9811356807"
        aria-label="Call Support"
        className="bg-blue-600 hover:bg-blue-700 text-white p-3.5 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
      >
        <Phone size={22} />
      </a>
    </div>
  );
}
