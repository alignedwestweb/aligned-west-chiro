export default function AccessibilityStatement() {
    const clinicEmail = "connect@alignedwest.com";
    const clinicPhone = "801-658-9185";
    const clinicAddress = "3355 North University Ave., Suite 175, Provo UT, 84604";
  
    return (
      <article className="bg-clinic-off-white min-h-screen py-24 px-4">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-16 border border-slate-200 shadow-sm rounded-sm">
          
          {/* Header */}
          <header className="mb-10 border-b border-slate-100 pb-8">
            <h1 className="text-4xl font-serif text-clinic-dark mb-4">Accessibility Statement</h1>
            <div className="h-1 w-16 bg-clinic-gold"></div>
          </header>
  
          {/* Body Content */}
          <div className="text-clinic-gray space-y-8 leading-relaxed">
            
            <section>
              <p className="text-lg">
                At AlignedWest Chiropractic, we are committed to ensuring that our website is accessible to everyone, including individuals with disabilities. We continually strive to improve the user experience and apply relevant accessibility standards to meet the needs of all visitors.
              </p>
            </section>
  
            <section className="bg-clinic-off-white p-8 border-l-4 border-clinic-gold rounded-sm">
              <p className="mb-6 font-medium text-clinic-dark">
                If you experience any difficulty accessing our website or have suggestions for improving accessibility, please contact us at:
              </p>
              
              <ul className="space-y-4 not-italic">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-clinic-dark min-w-[80px]">Phone:</span>
                  <span>{clinicPhone}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-clinic-dark min-w-[80px]">Email:</span>
                  <a href={`mailto:${clinicEmail}`} className="text-clinic-navy hover:text-clinic-gold underline transition-colors">
                    {clinicEmail}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-clinic-dark min-w-[80px]">Address:</span>
                  <span>{clinicAddress}</span>
                </li>
              </ul>
            </section>
  
            <footer className="pt-8 text-center border-t border-slate-100">
              <p className="text-sm italic font-serif text-clinic-dark">
                We value your feedback and are dedicated to making our services and website inclusive for all.
              </p>
            </footer>
  
          </div>
        </div>
      </article>
    );
  }