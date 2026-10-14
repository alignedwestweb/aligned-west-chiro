export const NAV_LINKS = [
  { text: 'Home', href: '/' },
  { text: 'About', href: '/about' },
  { text: 'Services', href: '/services' },
  { text: 'Apprenticeship', href: '/apprenticeship' },
  { text: 'Clinic', href: '/clinic' },
  { text: 'Book Now', href: process.env.NEXT_PUBLIC_BOOK_NOW_LINK || '#' },
];
