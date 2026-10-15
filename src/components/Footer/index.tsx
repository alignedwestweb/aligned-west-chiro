import ContactInfo from './ContactInfo';
import SocialIcons from './SocialIcons';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-clinic-dark text-white py-16 border-t border-white/10">
      {/* This 'max-w-6xl' acts as your "80% middle" container */}
      <div className="max-w-6xl mx-auto px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          
          {/* Column 1: Contact */}
          <ContactInfo />

          {/* Column 2: Services */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-serif text-lg text-clinic-gold mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/services/apprentice-massage" className="hover:text-white">Apprentice Massage</Link></li>
              <li><Link href="/services/chiropractic" className="hover:text-white">Chiropractic</Link></li>
              <li><Link href="/services/naet" className="hover:text-white">NAET</Link></li>
              <li><Link href="/services/soul-alignment" className="hover:text-white">Soul Alignment</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-serif text-lg text-clinic-gold mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/accessibility-statement" className="hover:text-white">Accessibility</Link></li>
              <li><Link href="/hipaa" className="hover:text-white">HIPAA Notice of Privacy</Link></li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="font-serif text-lg text-clinic-gold mb-4 uppercase tracking-wider">Connect</h4>
            <SocialIcons />
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center mt-12 pt-8 border-t border-white/10 text-sm text-gray-400">
          © {new Date().getFullYear()} AlignedWest Chiropractic. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}