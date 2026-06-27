import Link from 'next/link';
import Image from 'next/image';
import BookNow from '@/components/Shared/BookNow';

export default function ChiropracticPage() {

  return (
    <article className="bg-clinic-off-white min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-sm border border-slate-200/50 rounded-sm overflow-hidden">
        
        {/* HERO IMAGE */}
        <div className="relative w-full h-[400px]">
          <Image 
            src="/assets/images/Gloria-adjust.jpeg" 
            fill 
            className="object-cover object-bottom" 
            alt="Chiropractic Care at AlignedWest" 
            priority
          />
        </div>

        <div className="p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-serif text-clinic-dark mb-6">Chiropractic Care</h1>
          <div className="h-1 w-20 bg-clinic-gold mb-8"></div>

          <section className="prose prose-slate max-w-none text-clinic-gray leading-relaxed space-y-8">
            <div className="space-y-4">
              <p className="text-xl text-clinic-dark font-serif italic">
                At AlignedWest, we believe that healing begins with alignment.
              </p>
              <p className="text-lg">
                Chiropractic care is more than just relief from back or neck pain—it’s a gentle, holistic way to restore balance, improve mobility, and support your body’s natural healing processes.
              </p>
              <p>
                Whether you’re managing chronic tension, recovering from injury, or simply wanting to feel your best, chiropractic adjustments can help you live a more aligned life.
              </p>
            </div>

            <hr className="border-slate-100" />

            <div>
              <h3 className="text-2xl font-serif text-clinic-dark mb-4">How Chiropractic Supports Your Wellness</h3>
              <p className="mb-6">
                I approach each adjustment with the intention to relieve discomfort, enhance function, and restore peace within the body. Here are a few ways chiropractic care can support you:
              </p>
              <ul className="space-y-4 list-none pl-0">
                <li className="flex gap-4">
                  <span className="text-clinic-gold font-bold">/</span>
                  <div>
                    <strong className="text-clinic-dark block">Nervous System Regulation</strong>
                    Adjustments reduce physical tension and promote balance in the nervous system, helping you feel calmer and sleep better.
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-clinic-gold font-bold">/</span>
                  <div>
                    <strong className="text-clinic-dark block">Improved Mobility</strong>
                    By restoring structural integrity, we help your joints move more freely and comfortably.
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-clinic-gold font-bold">/</span>
                  <div>
                    <strong className="text-clinic-dark block">Enhanced Energy</strong>
                    Removing stuck energy and physical blockages allows your body to function with less effort.
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-clinic-beige/20 p-8 rounded-sm">
              <h3 className="text-2xl font-serif text-clinic-dark mb-4">Natural Pain Relief & Whole-Body Benefits</h3>
              <p>
                From easing back and neck pain to improving energy, sleep, and digestion, chiropractic care addresses the root of discomfort—not just the symptoms. By focusing on the spine as the central highway of your nervous system, we ensure the communication between your brain and body is clear.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-clinic-dark mb-4">What to Expect on Your First Visit</h3>
              <p>
                Your first visit at AlignedWest Chiropractic includes a conversation about your health goals, a gentle evaluation, and an adjustment (if appropriate). 
              </p>
              <p className="mt-4 font-medium text-clinic-dark">
                You&apos;ll never be rushed, and treatments are tailored to your unique needs. I am here to help you feel safe, supported, and seen—every step of the way.
              </p>
            </div>

            <div className="text-center pt-10 py-8 border-t border-slate-100">
            <BookNow 
              className="bg-clinic-yellow text-clinic-dark px-10 py-4 rounded-none uppercase tracking-widest text-sm hover:bg-opacity-90 transition inline-block"
            >
              Book Now
            </BookNow>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}