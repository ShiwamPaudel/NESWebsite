import '../styles/globals.css';
import type { PropsWithChildren } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'New Shiwani Enterprises',
  description: 'Quality Bathroom & Kitchen Accessories — Faucets, Showers, Pumps and more.'
};

import { CartProvider } from '../components/CartContext';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <main className="container">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
