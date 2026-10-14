import Link from 'next/link';
import Image from 'next/image';
import BookNow from '@/components/Shared/BookNow';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Provo Chiropractor | AlignedWest Chiropractic',
  description: 'Personalized chiropractic care in Provo, Utah, with NAET, apprentice massage, and whole-person wellness services at AlignedWest Chiropractic.',
  alternates: {
    canonical: 'https://www.alignedwest.com/',
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        
        {/* Two-Column Layout: Photo on left, Content on right */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Left Column: Image Container */}
          <div className="relative w-full"> 
            <Image
              src="/assets/images/AlignedWestMockUp.png"
              alt="Dr. Sorenson headshot"
              width={500}
              height={500}
              className="w-full h-auto object-cover rounded-sm shadow-sm border border-slate-200/50"
              priority
            />
          </div>

          {/* Right Column: Text and Action Buttons */}
          <div className="flex flex-col space-y-6 text-center items-center">
            <h1 className="text-4xl font-serif text-clinic-dark tracking-tight">
              Experience Healing, Reimagined.
            </h1>

            <h2 className="text-xl font-serif text-clinic-gold">
              Personalized chiropractic care blending mind, body, and soul for holistic wellness.
            </h2>

            <p className="text-clinic-gray text-base leading-relaxed text-center">
              At AlignedWest Chiropractic, we provide compassionate, results driven care that addresses the root cause of your pain. Discover how our unique approach can help you achieve balance and vitality.
            </p>

            <div className="flex flex-col gap-4 pt-2 w-full max-w-md mx-auto">
              <Link 
                href="/services" 
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-[#C2A16A] text-[#0A1128] font-bold text-xs uppercase tracking-widest rounded-sm shadow-sm hover:opacity-90 transition-opacity"
              >
                Learn More
              </Link>

              <h2 className="text-xl font-serif text-clinic-dark pt-1">
                Ready to book?
              </h2>

              <BookNow
                fullWidth
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-[#C2A16A] text-[#0A1128] font-bold text-xs uppercase tracking-widest rounded-sm shadow-sm hover:opacity-90 transition-opacity"
              >
                Book Now
              </BookNow>
            </div>
          </div>

        </div>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          
          {/* Services Card */}
          <div className="bg-white p-10 shadow-sm border border-slate-200/50 flex flex-col items-center text-center group">
            <h3 className="text-xl font-serif mb-4 text-clinic-dark">Holistic Treatments</h3>
            <p className="text-clinic-gray text-sm leading-relaxed mb-6">
              From precise chiropractic adjustments to NAET allergy elimination techniques.
            </p>
            <Link href="/services" className="text-clinic-gold uppercase tracking-widest text-xs font-bold group-hover:underline">
              Explore Services
            </Link>
          </div>

          {/* Apprenticeship Card */}
          <div className="bg-white p-10 shadow-sm border border-slate-200/50 flex flex-col items-center text-center group">
            <h3 className="text-xl font-serif mb-4 text-clinic-dark">Apprenticeship</h3>
            <p className="text-clinic-gray text-sm leading-relaxed mb-6">
              A transformative program for aspiring healers to master the art of soul alignment.
            </p>
            <Link href="/apprenticeship" className="text-clinic-gold uppercase tracking-widest text-xs font-bold group-hover:underline">
              Learn More
            </Link>
          </div>

          {/* Clinic Info Card */}
          <div className="bg-white p-10 shadow-sm border border-slate-200/50 flex flex-col items-center text-center group">
            <h3 className="text-xl font-serif mb-4 text-clinic-dark">Visit the Clinic</h3>
            <p className="text-clinic-gray text-sm leading-relaxed mb-6">
              Located in the heart of Provo. View our hours, location, and what to expect.
            </p>
            <Link href="/clinic" className="text-clinic-gold uppercase tracking-widest text-xs font-bold group-hover:underline">
              Find Us
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}