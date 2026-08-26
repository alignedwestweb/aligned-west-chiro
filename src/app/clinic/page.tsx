'use client';

import { useState } from 'react';
import { Clock, MapPin, Phone, Info, Car, ExternalLink, Map as MapIcon } from 'lucide-react';
import Image from 'next/image';

// Note: In Next.js App Router, if you use 'use client', metadata must be exported 
// from a parent server layout or page wrapper, OR you can keep this as a server component 
// and wrap just the map in a separate client component. 
// Here is the clean client-component structure:

export default function ClinicInfoPage() {
  const [showMap, setShowMap] = useState(false);

  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=3355+N+University+Ave+%23175+Provo+UT+84604";

  return (
    <main className="bg-clinic-off-white min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-clinic-dark mb-4">Clinic Information</h1>
          <div className="h-1 w-20 bg-clinic-gold mx-auto mb-6" aria-hidden="true"></div>
          <p className="text-clinic-gray">Everything you need to know for your visit to AlignedWest.</p>
        </header>

        <section className="text-center bg-clinic-yellow border-l-4 border-clinic-gold p-6 mb-20 my-8 rounded shadow-sm" aria-labelledby="move-notice-heading">
          <h2 id="move-notice-heading" className="text-xl font-bold text-clinic-dark mb-4">Move Notice</h2>
          <p className="text-clinic-dark mb-4">
            AlignedWest Chiropractic has moved to a new professional space in Provo. 
            As of July 6, 2026, all appointments will be held at:
          </p>
          
          <div className="font-bold text-clinic-dark mb-4">
            <p>AlignedWest Chiropractic</p>
            <p>3355 North University Ave., Suite 175</p>
            <p>Provo, Utah 84604</p>
          </div>
          
          <p className="text-clinic-dark italic">
            Please use the new address for appointments scheduled on or after July 6, 2026. 
          </p>
          <p className="text-clinic-dark italic">If you have any questions before your visit, feel free to reach out.</p>
        </section>

        {/* Image */}
        <div className="relative aspect-[5/3] w-full max-w-2xl mb-16 mx-auto">
          <Image 
            src="/assets/images/walker1.jpeg" 
            alt="AlignedWest Chiropractic Clinic Front" 
            fill 
            className="object-cover object-center rounded-sm shadow-sm border border-slate-200/50"
            priority
          />
        </div>

        {/* Core Details Grid */}
        <section aria-label="Clinic Details" className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Hours Card */}
          <div className="bg-white p-8 shadow-sm border border-slate-200/50 flex flex-col items-center text-center">
            <Clock className="text-clinic-gold mb-4" size={32} aria-hidden="true" />
            <h2 className="text-xl font-serif text-clinic-dark mb-4">Hours of Operation</h2>
            <p className="text-clinic-dark font-medium">Monday 10:00 AM – 7:00 PM</p>
            <p className="text-clinic-dark font-medium">Tuesday 10:00 AM – 5:00 PM</p>
            <p className="text-clinic-dark font-medium">Wednesday 1:00 PM – 7:00 PM</p>
            <p className="text-clinic-dark font-medium">Thursday 11:00 AM – 6:00 PM</p>
            <p className="text-clinic-dark font-medium">Friday 8:00 AM – 4:00 PM</p>
            <p className="text-clinic-gray text-sm mt-2">Closed on weekends</p>
          </div>

          {/* Address Card */}
          <div className="bg-white p-8 shadow-sm border border-slate-200/50 flex flex-col items-center text-center">
            <MapPin className="text-clinic-gold mb-4" size={32} aria-hidden="true" />
            <h2 className="text-xl font-serif text-clinic-dark mb-4">Location</h2>
            <p className="text-clinic-gray text-sm">Jamestown Square</p>
            <p className="text-clinic-dark font-medium">3355 North University Ave., Suite 175</p>
            <p className="text-clinic-dark font-medium">Provo, Utah 84604</p>
          </div>

          {/* Contact Card */}
          <div className="bg-white p-8 shadow-sm border border-slate-200/50 flex flex-col items-center text-center">
            <Phone className="text-clinic-gold mb-4" size={32} aria-hidden="true" />
            <h2 className="text-xl font-serif text-clinic-dark mb-4">Contact</h2>
            <p className="text-clinic-gray text-sm">Phone</p>
            <p className="text-clinic-dark font-medium">(801) 658-9185</p>
            <p className="text-clinic-gray text-sm mt-2">Email</p>
            <p className="text-clinic-dark font-medium">connect@alignedwest.com</p>
          </div>
        </section>

        {/* Secondary Info Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Important Info Card */}
          <section className="bg-clinic-navy text-white p-10 shadow-lg rounded-sm" aria-labelledby="important-info-heading">
            <div className="flex items-center mb-6">
              <Info className="text-clinic-gold mr-3" size={28} aria-hidden="true" />
              <h2 id="important-info-heading" className="text-2xl font-serif">Important Info</h2>
            </div>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li className="flex items-start">
                <span className="text-clinic-gold mr-2" aria-hidden="true">•</span>
                15 min are added to new patient appointments
              </li>
              <li className="flex items-start">
                <span className="text-clinic-gold mr-2" aria-hidden="true">•</span>
                Hydrate before and after to aid recovery
              </li>
              <li className="flex items-start">
                <span className="text-clinic-gold mr-2" aria-hidden="true">•</span>
                Wear comfortable clothing
              </li>
              <li className="flex items-start">
                <span className="text-clinic-gold mr-2" aria-hidden="true">•</span>
                Share any relevant health concerns beforehand
              </li>
            </ul>
          </section>

          {/* Parking Information Card */}
          <section className="bg-white p-10 shadow-sm border border-slate-200/50 rounded-sm" aria-labelledby="parking-info-heading">
            <div className="flex items-center mb-6">
              <Car className="text-clinic-gold mr-3" size={28} aria-hidden="true" />
              <h2 id="parking-info-heading" className="text-2xl font-serif text-clinic-dark">Parking Information</h2>
            </div>
            <div className="space-y-4 text-clinic-gray text-sm leading-relaxed">
              <p className="font-medium text-clinic-dark">Free parking available</p>
              <p>Accessible parking spaces available near both entrances</p>
              
              {/* Optimized Map Container (Prevents 3rd party cookies & hydration errors on load) */}
              <div className="mt-6 w-full h-48 bg-slate-100 border border-slate-200 overflow-hidden shadow-sm rounded-sm relative flex flex-col items-center justify-center text-center p-4">
                {showMap ? (
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6087.667780534875!2d-111.65855537354128!3d40.27944000551334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d907c09430413%3A0xb691ffa7ddee5518!2s3355%20N%20University%20Ave%20%23175%2C%20Provo%2C%20UT%2084604!5e0!3m2!1sen!2sus!4v1782562258790!5m2!1sen!2sus"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="AlignedWest Chiropractic Location Map"
                    className="absolute inset-0"
                  ></iframe>
                ) : (
                  <div className="flex flex-col items-center justify-center space-y-3 z-10">
                    <MapIcon className="text-clinic-gold" size={32} aria-hidden="true" />
                    <p className="text-xs text-clinic-dark font-medium">Jamestown Square • Provo, UT</p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setShowMap(true)}
                        className="px-3 py-1.5 bg-clinic-navy text-white text-xs font-medium rounded shadow-sm hover:bg-opacity-90 transition"
                      >
                        Load Interactive Map
                      </button>
                      <a 
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-clinic-gold text-clinic-dark text-xs font-medium rounded shadow-sm hover:bg-opacity-90 transition flex items-center"
                      >
                        Open in Maps <ExternalLink size={12} className="ml-1" />
                      </a>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </section>
        </div>

      </div>
    </main>
  );
}