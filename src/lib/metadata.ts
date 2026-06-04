import { Metadata } from 'next';

export const siteConfig = {
  name: 'AlignedWest Chiropractic',
  description: 'Holistic chiropractic care in Orem, Utah. Specializing in NAET therapy, soul alignment, and gentle adjustments to restore balance in body, mind, and spirit.',
  url: 'https://www.alignedwest.com',
  ogImage: 'https://www.alignedwest.com/og-image.jpg', // Make sure to host a branded image here
  address: '574 S State St, Suite #232, Orem UT, 84058',
  phone: '801-658-9185',
};

export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`, // Allows subpages to be "About | AlignedWest Chiropractic"
  },
  description: siteConfig.description,
  keywords: [
    'Chiropractor Orem',
    'Chiropractor Orem Utah',
    'Chiropractic Care Orem',
    'Holistic Chiropractor Orem',
    'NAET Orem',
    'NAET Utah County',
    'Allergy Treatment Orem',
    'Natural Allergy Relief Orem',
    'Chiropractor Near Me',
    'Back Pain Chiropractor Orem',
    'Headache Chiropractor Orem',
    'Natural Pain Relief Orem',
    'Family Chiropractor Orem',
    'Wellness Chiropractor Orem',
    'Sports Chiropractor Orem',
    'AlignedWest Chiropractic',
    'Weston Sorenson'
  ],
  authors: [{ name: 'Dr. Weston Sorenson' }],
  creator: 'Dr. Weston Sorenson',
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};