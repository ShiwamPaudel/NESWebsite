import '../styles/globals.css';
import type { PropsWithChildren } from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'New Shiwani Enterprises - Premium Kitchen & Bathroom Fittings in Nepal',
  description: 'Premium Kitchen & Bathroom Fittings available at New Shiwani Enterprises. Serving Kathmandu, Bhaktapur, and Lalitpur with high-end taps and accessories.',
  icons: { icon: '/favicon.svg' }
};

import { CartProvider } from '../components/CartContext';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={`${montserrat.variable} font-sans`}>
      <body suppressHydrationWarning className="bg-cream text-gray-800">
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Store",
                "name": "New Shiwani Enterprises",
                "description": "Premium Kitchen & Bathroom Fittings available at New Shiwani Enterprises. Serving Kathmandu, Bhaktapur, and Lalitpur.",
                "url": "https://nse.com.np",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Balkot",
                  "addressRegion": "Bhaktapur",
                  "addressCountry": "NP"
                },
                "areaServed": [
                  { "@type": "City", "name": "Kathmandu" },
                  { "@type": "City", "name": "Bhaktapur" },
                  { "@type": "City", "name": "Lalitpur" }
                ],
                "priceRange": "$$$",
                "image": "https://nse.com.np/images/logo.png"
              })
            }}
          />
        </head>
        <CartProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
