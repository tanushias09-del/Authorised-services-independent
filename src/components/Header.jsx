import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-blue-600 font-semibold transition-colors'
      : 'text-gray-600 hover:text-blue-600 font-medium transition-colors';

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
     

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
            Authorised <span className="text-blue-600">Services</span>
          </span>
          <span className="text-xs text-gray-500 font-medium tracking-wide">
            
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/tv-repair" className={navLinkClass}>TV Repair</NavLink>
          <NavLink to="/services" className={navLinkClass}>Services</NavLink>
          <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/9198113 56807‬?text=Hello%20Authorised%20Services,%20I%20need%20appliance%20repair%20assistance."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            <MessageSquare size={16} />
            <span>WhatsApp</span>
          </a>
          <Link
            to="/book-repair"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm"
          >
            Book a Repair
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <NavLink to="/" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 font-medium border-b border-gray-100">Home</NavLink>
          <NavLink to="/tv-repair" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 font-medium border-b border-gray-100">TV Repair</NavLink>
          <NavLink to="/services" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 font-medium border-b border-gray-100">Services</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 font-medium border-b border-gray-100">About Us</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 font-medium border-b border-gray-100">Contact</NavLink>
          <div className="pt-2 flex flex-col gap-2">
            <Link to="/book-repair" onClick={() => setIsOpen(false)} className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium">Book a Repair</Link>
            <a href="https://wa.me/9198113 56807‬" target="_blank" rel="noopener noreferrer" className="w-full text-center flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-lg font-medium">
              <MessageSquare size={16} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}