import Link from 'next/link';
import Image from 'next/image';
import BookNow from '@/components/Shared/BookNow';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. TOP SECTION: Navy Blue (The "Hero") */}
      <section className="bg-clinic-navy text-white py-20 lg:py-32 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
            Experience Healing, <br className="hidden md:block" /> Reimagined
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-slate-300 font-light mb-10">
            Personalized chiropractic care blending mind, body, and soul for holistic wellness in Orem, Utah.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <BookNow 
              className="bg-clinic-yellow text-clinic-dark px-10 py-4 rounded-none uppercase tracking-widest text-sm hover:bg-opacity-90 transition inline-block"
            >
              Book Now
            </BookNow>
            <Link 
              href="/about" 
              className="border border-white/30 text-white px-10 py-4 rounded-none uppercase tracking-widest text-sm hover:bg-white hover:text-clinic-navy transition"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* 2. MIDDLE SECTION: Off-White Paper (The "Home under Home") */}
      <section className="bg-clinic-off-white py-24 px-4 flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-clinic-dark text-3xl md:text-4xl font-serif mb-4">Your Wellness Guide</h2>
          <div className="h-1 w-20 bg-clinic-gold mx-auto"></div>
        </div>

        <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-serif mb-3 text-clinic-dark">
          Meet Dr. Weston Sorensen
        </h3>
        <p className="text-clinic-gray text-base md:text-lg max-w-3xl mx-auto">
          Guiding you toward balance and renewal through compassionate, integrative chiropractic care.
        </p>
        </div>

        {/* Grid starts here: The two-column layout */}
        <div className="grid md:grid-cols-2 gap-8 items-start mb-16">

        {/* Left Column: Image Container (Stays on the left) */}
        <div className="space-y-6">
          <div className="relative w-full"> 
            <Image
              src="/assets/images/headshot-1.JPG"
              alt="Dr. Sorensen headshot"
              width={500}
              height={500}
              className="w-full h-auto object-cover rounded-sm shadow-sm border border-slate-200/50"
              priority
            />
          </div>
          {/* (Optional text section below the image, currently empty/hidden) */}
          <div>
            <h4 className="text-xl font-serif text-clinic-dark mb-2"></h4>
            <p className="text-clinic-gray text-sm leading-relaxed">
              Guiding you toward balance and renewal through compassionate, integrative chiropractic care.
            </p>
          </div>
        </div>

        {/* Right Column: Text Container (New wrapper starts here) */}
        {/* We add 'space-y-6' to ensure consistent spacing between these stacked boxes */}
        <div className="space-y-6">
          
          {/* A Sacred Partnership... section */}
          <div className="rounded-lg border border-slate-300/40 flex flex-col bg-white p-8 shadow-sm">
            <h4 className="text-xl font-serif text-clinic-dark mb-4">A Sacred Partnership in Healing</h4>
            <p className="text-clinic-gray text-sm leading-relaxed">
              For more than fifteen years, Dr. Weston Sorenson has supported thousands on their path to wellness—integrating ancient healing practices with modern chiropractic techniques to honor the body’s innate capacity to restore itself.
            </p>
            <p className="text-clinic-gray text-sm leading-relaxed">
              His approach goes beyond traditional care, addressing the whole person--body, mind, and spirit. Each session becomes a collaborative, intentional space where your system can realign, release, and return to its natural state of balance.
            </p>
          </div>

          {/* Credentials section */}
          <div className="rounded-lg border border-slate-300/40 flex flex-col bg-white p-8 shadow-sm">
            <h4 className="text-xl font-serif text-clinic-dark mb-4">
              Credentials and Continung Journey
            </h4>
            
            {/* The list container is now a 2-column grid */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {/* I removed individual 'mt-4' from items; the parent grid 'gap-y' manages the spacing */}
              <p className="text-clinic-gray text-sm leading-relaxed">
                Doctor of Chiropractic (D.C.)
              </p>
              <p className="text-clinic-gray text-sm leading-relaxed">
                Licensed Massage Therapist
              </p>
              <p className="text-clinic-gray text-sm leading-relaxed">
                Certified Wellness Practitioner
              </p>
              <p className="text-clinic-gray text-sm leading-relaxed">
                Mindful Movement Specialist
              </p>
              <p className="text-clinic-gray text-sm leading-relaxed">
                NAET Therapy Certification
              </p>
              <p className="text-clinic-gray text-sm leading-relaxed">
                Soul Alignment Guide
              </p>
            </div>
          </div>

          {/* Quote section */}
          <div className="rounded-lg border border-slate-300/40 flex flex-col bg-white p-8 shadow-sm">
            <p className="text-clinic-gray text-sm leading-relaxed mt-4">
              &quot;True healing happens when we listen to the body’s innate wisdom and find balance in our physical, emotional, and spiritual well-being. My role is to be a guide—helping remove the barriers that hinder your body’s natural ability to heal so you can align with your highest potential.&quot;
            </p>
            <p className="text-clinic-gray text-sm leading-relaxed mt-4">
              — Dr. Weston Sorenson
            </p>
          </div>

        </div> {/* Right Column Container ends here */}
        </div> {/* Grid ends here */}

          {/* Quick Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
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
                Located in the heart of Orem. View our hours, location, and what to expect.
              </p>
              <Link href="/clinic" className="text-clinic-gold uppercase tracking-widest text-xs font-bold group-hover:underline">
                Find Us
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER: This is actually in your layout.tsx, but I've ensured 
          it sits below the Off-White section perfectly. */}
    </div>
  );
}