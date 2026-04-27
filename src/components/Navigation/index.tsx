"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Added for manual redirection
import { NAV_LINKS } from './navLinks';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showMobileAlert, setShowMobileAlert] = useState(false);
  const router = useRouter();

  const securityMessage = "For patient security, you will be prompted to create an account in order to book.";

  // Handle the "Book Now" click specifically for mobile logic
  const handleMobileBookClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault(); // Stop the link from navigating immediately
    setShowMobileAlert(true); // Open our custom pop-up
  };

  const proceedToBooking = () => {
    const bookNowLink = NAV_LINKS.find(l => l.text === 'Book Now')?.href || '/';
    setShowMobileAlert(false);
    setMobileOpen(false);
    router.push(bookNowLink);
  };

  return (
    <nav className="bg-clinic-navy sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/assets/logo-contrast.svg"
            alt="AlignedWest Chiropractic Logo"
            width={180}
            height={50} 
            priority
            className="object-contain"
          />
        </Link>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((open) => !open)}
            className="space-y-1 p-2 rounded text-white focus:outline-none focus:ring-2 focus:ring-clinic-gold"
          >
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
          </button>
        </div>

        {/* DESKTOP MENU (Hover Tooltip) */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isBookNow = link.text === 'Book Now';

            return (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={`text-sm uppercase tracking-wider transition ${
                    isBookNow
                      ? 'bg-clinic-yellow text-clinic-dark px-5 py-2 hover:bg-clinic-gold'
                      : 'text-clinic-gray hover:text-clinic-gold'
                  }`}
                >
                  {link.text}
                </Link>

                {isBookNow && (
                  <div className="absolute top-full right-0 mt-3 hidden group-hover:block w-64 p-3 bg-clinic-dark text-white text-xs normal-case text-center rounded shadow-xl pointer-events-none z-50">
                    <div className="absolute bottom-full right-6 border-8 border-transparent border-b-clinic-dark"></div>
                    {securityMessage}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-clinic-navy border-t border-clinic-dark">
          <div className="flex flex-col px-4 py-6 gap-4">
            {NAV_LINKS.map((link) => {
              const isBookNow = link.text === 'Book Now';

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => isBookNow ? handleMobileBookClick(e, link.href) : setMobileOpen(false)}
                  className={`text-sm uppercase tracking-wider text-center ${
                    isBookNow
                      ? 'bg-clinic-yellow text-clinic-dark px-4 py-3 rounded font-bold'
                      : 'text-clinic-gray hover:text-clinic-gold py-2'
                  }`}
                >
                  {link.text}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* MOBILE POP-UP (MODAL) */}
      {showMobileAlert && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-6 bg-black/70 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full shadow-2xl animate-in fade-in zoom-in duration-200">
            <h3 className="text-clinic-dark font-bold text-lg mb-2">Booking Security</h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              {securityMessage}
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={proceedToBooking}
                className="bg-clinic-yellow text-clinic-dark font-bold py-3 rounded uppercase tracking-wider text-sm shadow-md active:scale-95 transition"
              >
                I Understand, Book Now
              </button>
              <button
                onClick={() => setShowMobileAlert(false)}
                className="text-gray-400 text-xs uppercase tracking-widest py-2"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}