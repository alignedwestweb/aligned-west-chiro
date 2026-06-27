import Link from 'next/link';
import BookNow from '@/components/Shared/BookNow';

const SERVICES = [
  {
    title: 'Chiropractic Adjustments',
    duration: '15 min session',
    description: "Restore alignment and alleviate discomfort with personalized chiropractic adjustments. Using precise techniques, we target misalignments to improve mobility, reduce pain, and support your body's natural healing processes.",
    href: '/services/chiropractic',
  },
  {
    title: 'NAET Treatments',
    duration: '30 min session',
    description: "Address allergies and sensitivities with Nambudripad's Allergy Elimination Techniques (NAET). This holistic approach combines chiropractic principles, acupuncture/acupressure, and nutrition to desensitize and balance your body's reaction to allergens.",
    href: '/services/naet',
  },
  {
    title: 'Soul Alignment Session',
    duration: '60 min session',
    description: "A transformative session blending intuitive healing, muscle testing, energy clearing, breathwork, and gentle chiropractic alignment. Designed to release stress, rebalance your energy, and reconnect you with your body's inner wisdom.",
    href: '/services/soul-alignment',
  },
  {
    title: 'Apprentice Massage Sessions',
    duration: '50 min sessions',
    description: "Experience therapeutic massage at a reduced rate while supporting the next generation of skilled bodywork practitioners. Sessions focus on tension relief, relaxation, and foundational therapeutic techniques, all performed in a professional, supervised clinical environment.",
    href: '/services/apprentice-massage',
  },
];

export default function ServicesPage() {
  return (
    <section className="bg-clinic-off-white py-24 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-clinic-dark mb-4">Our Services</h1>
          <div className="h-1 w-20 bg-clinic-gold mx-auto mb-6"></div>
          <p className="text-clinic-gray max-w-2xl mx-auto">
            Experience tailored care designed to optimize your health and well-being through integrative, holistic techniques.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SERVICES.map((service) => (
            <div key={service.title} className="bg-white border border-slate-200 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
              {/* Top Content Area */}
              <div className="p-8 flex-grow">
                <h3 className="text-xl font-serif text-clinic-dark mb-2 leading-tight">{service.title}</h3>
                <p className="text-clinic-gold text-sm font-bold uppercase tracking-wider mb-4">{service.duration}</p>
                <p className="text-clinic-gray leading-relaxed text-sm">{service.description}</p>
              </div>
              
              {/* Bottom Action Area */}
              <div className="px-8 pb-8 space-y-3">
                
                {/* Added fullWidth={true} to ensure the button fills the card width.
                  The logic inside BookNow.tsx will handle the tooltip centering 
                  relative to this full-width button.
                */}
                <BookNow 
                  fullWidth={true}
                  className="bg-clinic-yellow text-clinic-dark py-3 text-xs uppercase tracking-widest font-bold hover:bg-clinic-gold transition-colors shadow-sm"
                >
                  Book Now
                </BookNow>

                <Link 
                  href={service.href} 
                  className="block text-center bg-clinic-navy text-white py-3 text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-opacity"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}