import Image from 'next/image';
import BookNow from '@/components/Shared/BookNow';

export default function NaetPage() {
  return (
    <article className="bg-clinic-off-white min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-sm border border-slate-200/50 rounded-sm overflow-hidden">
        
        {/* HERO IMAGE */}
        <div className="relative w-full h-[400px]">
          <Image 
            src="/assets/images/NAET-vial-kit-1.jpg" 
            fill 
            className="object-cover" 
            alt="NAET Therapy" 
            priority
          />
        </div>

        <div className="p-8 md:p-12">
          <h1 className="text-4xl font-serif text-clinic-dark mb-6">NAET Treatments</h1>
          <div className="h-1 w-20 bg-clinic-gold mb-8"></div>

          {/* CONTENT SECTION */}
          <section className="prose prose-slate max-w-none text-clinic-gray leading-relaxed space-y-6">
            <p className="text-lg text-clinic-dark font-medium">
              Address allergies and sensitivities with Nambudripad&apos;s Allergy Elimination Techniques (NAET).
            </p>
            <p>
              NAET is a non-invasive, drug-free solution for those struggling with environmental, food, and chemical sensitivities. This holistic approach operates on the principle that allergies are essentially energy blockages in the body.
            </p>
            <p>
              By combining chiropractic principles, acupressure, and nutritional awareness, NAET works to &quot;reprogram&quot; the nervous system so it no longer views specific substances as threats. This balances the body&apos;s reaction, promoting a state of internal harmony.
            </p>
            
            <h3 className="text-2xl font-serif text-clinic-dark mt-8">What to Expect</h3>
            <p>
              A 30-minute NAET session involves muscle testing (kinesiology) to identify sensitivities, followed by a specific sequence of acupressure along the spine. After the treatment, there is a short 20-minute period of quiet relaxation in the clinic to allow the body to integrate the new energy pattern.
            </p>
          </section>

          {/* CENTRALIZED BOOKING BUTTON 
              We move this OUTSIDE the prose section to avoid layout conflicts.
          */}
          <div className="mt-12 flex justify-center w-full py-8">
            <BookNow 
              className="bg-clinic-yellow text-clinic-dark px-12 py-5 rounded-none uppercase tracking-widest text-sm font-bold hover:bg-clinic-gold transition-all shadow-md"
            >
              Book NAET Treatment
            </BookNow>
          </div>

        </div>
      </div>
    </article>
  );
}