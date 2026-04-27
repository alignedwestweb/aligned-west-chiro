import Link from 'next/link';
import Image from 'next/image';
import BookNow from '@/components/Shared/BookNow';

export default function SoulAlignmentPage() {

  return (
    <article className="bg-clinic-off-white min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-sm border border-slate-200/50 rounded-sm overflow-hidden">
        
        {/* HERO IMAGE */}
        <div className="relative w-full h-[400px]">
          <Image 
            src="/assets/images/imgServicesSoul.jpg" 
            fill 
            className="object-cover" 
            alt="Soul Alignment Session" 
            priority
          />
        </div>

        <div className="p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-serif text-clinic-dark mb-6">What Is a Soul Alignment Session?</h1>
          <div className="h-1 w-20 bg-clinic-gold mb-8"></div>

          <section className="prose prose-slate max-w-none text-clinic-gray leading-relaxed space-y-8">
            <div className="space-y-4">
              <p className="text-lg text-clinic-dark font-medium">
                A Soul Alignment Session is a deeply personalized, intuitive healing experience that blends gentle chiropractic alignment with energy work, muscle testing, breathwork, and emotional clearing.
              </p>
              <p>
                Rather than focusing on symptoms alone, this session is designed to listen to your body as a whole — physically, emotionally, and energetically — and support it in releasing what no longer serves you.
              </p>
              <p className="italic text-clinic-gold">
                Each session is unique. Your body leads the way.
              </p>
            </div>

            <hr className="border-slate-100" />

            <div>
              <h3 className="text-2xl font-serif text-clinic-dark mb-4">What Happens During a Session</h3>
              <p className="mb-4">
                Your session begins with a calm, supportive check-in to understand what you’re experiencing — whether that’s physical discomfort, emotional overwhelm, fatigue, or a feeling of being disconnected from yourself.
              </p>
              <p>From there, we may work with:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Muscle testing:</strong> to identify imbalances or stored stress</li>
                <li><strong>Energy clearing:</strong> to release emotional or energetic blocks</li>
                <li><strong>Breathwork:</strong> to calm the nervous system and support integration</li>
                <li><strong>Gentle chiropractic alignment:</strong> to restore balance and flow</li>
              </ul>
              <p className="mt-4">
                Everything is done at a pace that feels safe, grounded, and respectful of your body.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-clinic-dark mb-4">Benefits of Soul Alignment</h3>
              <p className="mb-4">
                Many patients describe this session as both calming and clarifying. Benefits may include:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>A deep sense of relaxation and emotional release</li>
                <li>Reduced stress and nervous system tension</li>
                <li>Improved clarity, grounding, and emotional balance</li>
                <li>Relief from symptoms without a clear physical cause</li>
                <li>A stronger connection to your body’s inner signals and needs</li>
              </ul>
              <p className="mt-4">
                This session is especially supportive when traditional approaches haven’t fully addressed what you’re feeling.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-clinic-dark mb-4">Who This Session Is For</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Experiencing unexplained or recurring symptoms</li>
                <li>Feeling emotionally overwhelmed, burnt out, or stuck</li>
                <li>Recovering from stress, trauma, or life transitions</li>
                <li>Sensitive to energy or highly intuitive</li>
                <li>Simply craving a deeper, more holistic healing experience</li>
              </ul>
              <p className="mt-4 font-medium text-clinic-dark">
                You don’t need to know <span className="italic">what</span> is wrong — your body already does.
              </p>
            </div>

            <div className="bg-clinic-beige/30 p-8 rounded-sm border-l-4 border-clinic-gold">
              <h3 className="text-2xl font-serif text-clinic-dark mb-4">A Gentle, Supportive Approach</h3>
              <p>
                You will never be rushed, forced, or pushed beyond what feels comfortable. This work honors your autonomy, boundaries, and readiness. The goal is not to &quot;fix&quot; you — it’s to help your body remember how to regulate, release, and realign itself naturally.
              </p>
            </div>

            <div className="text-center pt-8 py-8">
              <h3 className="text-2xl font-serif text-clinic-dark mb-4">Reconnect With Yourself</h3>
              <p className="max-w-2xl mx-auto mb-8">
                A Soul Alignment Session offers space to slow down, listen inward, and reconnect with your body’s wisdom — so you can move forward feeling lighter, clearer, and more aligned.
              </p>
              
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