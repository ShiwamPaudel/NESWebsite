import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-20 pb-10 border-t border-brand-navy/80">
      <div className="container max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          <div className="lg:col-span-1">
            <h4 className="text-2xl font-playfair font-bold text-white mb-6 tracking-wide">NSE</h4>
            <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
              Precision engineering meets Modern Luxury. Discover Nepal's premier fixtures for kitchen and bathroom.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex flex-col items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all bg-white/5">
                <span className="sr-only">Facebook</span>
                f
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex flex-col items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all bg-white/5">
                <span className="sr-only">Instagram</span>
                in
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex flex-col items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all bg-white/5">
                <span className="sr-only">Twitter</span>
                x
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-brushed-gold text-xs font-bold uppercase tracking-[0.2em] mb-6">Collections</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><Link href="/products/bathroom" className="text-gray-400 hover:text-white transition-colors">Bathroom Fittings</Link></li>
              <li><Link href="/products/kitchen" className="text-gray-400 hover:text-white transition-colors">Kitchen Sinks & Taps</Link></li>
              <li><Link href="/products/accessories" className="text-gray-400 hover:text-white transition-colors">Sanitary Accessories</Link></li>
              <li><Link href="/collections" className="text-gray-400 hover:text-white transition-colors">Signature Series</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brushed-gold text-xs font-bold uppercase tracking-[0.2em] mb-6">Customer Care</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About NSE</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/warranty" className="text-gray-400 hover:text-white transition-colors">Warranty & Service</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-brushed-gold text-xs font-bold uppercase tracking-[0.2em] mb-4">Stay Updated</h4>
            <p className="text-white font-semibold text-lg mb-2">Good emails.</p>
            <p className="text-gray-400 text-sm font-light mb-4 leading-relaxed">
              Be the first to know about new collections and product launches.
            </p>
            <div
              style={{
                borderRadius: '6px',
                overflow: 'hidden',
                filter: 'invert(1) hue-rotate(180deg)',
              }}
            >
              <div style={{ filter: 'invert(1) hue-rotate(180deg)' }}>
                <iframe
                  frameBorder="0"
                  id="iframewin"
                  width="100%"
                  height="140"
                  src="https://zcsub-cmpzourl.maillist-manage.com/ua/Optin?od=11287ecd1344ef&zx=1355b46c4&tD=114c070b53ce527a9&sD=114c070b53ce52971"
                />
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 font-light gap-4">
          <p>&copy; {new Date().getFullYear()} New Shiwani Enterprises. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-brushed-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brushed-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
