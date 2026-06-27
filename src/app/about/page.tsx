import Image from 'next/image';

export default function AboutPage() {
  return (
    <section className="bg-clinic-off-white py-24 px-4 flex-grow">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-clinic-dark text-3xl md:text-4xl font-serif mb-4">
            Ancient Wisdom Meets Modern Wellness
          </h2>
          <div className="h-1 w-20 bg-clinic-gold mx-auto"></div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-serif mb-3 text-clinic-dark">
            Welcome to AlignedWest Chiropractic, where ancient healing traditions intersect with modern chiropractic techniques.
          </h3>
        </div>

        {/* Grid Container */}
        <div className="grid md:grid-cols-2 gap-8 items-start mb-16">
          
          {/* Left Column: Image Container */}
          <div className="space-y-6">
            <div className="relative w-full">
              <Image
                src="/assets/images/headshot-1.JPG"
                alt="Dr. Sorensen headshot"
                width={500}
                height={500}
                className="w-full h-148.5 object-cover object-[center_30%] rounded-sm shadow-sm border border-slate-200/50"
                priority
              />
            </div>
            <div>
              <p className="text-clinic-gray text-sm leading-relaxed">
                Guiding you toward balance and renewal through compassionate, integrative chiropractic care.
              </p>
            </div>
          </div>

          {/* Right Column: Text Container */}
          <div className="space-y-6">
            {/* Meet Dr. Weston Sorenson section */}
            <div className="rounded-lg border border-slate-300/40 flex flex-col bg-white p-8 shadow-sm">
              <h4 className="text-xl font-serif text-clinic-dark mb-4">Meet Dr. Weston Sorenson</h4>
              <p className="text-clinic-gray text-sm leading-relaxed">
                I&apos;m Dr. Weston Sorenson, a chiropractic physician devoted to holistic health and the art of alignment. I believe true wellness is found in harmony—between the physical, emotional, and spiritual—and I&apos;m here to guide you on that path.
              </p>
            </div>

            {/* My Journey and Philosophy section */}
            <div className="rounded-lg border border-slate-300/40 flex flex-col bg-white p-8 shadow-sm">
              <h4 className="text-xl font-serif text-clinic-dark mb-4">My Journey and Philosophy</h4>
              <p className="text-clinic-gray text-sm leading-relaxed">
                With over fifteen years as a licensed massage therapist, a decade of teaching massage therapy, and certification as a Reiki Master, I bring a deep and diverse foundation in wellness to my chiropractic practice.
              </p>
              <p className="text-clinic-gray text-sm leading-relaxed mt-4">
                My path began with a lifelong curiosity about the body&apos;s wisdom and its remarkable capacity for healing. AlignedWest Chiropractic is the culmination of that journey—a space for integrative, patient-centered care that combines chiropractic adjustments, energy healing, and advanced techniques including Sacral Occipital Technique (SOT), Activator Methods, and Nambudripad&apos;s Allergy Elimination Technique (NAET).
              </p>
              <p className="text-clinic-gray text-sm leading-relaxed mt-4">
                At the heart of AlignedWest lies the symbolism of the West—a place of balance, renewal, and transformation—reflecting both my name and my commitment to personalized, compassionate care.
              </p>
            </div>
          </div> {/* End Right Column */}
        </div> {/* End Grid */}

        {/* Why Choose Section */}
    <section className="bg-white py-24 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-clinic-dark mb-6">
            Why Choose AlignedWest Chiropractic
          </h2>
          <div className="h-1 w-20 bg-clinic-gold mx-auto"></div>
        </div>

        {/* Content */}
        <div className="space-y-8 text-center">
          <p className="text-lg md:text-xl text-clinic-gray leading-relaxed italic font-serif">
            AlignedWest Chiropractic offers more than adjustments; it is a space for transformation.
          </p>
          
          <div className="space-y-6 text-clinic-gray leading-relaxed max-w-3xl mx-auto">
            <p>
              My holistic approach focuses on removing barriers to your body&apos;s natural ability to heal, 
              fostering alignment in your body, mind, and spirit. Whether through reiki, acupressure, 
              reflexology, or chiropractic techniques, I&apos;m here to provide compassionate, expert care 
              tailored to you.
            </p>
            
            <p className="text-clinic-dark font-medium">
              Join me at AlignedWest Chiropractic and take that first step towards balance, vitality, 
              and lasting wellness. Together we&apos;ll align your health with your highest potential.
            </p>
          </div>

          {/* Optional Brand Icon/Graphic */}
          <div className="pt-8 opacity-40">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-clinic-gold to-transparent"></div>
          </div>
        </div>
      </div>
    </section>

      </div> {/* End Max-W Container */}
    </section>
  );
}