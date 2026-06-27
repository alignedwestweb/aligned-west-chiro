export default function PrivacyPolicy() {
    const effectiveDate = "March 27, 2025";
    const clinicEmail = "connect@alignedwest.com";
    const clinicPhone = "(801) 658-9185";
  
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
                AlignedWest Chiropractic (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) values your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website (www.alignedwest.com) or provide information through our online forms.
              </p>
            </section>
  
            {/* 1. Information We Collect */}
            <section>
              <h2 className="text-xl font-serif text-clinic-dark mb-4">1. Information We Collect</h2>
              <p className="mb-3">We may collect the following types of personal information when you interact with our website or services:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Mailing address</li>
                <li>Health-related information (if provided through intake forms)</li>
              </ul>
            </section>
  
            {/* 2. How We Use Your Information */}
            <section>
              <h2 className="text-xl font-serif text-clinic-dark mb-4">2. How We Use Your Information</h2>
              <p className="mb-3">We use your information for the following purposes:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>To schedule and manage appointments</li>
                <li>To communicate with you regarding services, reminders, and updates</li>
                <li>To improve our website and services</li>
                <li>To comply with legal and regulatory requirements</li>
              </ul>
            </section>
  
            {/* 3. How We Protect Your Information */}
            <section>
              <h2 className="text-xl font-serif text-clinic-dark mb-4">3. How We Protect Your Information</h2>
              <p>
                We take appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Our website and intake forms are HIPAA-compliant to ensure your sensitive health information remains secure.
              </p>
            </section>
  
            {/* 4. Sharing Your Information */}
            <section>
              <h2 className="text-xl font-serif text-clinic-dark mb-4">4. Sharing Your Information</h2>
              <p className="mb-3">We do not sell or rent your personal information. We may share your data with third-party service providers only when necessary to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Process appointments and payments</li>
                <li>Provide customer support</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>
  
            {/* 5. Your Rights and Choices */}
            <section>
              <h2 className="text-xl font-serif text-clinic-dark mb-4">5. Your Rights and Choices</h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Request access to your personal data</li>
                <li>Request corrections or updates to your information</li>
                <li>Request deletion of your information (subject to legal and business record-keeping requirements)</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at <span className="text-clinic-dark font-medium">{clinicEmail}</span> or <span className="text-clinic-dark font-medium">{clinicPhone}</span>.
              </p>
            </section>
  
            {/* 6, 7, 8: Short Sections */}
            <section className="space-y-8">
              <div>
                <h2 className="text-xl font-serif text-clinic-dark mb-2">6. Cookies and Tracking Technologies</h2>
                <p>Our website may use cookies or similar technologies to enhance user experience. You can manage cookie preferences through your browser settings.</p>
              </div>
  
              <div>
                <h2 className="text-xl font-serif text-clinic-dark mb-2">7. Changes to This Policy</h2>
                <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>
              </div>
  
              <div className="bg-clinic-off-white p-6 rounded-sm border-l-4 border-clinic-gold">
                <h2 className="text-xl font-serif text-clinic-dark mb-4">8. Contact Us</h2>
                <p className="text-sm">If you have any questions about this Privacy Policy, please contact us at:</p>
                <address className="not-italic text-sm mt-3 space-y-1">
                  <p className="font-bold">AlignedWest Chiropractic</p>
                  <p>574 S State Street Suite 232, Orem, UT 84058</p>
                  <p>Email: {clinicEmail}</p>
                  <p>Phone: {clinicPhone}</p>
                </address>
              </div>
            </section>
  
            <footer className="pt-12 border-t border-slate-100 text-center">
              <p className="text-sm font-serif text-clinic-dark italic">
                By using our website, you agree to the terms of this Privacy Policy.
              </p>
            </footer>
  
          </div>
        </div>
      </article>
    );
  }