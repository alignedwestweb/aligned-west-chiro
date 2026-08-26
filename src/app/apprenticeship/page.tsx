import Image from 'next/image';
import Link from 'next/link';
import { Users, BookOpen, Award, CheckCircle } from 'lucide-react';

export default function ApprenticeshipPage() {
  return (
    <main className="bg-clinic-off-white min-h-screen">
      {/* 1. Hero Banner Section */}

      {/* 2. Page Header & Intro */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-clinic-dark mb-6">
            Massage Therapy Apprenticeship
          </h1>
          <div className="h-1 w-20 bg-clinic-gold mx-auto mb-10"></div>

          <div className="relative w-5/8 h-[60vh] md:h-[60vh] align-middle mx-auto mb-12 rounded-sm overflow-hidden">
            <Image
              src="/assets/images/pexels-aleksandra-pekala-736444-16246682.jpg"
              alt="Apprenticeship Program Banner"
              fill
              className="object-cover object-position-bottom"
              priority
            />
          </div>

          <div className="max-w-2xl mx-auto mb-10">
            <p className="text-clinic-gray text-lg leading-relaxed italic mb-4">
              Thank you for your interest in the Massage Therapy Apprenticeship offered through AlignedWest Chiropractic.
            </p>
            <p className="text-clinic-gray text-lg leading-relaxed">
              Below you will find a clear overview of the program, expectations, and opportunities available to you as a student apprentice.
            </p>
          </div>

          <Link 
            href="https://form.jotform.com/253270906369059"
            target="_blank"
            className="inline-block bg-clinic-navy text-white px-12 py-4 text-sm uppercase tracking-widest font-bold hover:bg-clinic-gold transition-all duration-300 shadow-md"
          >
            Apply Now
          </Link>
        </div>

        {/* 3. Program Value Propositions */}
        <section className="border-t border-slate-200 pt-16 mb-20">
          <h2 className="text-3xl font-serif text-clinic-dark mb-8 text-center">Why Choose Our Program?</h2>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-clinic-gray leading-relaxed">
              Our blended learning approach combines the best of in-person instruction with flexible online coursework.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-slate-200/60 shadow-sm rounded-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-clinic-off-white flex items-center justify-center rounded-full mb-6">
                <Users className="text-clinic-gold" size={24} />
              </div>
              <h3 className="text-xl font-serif text-clinic-dark mb-4">Small Cohort Learning</h3>
              <p className="text-clinic-gray text-sm leading-relaxed">
                Personalized attention with a maximum of 4 students per instructor, ensuring quality education and mentorship.
              </p>
            </div>

            <div className="bg-white p-8 border border-slate-200/60 shadow-sm rounded-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-clinic-off-white flex items-center justify-center rounded-full mb-6">
                <BookOpen className="text-clinic-gold" size={24} />
              </div>
              <h3 className="text-xl font-serif text-clinic-dark mb-4">Comprehensive Curriculum</h3>
              <p className="text-clinic-gray text-sm leading-relaxed">
                1,000+ hours of total learning covering 15 massage modalities and all required subjects.
              </p>
            </div>

            <div className="bg-white p-8 border border-slate-200/60 shadow-sm rounded-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-clinic-off-white flex items-center justify-center rounded-full mb-6">
                <Award className="text-clinic-gold" size={24} />
              </div>
              <h3 className="text-xl font-serif text-clinic-dark mb-4">MBLEx Preparation</h3>
              <p className="text-clinic-gray text-sm leading-relaxed">
                Focused exam prep with weekly quizzes and 3 full practice exams to ensure you&apos;re ready to pass.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Educational Model Section */}
        <section className="border-t border-slate-200 pt-16 mb-20">
          <h2 className="text-3xl font-serif text-clinic-dark mb-8 text-center">52 Week Blended Learning Program</h2>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-clinic-gray leading-relaxed">
              This apprenticeship follows a blended educational model designed for comprehensive skill mastery:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-slate-200/60 shadow-sm rounded-sm">
              <h3 className="text-xl font-serif text-clinic-dark mb-4 text-center">Structured Coursework</h3>
              <ul className="text-clinic-gray text-sm space-y-3">
                <li className="flex items-start"><CheckCircle className="text-clinic-gold mr-2 flex-shrink-0" size={16} /> 52 weeks of comprehensive curriculum</li>
                <li className="flex items-start"><CheckCircle className="text-clinic-gold mr-2 flex-shrink-0" size={16} /> 10-15 hours of learning per week</li>
                <li className="flex items-start"><CheckCircle className="text-clinic-gold mr-2 flex-shrink-0" size={16} /> Digital and downloadable materials</li>
              </ul>
            </div>

            <div className="bg-white p-8 border border-slate-200/60 shadow-sm rounded-sm">
              <h3 className="text-xl font-serif text-clinic-dark mb-4 text-center">Hands-On Training</h3>
              <ul className="text-clinic-gray text-sm space-y-3">
                <li className="flex items-start"><CheckCircle className="text-clinic-gold mr-2 flex-shrink-0" size={16} /> 2 days per week (Tue & Fri)</li>
                <li className="flex items-start"><CheckCircle className="text-clinic-gold mr-2 flex-shrink-0" size={16} /> 6-8 hours of in-person instruction</li>
                <li className="flex items-start"><CheckCircle className="text-clinic-gold mr-2 flex-shrink-0" size={16} /> Bi-monthly supervised clinics</li>
              </ul>
            </div>

            <div className="bg-white p-8 border border-slate-200/60 shadow-sm rounded-sm">
              <h3 className="text-xl font-serif text-clinic-dark mb-4 text-center">Exam Preparation</h3>
              <ul className="text-clinic-gray text-sm space-y-3">
                <li className="flex items-start"><CheckCircle className="text-clinic-gold mr-2 flex-shrink-0" size={16} /> Weekly 5-10 min knowledge checks</li>
                <li className="flex items-start"><CheckCircle className="text-clinic-gold mr-2 flex-shrink-0" size={16} /> Focused MBLEx readiness training</li>
                <li className="flex items-start"><CheckCircle className="text-clinic-gold mr-2 flex-shrink-0" size={16} /> 3 full MBLEx practice exams</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Modalities List */}
        <section className="border-t border-slate-200 pt-16 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-serif text-clinic-dark mb-6">
              Master Multiple Massage Techniques
            </h2>
            <p className="text-clinic-gray leading-relaxed">
              Gain expertise in a diverse range of massage modalities to serve your future clients&apos; unique needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8 max-w-3xl mx-auto bg-white p-10 shadow-sm border border-slate-200/60">
            {[
              "Swedish Massage", "Deep Tissue", "Prenatal Massage",
              "Trigger Point Therapy", "Thai Massage (Intro)", "Cupping Techniques",
              "Athlete Massage", "Craniosacral Therapy", "Acupressure",
              "Reflexology", "Foot Zoning (Intro)", "Chair Massage",
              "Hot Stone Massage", "Aromatherapy", "Lymphatic Massage (Intro)"
            ].map((modality) => (
              <div key={modality} className="flex items-center text-sm text-clinic-gray">
                <span className="w-1.5 h-1.5 bg-clinic-gold rounded-full mr-3 flex-shrink-0"></span>
                {modality}
              </div>
            ))}
          </div>
        </section>

        {/* 6. State Requirements vs Program Comparison */}
        <section className="border-t border-slate-200 pt-16 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-clinic-dark mb-6">
              What to Expect from the Program
            </h2>
            <div className="h-1 w-16 bg-clinic-gold mx-auto mb-6"></div>
            <p className="text-clinic-gray leading-relaxed">
              Our apprenticeship is structured to provide a balance of academic rigor and hands-on clinical practice. We exceed state requirements to ensure total career readiness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Anatomy & Physiology", desc: <><p>State: 125 hours</p><p className="font-bold text-clinic-dark">Program: 150 hours</p></> },
              { title: "Pathology", desc: <><p>State: 40 hours</p><p className="font-bold text-clinic-dark">Program: 40 hours</p></> },
              { title: "Massage Theory", desc: <><p>State: 125 hours</p><p className="font-bold text-clinic-dark">Program: 165 hours</p></> },
              { title: "Sanitation & Safety", desc: "Comprehensive training in universal precautions and hygiene standards." },
              { title: "Clinical Practice", desc: "Extensive hands-on experience with real clients in supervised settings." },
              { title: "Business & Ethics", desc: "Professional practices, client communication, and business fundamentals." },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 border border-slate-200/60 shadow-sm rounded-sm hover:border-clinic-gold/50 transition-colors duration-300">
                <h4 className="text-lg font-serif text-clinic-dark mb-3">{item.title}</h4>
                <div className="text-clinic-gray text-sm leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Cost & Responsibilities Section */}
        <section className="border-t border-slate-200 pt-16 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-clinic-dark mb-6">
              Cost & Monthly Overview
            </h2>
            <div className="h-1 w-16 bg-clinic-gold mx-auto mb-6"></div>
            <p className="text-clinic-gray leading-relaxed">
              Transparent pricing and clear expectations to help you plan your professional journey.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Monthly Tuition */}
            <div className="bg-white p-8 border border-slate-200/60 shadow-sm rounded-sm flex flex-col">
              <h3 className="text-lg font-serif text-clinic-dark mb-4">Monthly Tuition</h3>
              <div className="flex-grow">
                <ul className="text-clinic-gray text-sm space-y-2 mb-6">
                  <li>• All learning materials</li>
                  <li>• Oils, creams, and tools</li>
                  <li>• Equipment included</li>
                  <li>• No additional fees</li>
                </ul>
              </div>
              <p className="text-2xl font-serif text-clinic-gold mt-auto">$1,500<span className="text-xs uppercase tracking-widest text-clinic-gray ml-1">/mo</span></p>
            </div>

            {/* Card 2: Student Responsibilities */}
            <div className="bg-white p-8 border border-slate-200/60 shadow-sm rounded-sm flex flex-col">
              <h3 className="text-lg font-serif text-clinic-dark mb-4">Student Responsibilities</h3>
              <ul className="text-clinic-gray text-sm space-y-2">
                <li>• Provide personal massage sheets</li>
                <li>• Launder sheets independently</li>
                <li>• Maintain professionalism</li>
                <li>• Reliability and punctuality</li>
              </ul>
            </div>

            {/* Card 3: Earn While You Learn */}
            <div className="bg-white p-8 border border-slate-200/60 shadow-sm rounded-sm flex flex-col border-b-clinic-gold/30">
              <h3 className="text-lg font-serif text-clinic-dark mb-4">Earn While You Learn</h3>
              <p className="text-clinic-gray text-sm leading-relaxed mb-4">
                Apprentices earn a portion of every clinical session performed.
              </p>
              <p className="text-clinic-gray text-sm italic">
                Gain experience while supporting monthly tuition.
              </p>
            </div>

            {/* Card 4: Sign-On Deposit */}
            <div className="bg-clinic-navy p-8 border border-clinic-navy shadow-md rounded-sm flex flex-col text-white">
              <h3 className="text-lg font-serif mb-4">Sign-On Deposit</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Required to reserve your spot in the upcoming cohort.
              </p>
              <div className="mt-auto">
                <p className="text-2xl font-serif text-clinic-gold">$250</p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Earning Potential Section */}
        <section className="border-t border-slate-200 pt-16 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-clinic-dark mb-6">
              Earn Money While You Learn
            </h2>
            <div className="h-1 w-16 bg-clinic-gold mx-auto mb-6"></div>
            <p className="text-clinic-gray leading-relaxed">
              During the apprenticeship, you&apos;ll have the opportunity to earn income through supervised student massage sessions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1: Student Massage Sessions */}
            <div className="bg-white p-8 border border-slate-200/60 shadow-sm rounded-sm flex flex-col">
              <h3 className="text-xl font-serif text-clinic-dark mb-4">Student Sessions</h3>
              <div className="space-y-3 flex-grow">
                <div className="flex justify-between text-sm border-b border-slate-100 pb-2">
                  <span className="text-clinic-gray">Hours per week</span>
                  <span className="font-bold text-clinic-dark">20 hrs</span>
                </div>
                <div className="flex justify-between text-sm border-b border-slate-100 pb-2">
                  <span className="text-clinic-gray">Rate</span>
                  <span className="font-bold text-clinic-dark">$18 / hr</span>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-2xl font-serif text-clinic-dark">$1,200<span className="text-xs uppercase tracking-widest text-clinic-gray ml-1">/mo</span></p>
              </div>
            </div>

            {/* Card 2: Tips (Estimated) */}
            <div className="bg-white p-8 border border-slate-200/60 shadow-sm rounded-sm flex flex-col">
              <h3 className="text-xl font-serif text-clinic-dark mb-4">Tips (Estimated)</h3>
              <div className="space-y-3 flex-grow">
                <p className="text-sm text-clinic-gray leading-relaxed">
                  Based on an average of <span className="text-clinic-dark font-semibold">$10–$15</span> per massage in tips from clients.
                </p>
              </div>
              <div className="mt-8">
                <p className="text-2xl font-serif text-clinic-dark">$800<span className="text-xs uppercase tracking-widest text-clinic-gray ml-1">/mo</span></p>
              </div>
            </div>

            {/* Card 3: Total Earning Potential */}
            <div className="bg-white p-8 border-2 border-clinic-gold shadow-md rounded-sm flex flex-col relative overflow-hidden">
              {/* Subtle "Total" Tag */}
              <div className="absolute top-0 right-0 bg-clinic-gold text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                Potential
              </div>
              
              <h3 className="text-xl font-serif text-clinic-dark mb-4">Total Earning Potential*</h3>
              <p className="text-sm text-clinic-gray mb-6">
                Student sessions + tips
              </p>
              
              <div className="mt-auto">
                <p className="text-3xl font-serif text-clinic-gold">$2,000<span className="text-xs uppercase tracking-widest text-clinic-gray ml-1">/mo</span></p>
                <p className="text-[10px] text-clinic-gray leading-tight mt-4 italic">
                  *Figures are estimates and not a guarantee of income. Actual earnings depend on scheduled hours and client tips.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Final CTA Section */}
        <section className="border-t border-slate-200 pt-16 text-center">
          <h2 className="text-3xl font-serif text-clinic-dark mb-8">Begin Your Journey</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div>
              <p className="text-clinic-gold font-bold mb-2">All Materials Included</p>
              <p className="text-sm text-clinic-gray">Study materials, exam prep, and digital resources</p>
            </div>
            <div>
              <p className="text-clinic-gold font-bold mb-2">Flexible Schedule</p>
              <p className="text-sm text-clinic-gray">Balance learning with existing commitments</p>
            </div>
            <div>
              <p className="text-clinic-gold font-bold mb-2">Expert Instructors</p>
              <p className="text-sm text-clinic-gray">Learn from experienced, licensed therapists</p>
            </div>
          </div>
          
          <div className="bg-clinic-navy text-white p-12 rounded-sm shadow-lg">
            <h3 className="text-2xl font-serif mb-4">Ready to Start Your Journey?</h3>
            <p className="opacity-90 mb-8 max-w-xl mx-auto">
              Join our next cohort and begin your career as a certified massage therapist.
            </p>
            <Link 
              href="https://form.jotform.com/253270906369059"
              target="_blank"
              className="inline-block bg-white text-clinic-dark px-12 py-4 text-sm uppercase tracking-widest font-bold hover:bg-clinic-gold hover:text-white transition-all duration-300"
            >
              Apply Now
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}