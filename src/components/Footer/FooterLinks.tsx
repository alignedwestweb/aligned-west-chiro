import Link from 'next/link';

const LINKS = [
  { 
    section: 'Services', 
    items: [
      { name: 'Apprentice Massage', href: '/services/apprentice-massage' },
      { name: 'Chiropractic', href: '/services/chiropractic' },
      { name: 'NAET', href: '/services/naet' },
      { name: 'Soul Alignment', href: '/services/soul-alignment' }
    ] 
  },
  {
    section: 'Legal',
    items: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Accessibility', href: '/accessibility-statement' },
      { name: 'HIPAA Notice of Privacy', href: '/hipaa' },
    ]
  }
];

export default function FooterLinks() {
  return (
    /* Removed the wrapping div that had 'w-full' and 'justify-center' */
    /* We now let the parent Index.tsx handle the centering */
    <div className="grid grid-cols-2 gap-8 md:gap-12 text-center md:text-left">
      {LINKS.map((group) => (
        <div key={group.section} className="flex flex-col items-center md:items-start">
          <h4 className="font-serif text-lg text-clinic-gold mb-4 tracking-wide">
            {group.section}
          </h4>
          <ul className="space-y-3">
            {group.items.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href} 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}