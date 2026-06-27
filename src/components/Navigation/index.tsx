"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component
import { NAV_LINKS } from './navLinks';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-clinic-navy sticky top-0 z-50">
      {/* ANNOUNCEMENT BAR */}
      <div className="bg-clinic-yellow text-clinic-dark text-center py-2 px-4 text-xs md:text-sm font-medium">
        AlignedWest Chiropractic is moving! Beginning July 6, 2026, appointments will be held at our new Provo location. 
        <Link href="/clinic" className="underline font-bold ml-2 hover:text-white transition">
          View New Location
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* LOGO REPLACEMENT */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/assets/logo-contrast.svg" // Path relative to the public folder
            alt="AlignedWest Chiropractic Logo"
            width={180}  // Adjust these dimensions to fit your nav height
            height={50} 
            priority     // Tells Next.js to load this immediately (LCP)
            className="object-contain"
          />
        </Link>

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

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm uppercase tracking-wider ${
                link.text === 'Book Now'
                  ? 'bg-clinic-yellow text-clinic-dark px-5 py-2 hover:bg-clinic-gold transition'
                  : 'text-clinic-gray hover:text-clinic-gold'
              }`}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-clinic-navy border-t border-clinic-dark">
          <div className="flex flex-col px-4 py-4 gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm uppercase tracking-wider ${
                  link.text === 'Book Now'
                    ? 'bg-clinic-dark text-white px-4 py-2 rounded transition'
                    : 'text-clinic-gray hover:text-clinic-gold transition'
                }`}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}