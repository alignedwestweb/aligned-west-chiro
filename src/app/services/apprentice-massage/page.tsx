import Link from 'next/link';
import Image from 'next/image';
import BookNow from '@/components/Shared/BookNow';

export default function ApprenticeMassagePage() {
  return (
    <main className="min-h-screen bg-clinic-off-white">
      {/* Page Header & Intro */}
      <section className="py-24 px-4 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-clinic-dark mb-6">
            Apprentice Massage Sessions
          </h1>
          <div className="h-1 w-20 bg-clinic-gold mx-auto mb-8"></div>
          <p className="text-clinic-gray text-lg leading-relaxed">
            Massage therapy is an essential part of restoring balance, relieving tension, and supporting the body’s natural healing process. As part of our Massage Apprenticeship Program at AlignedWest Chiropractic, select apprentices are actively training in a clinical setting under direct guidance to develop both skill and precision in therapeutic bodywork.
            Clients receiving apprentice sessions can expect thoughtful, intentional care using foundational techniques designed to reduce tension, improve circulation, and promote relaxation. Each session is performed with attention to comfort, communication, and individualized needs, creating a safe and supportive environment while also making high-quality massage more accessible.
          </p>
        </div>
      </section>

      {/* Apprentice Bios Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-clinic-off-white">
            
            {/* Apprentice 1: Text Left, Image Right */}
            <div className="p-10 md:p-16 flex flex-col justify-center bg-clinic-yellow">
              <span className="text-black font-bold uppercase tracking-widest text-sm mb-4">Massage Apprentice</span>
              <h2 className="text-3xl font-serif text-black mb-6">Ireland</h2>
              <p className="text-black mb-8 leading-relaxed">
                Ireland is a massage apprentice who focuses on intentional, client-centered bodywork. She incorporates techniques such as forearms, soft fist, knuckles, petrissage, and effleurage to effectively warm tissues and deliver personalized therapeutic work.
                She enjoys working with a wide range of clients, from first-time massage recipients to those seeking ongoing care, and values being part of each client’s journey toward relaxation and healing.
                Ireland’s approach is grounded in respect, attentiveness, and clear communication. She prioritizes creating a safe, supportive environment where clients feel heard and cared for throughout their session.
              </p>
            <BookNow 
              className="bg-clinic-dark text-white px-10 py-4 rounded-none uppercase tracking-widest text-sm hover:bg-opacity-90 transition inline-block"
            >
              Book with Ireland
            </BookNow>
            </div>
            <div className="relative h-[350px] md:h-auto bg-slate-200">
              <Image 
                src="/assets/images/Ireland.JPEG" 
                alt="Apprentice 1 Portrait"
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Apprentice 2: Image Left, Text Right */}
            {/* We use order classes to flip the visual position on desktop */}
            <div className="relative h-[350px] md:h-auto bg-slate-200 order-last md:order-none">
              <Image 
                src="/assets/images/Lauren.JPEG" 
                alt="Apprentice 2 Portrait"
                fill
                className="object-cover scale-100 object-top"
              />
            </div>
            <div className="p-10 md:p-16 flex flex-col justify-center bg-clinic-dark text-white">
              <span className="text-clinic-gold font-bold uppercase tracking-widest text-sm mb-4">Massage Apprentice</span>
              <h2 className="text-3xl font-serif mb-6 text-white">Lauren</h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Lauren is a massage apprentice with a strong focus on therapeutic, tension-relieving bodywork. She commonly incorporates soft fist, petrissage, and forearm techniques to warm tissues and deliver effective, deeper release.
                She is especially interested in helping individuals experiencing high stress or chronic tension, and she enjoys providing sessions that support both physical relief and overall relaxation.
                Lauren approaches massage as both a therapeutic and restorative experience. She aims to help clients step out of the demands of daily life and leave each session feeling more balanced, at ease, and reconnected in both body and mind.
                She is particularly skilled at locating areas of muscular tension and working them out with focused, intentional care.
              </p>
            <BookNow 
              className="bg-clinic-yellow text-clinic-dark px-10 py-4 rounded-none uppercase tracking-widest text-sm hover:bg-opacity-90 transition inline-block"
            >
              Book with Lauren
            </BookNow>
            </div>

          </div>
        </div>
      </section>

      {/* Footer Call to Action */}
      <section className="py-20 text-center">
        <Link href="/services" className="text-clinic-navy font-bold uppercase tracking-widest text-sm hover:underline">
          ← Back to All Services
        </Link>
      </section>
    </main>
  );
}