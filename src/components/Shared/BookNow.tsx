"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Added fullWidth to the props
export default function BookNow({ 
  className = "", 
  children = "Book Now", 
  fullWidth = false 
}) {
  const [showMobileAlert, setShowMobileAlert] = useState(false);
  const router = useRouter();
  const bookingUrl = process.env.NEXT_PUBLIC_BOOK_NOW_LINK || '#';
  const securityMessage = "For patient security, you will be prompted to create an account in order to book.";

  const handleButtonClick = (e: React.MouseEvent) => {
    if (window.innerWidth < 768) {
      e.preventDefault();
      setShowMobileAlert(true);
    }
  };

  return (
    <>
      {/* The wrapper div now uses a template literal to toggle 'w-full'.
          We use 'inline-block' so that 'text-center' on parents still works.
      */}
      <div className={`relative group ${fullWidth ? 'w-full' : 'inline-block'}`}>
        <a 
          href={bookingUrl} 
          onClick={handleButtonClick} 
          className={`${className} ${fullWidth ? 'w-full block' : 'inline-block'} text-center`}
        >
          {children}
        </a>

        {/* Desktop Tooltip */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 hidden md:group-hover:block w-64 p-3 bg-clinic-dark text-white text-xs normal-case text-center rounded shadow-xl z-50 pointer-events-none">
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-8 border-transparent border-b-clinic-dark"></div>
          {securityMessage}
        </div>
      </div>

      {/* Mobile Modal (No changes needed here) */}
      {showMobileAlert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6 bg-black/70 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full shadow-2xl text-center">
            <h3 className="text-clinic-dark font-bold text-lg mb-2">Booking Security</h3>
            <p className="text-gray-600 text-sm mb-6">{securityMessage}</p>
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => router.push(bookingUrl)}
                className="bg-clinic-yellow text-clinic-dark font-bold py-3 rounded uppercase tracking-wider text-sm"
              >
                Continue to Booking
              </button>
              <button onClick={() => setShowMobileAlert(false)} className="text-gray-400 text-xs uppercase py-2">
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}