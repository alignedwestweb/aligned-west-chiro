import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';
import { defaultMetadata } from '@/lib/metadata';

// 1. Initialize fonts with CSS variables
const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  display: 'swap',
});

// 2. Use the imported SEO metadata
export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 3. Apply font variables and set base text smoothing
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <link
          rel="preload"
          href="/assets/fonts/geller-headline.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased text-clinic-dark bg-white min-h-screen flex flex-col font-sans">
        
        {/* Navigation - Stays at the top */}
        <Navigation />
        
        {/* main flex-grow ensures the footer stays at the bottom on short pages */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Footer - Stays at the bottom */}
        <Footer />

      </body>
    </html>
  );
}