import Link from 'next/link';

export default function Legal() {
  return (
    <div className="flex flex-col items-center md:items-start">
      <h4 className="font-serif text-lg text-clinic-gold mb-4 uppercase tracking-wider">
        Legal
      </h4>
      <ul className="space-y-3 text-sm text-gray-300">
        <li>
          <Link href="/privacy-policy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link href="/accessibility-statement" className="hover:text-white transition-colors">
            Accessibility
          </Link>
        </li>
        <li>
          <Link href="/hipaa" className="hover:text-white transition-colors">
            HIPAA Notice of Privacy
          </Link>
        </li>
      </ul>
    </div>
  );
}