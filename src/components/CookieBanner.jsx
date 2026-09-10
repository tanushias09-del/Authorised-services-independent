import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setShow(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie_consent', 'rejected');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white border-t border-gray-800 p-4 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs sm:text-sm text-gray-300 text-center md:text-left">
          We use cookies and similar technologies to improve website functionality and understand website usage. Read our{' '}
          <Link to="/privacy-policy" className="text-blue-400 underline hover:text-blue-300">Privacy Policy</Link>.
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button onClick={handleReject} className="px-4 py-2 text-xs font-medium bg-gray-800 hover:bg-gray-700 text-gray-300 rounded transition-colors">
            Reject/Manage Preferences
          </button>
          <button onClick={handleAccept} className="px-4 py-2 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}