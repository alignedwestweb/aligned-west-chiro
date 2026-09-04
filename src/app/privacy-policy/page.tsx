import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Privacy Policy | AlignedWest Chiropractic',
  description: 'Review the privacy policy and data practices for AlignedWest Chiropractic in Provo, Utah.',
  alternates: {
    canonical: 'https://www.alignedwest.com/privacy-policy',
  },
};

export default function PrivacyPolicy() {
    const effectiveDate = "September 3, 2026";
    const clinicEmail = "admin@alignedwest.com";
    const clinicPhone = "385-293-9393";
    const clinicName = "AlignedWest Chiropractic, LLC";
  
    return (
      <article className="bg-clinic-off-white min-h-screen py-24 px-4">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-16 border border-slate-200 shadow-sm rounded-sm">
          
          {/* Header */}
          <header className="mb-12 border-b border-slate-100 pb-8">
            <h1 className="text-4xl font-serif text-clinic-dark mb-4">Privacy Policy</h1>
            <p className="text-clinic-gold font-bold uppercase tracking-widest text-xs">
              Effective Date: {effectiveDate}
            </p>
          </header>
 
          {/* Body Content */}
          <div className="prose prose-slate max-w-none text-clinic-gray space-y-10 leading-relaxed">
            
            <section>
              <p>
                {clinicName} (&quot;AlignedWest,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy. This Privacy Policy explains how we collect, use, protect, and share information when you visit our website, use our online services, schedule appointments, or submit information through our online forms.
              </p>
            </section>
 
            {/* 1. Information We Collect */}
            <section>
              <h2 className="text-xl font-serif text-clinic-dark mb-4">1. Information We Collect</h2>
              <p className="mb-3">Depending on how you interact with AlignedWest, we may collect:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Name, email address, phone number, mailing address, and other contact information;</li>
                <li>Appointment, scheduling, and service information;</li>
                <li>Information you voluntarily provide through intake forms, health screening forms, consent forms, or other communications;</li>
                <li>Health-related information necessary to provide or coordinate services;</li>
                <li>Payment and transaction information. Payment card information may be processed directly by our payment-processing providers and may not be stored by AlignedWest;</li>
                <li>Communications and preferences, including appointment reminders and communication preferences; and</li>
                <li>Basic technical information associated with use of our website, such as browser or device information, IP address, and information collected through cookies or similar technologies when applicable.</li>
              </ul>
            </section>
 
            {/* 2. How We Use Information */}
            <section>
              <h2 className="text-xl font-serif text-clinic-dark mb-4">2. How We Use Information</h2>
              <p className="mb-3">We may use information to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Schedule, manage, and provide services;</li>
                <li>Communicate regarding appointments, forms, services, payments, or other administrative matters;</li>
                <li>Maintain appropriate business and patient records;</li>
                <li>Process payments and transactions;</li>
                <li>Respond to questions or requests;</li>
                <li>Send optional informational or promotional communications where permitted by law;</li>
                <li>Operate, maintain, secure, and improve our website and services; and</li>
                <li>Meet legal, regulatory, accounting, or other applicable obligations.</li>
              </ul>
              <p className="mt-4">
                You may opt out of promotional email communications using the unsubscribe option provided in those communications. Service-related or administrative communications may still be sent when necessary.
              </p>
            </section>
 
            {/* 3. Health Information and HIPAA */}
            <section>
              <h2 className="text-xl font-serif text-clinic-dark mb-4">3. Health Information and HIPAA</h2>
              <p className="mb-3">
                Certain information collected in connection with healthcare services provided by AlignedWest may constitute protected health information (&quot;PHI&quot;) and may be subject to the Health Insurance Portability and Accountability Act (&quot;HIPAA&quot;) and other applicable privacy laws.
              </p>
              <p className="mb-3">
                AlignedWest uses appropriate administrative, technical, and physical safeguards to protect health information as required by applicable law. Health information submitted through designated patient, scheduling, or intake systems is handled in accordance with applicable privacy and security requirements.
              </p>
              <p>
                Our use and disclosure of PHI may also be governed by AlignedWest Chiropractic’s Notice of Privacy Practices, which provides additional information regarding patients’ rights and our responsibilities concerning protected health information.
              </p>
            </section>
 
            {/* 4. Third-Party Service Providers */}
            <section>
              <h2 className="text-xl font-serif text-clinic-dark mb-4">4. Third-Party Service Providers</h2>
              <p className="mb-3">AlignedWest uses third-party service providers to help operate the practice and provide online services. These providers may assist with functions such as:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Appointment scheduling and patient management;</li>
                <li>Electronic forms and records;</li>
                <li>Payment processing;</li>
                <li>Email, text messaging, and other communications;</li>
                <li>Website hosting and maintenance; and</li>
                <li>Other administrative or business functions.</li>
              </ul>
              <p className="my-3">
                These providers may receive information necessary to perform services on our behalf. When required by applicable law, AlignedWest uses appropriate agreements and safeguards with service providers that handle protected health information.
              </p>
              <p className="font-medium text-clinic-dark">
                We do not sell protected health information.
              </p>
            </section>
 
            {/* 5. Cookies and Website Technology */}
            <section>
              <h2 className="text-xl font-serif text-clinic-dark mb-4">5. Cookies and Website Technology</h2>
              <p className="mb-3">
                Our website and service providers may use cookies or similar technologies for basic website functionality, security, performance, or to better understand how visitors interact with the website.
              </p>
              <p>
                Your browser may allow you to restrict or disable cookies. Doing so may affect the functionality of some website features.
              </p>
            </section>

            {/* 6. How We Share Information */}
            <section>
              <h2 className="text-xl font-serif text-clinic-dark mb-4">6. How We Share Information</h2>
              <p className="mb-3">We may share information when reasonably necessary:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>With service providers performing functions on our behalf;</li>
                <li>To provide or coordinate requested services;</li>
                <li>To process payments or transactions;</li>
                <li>When authorized or requested by you;</li>
                <li>To comply with applicable laws, regulations, legal processes, or governmental requirements; or</li>
                <li>To protect the rights, safety, security, or property of AlignedWest, our patients, clients, or others.</li>
              </ul>
              <p className="mt-4">
                Protected health information is used and disclosed in accordance with applicable law and AlignedWest’s Notice of Privacy Practices.
              </p>
            </section>

            {/* 7. Information Security */}
            <section>
              <h2 className="text-xl font-serif text-clinic-dark mb-4">7. Information Security</h2>
              <p className="mb-3">
                We take reasonable administrative, technical, and physical measures designed to protect personal information from unauthorized access, use, alteration, or disclosure.
              </p>
              <p>
                However, no website, electronic communication, or information-storage system can be guaranteed to be completely secure. Please use appropriate caution when transmitting information electronically.
              </p>
            </section>

            {/* 8. Your Choices and Privacy Rights */}
            <section>
              <h2 className="text-xl font-serif text-clinic-dark mb-4">8. Your Choices and Privacy Rights</h2>
              <p className="mb-3">
                You may contact AlignedWest to request that we update or correct certain personal information we maintain about you.
              </p>
              <p>
                If your information constitutes protected health information, additional rights may apply under HIPAA and other applicable laws. Please refer to AlignedWest Chiropractic’s Notice of Privacy Practices for information regarding those rights.
              </p>
            </section>

            {/* 9. External Websites */}
            <section>
              <h2 className="text-xl font-serif text-clinic-dark mb-4">9. External Websites</h2>
              <p>
                Our website may contain links to websites or services operated by third parties. AlignedWest is not responsible for the privacy practices or content of websites or services that we do not operate.
              </p>
            </section>

            {/* 10. Children’s Information */}
            <section>
              <h2 className="text-xl font-serif text-clinic-dark mb-4">10. Children’s Information</h2>
              <p>
                Our website is not directed toward children for independent use. Information concerning a minor may be collected when provided by a parent, legal guardian, or other authorized person in connection with services provided by AlignedWest.
              </p>
            </section>

            {/* 11. Changes to This Privacy Policy */}
            <section>
              <h2 className="text-xl font-serif text-clinic-dark mb-4">11. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy periodically to reflect changes in our practices, services, technology, or legal requirements. When we make changes, we will update the effective date shown at the top of this page.
              </p>
            </section>
 
            {/* 12. Contact Us */}
            <section className="bg-clinic-off-white p-6 rounded-sm border-l-4 border-clinic-gold">
              <h2 className="text-xl font-serif text-clinic-dark mb-4">12. Contact Us</h2>
              <p className="text-sm">If you have questions about this Privacy Policy or our privacy practices, please contact:</p>
              <address className="not-italic text-sm mt-3 space-y-1">
                <p className="font-bold">{clinicName}</p>
                <p>3355 North University Avenue, Suite 175, Provo, UT 84604</p>
                <p>Email: {clinicEmail}</p>
                <p>Phone: {clinicPhone}</p>
              </address>
            </section>
 
            <footer className="pt-12 border-t border-slate-100 text-center">
              <p className="text-sm font-serif text-clinic-dark italic">
                This Privacy Policy describes AlignedWest Chiropractic’s privacy practices relating to our website and online services.
              </p>
            </footer>
 
          </div>
        </div>
      </article>
    );
  }