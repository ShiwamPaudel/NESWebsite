import Link from 'next/link';
import { getProducts } from '../lib/products';
import ProductCard from '../components/ProductCard';
import HeroSlider from '../components/HeroSlider';

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="bg-cream">
      <HeroSlider />

      {/* Primary Category Grid */}
      <section className="py-32 bg-white relative">
        <div className="container px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-brushed-gold text-xs tracking-[0.2em] font-bold uppercase mb-4 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-brushed-gold"></span> Category
              </h2>
              <h3 className="text-4xl lg:text-5xl font-playfair font-bold text-matte-black">Shop by Space</h3>
            </div>
            <p className="text-muted-gray max-w-md font-light hidden md:block text-right">
              Curated collections designed to transform your everyday rituals into luxurious experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/products/bathroom" className="group relative h-[450px] overflow-hidden bg-gray-100 block rounded shadow-sm">
              <img src="/images/collection-1.png" alt="Bathroom" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-matte-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-white text-3xl font-playfair font-bold mb-2">Bathroom</h4>
                <p className="text-gray-300 text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Faucets, Mixers & Showers ➝</p>
              </div>
            </Link>

            <Link href="/products/kitchen" className="group relative h-[450px] overflow-hidden bg-gray-100 block md:translate-y-12 shadow-sm rounded">
              <img src="/images/collection-2.png" alt="Kitchen" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-matte-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-white text-3xl font-playfair font-bold mb-2">Kitchen</h4>
                <p className="text-gray-300 text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Sinks & Pure Water ➝</p>
              </div>
            </Link>

            <Link href="/products/accessories" className="group relative h-[450px] overflow-hidden bg-gray-100 block rounded shadow-sm">
              <img src="/images/collection-3.png" alt="Accessories" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-matte-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-white text-3xl font-playfair font-bold mb-2">Sanitary</h4>
                <p className="text-gray-300 text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Premium Accessories ➝</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 bg-[#F8FAFC]">
        <div className="container px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-brushed-gold text-xs tracking-[0.2em] font-bold uppercase mb-4 flex items-center justify-center gap-3">
              <span className="w-8 h-[1px] bg-brushed-gold"></span> Signature Pieces <span className="w-8 h-[1px] bg-brushed-gold"></span>
            </h2>
            <h3 className="text-4xl lg:text-5xl font-playfair font-bold text-matte-black mb-6">Featured Classics</h3>
            <p className="text-muted-gray max-w-2xl mx-auto font-light">
              Discover the pinnacle of minimalist design and high-grade materials. Curated pieces serving Kathmandu's finest homes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {products.slice(0, 8).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/products" className="inline-flex items-center gap-2 text-matte-black font-semibold hover:text-brushed-gold transition-colors pb-1 border-b-2 border-matte-black hover:border-brushed-gold uppercase tracking-widest text-sm">
              View Full Catalog <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-matte-black text-white relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 -mr-64 -mt-64 w-[600px] h-[600px] bg-white opacity-[0.02] rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 -ml-64 -mb-64 w-[600px] h-[600px] bg-brushed-gold opacity-[0.05] rounded-full blur-[100px]"></div>

        <div className="container relative z-10 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-brushed-gold text-xs tracking-[0.2em] font-bold uppercase mb-4">The NSE Promise</h2>
            <h3 className="text-4xl lg:text-6xl font-playfair font-bold">Why Choose Us</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-16 lg:gap-24">
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center mb-8 text-3xl text-brushed-gold group-hover:border-brushed-gold group-hover:bg-brushed-gold/10 transition-all duration-500">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
              </div>
              <h4 className="text-2xl font-playfair font-bold mb-4">Precision Engineering</h4>
              <p className="text-gray-400 font-light leading-relaxed max-w-sm text-lg">Flawless functionality crafted from high-grade brass and steel, ensuring performance built to last decades.</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center mb-8 text-3xl text-brushed-gold group-hover:border-brushed-gold group-hover:bg-brushed-gold/10 transition-all duration-500">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h4 className="text-2xl font-playfair font-bold mb-4">Trusted Warranty</h4>
              <p className="text-gray-400 font-light leading-relaxed max-w-sm text-lg">Rest easy with our industry-leading guarantee backing every premium tap and fixture we produce and sell.</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center mb-8 text-3xl text-brushed-gold group-hover:border-brushed-gold group-hover:bg-brushed-gold/10 transition-all duration-500">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h4 className="text-2xl font-playfair font-bold mb-4">Timeless Design</h4>
              <p className="text-gray-400 font-light leading-relaxed max-w-sm text-lg">Our collections emphasize Modern Luxury, perfectly blending minimalist sleek aesthetics with robust usability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects & Testimonials (Local SEO) */}
      <section className="py-32 bg-white">
        <div className="container px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <h2 className="text-brushed-gold text-xs tracking-[0.2em] font-bold uppercase mb-4 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-brushed-gold"></span> Local Expertise
              </h2>
              <h3 className="text-4xl lg:text-5xl font-playfair font-bold text-matte-black mb-6 leading-tight">Elevating Spaces Across the Valley</h3>
              <p className="text-dark-slate mb-8 font-light text-lg leading-relaxed">
                From luxury apartments in Lalitpur to boutique hotels in Kathmandu and heritage homes in Bhaktapur, NSE provides premium fittings trusted by top architects and homeowners.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-matte-black font-semibold hover:text-brushed-gold transition-colors pb-1 border-b-2 border-matte-black hover:border-brushed-gold uppercase tracking-widest text-sm">
                Visit Our Showroom <span className="text-lg">→</span>
              </Link>
            </div>

            <div className="lg:w-2/3 grid md:grid-cols-2 gap-6 w-full">
              <div className="bg-gray-50 p-10 rounded shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-500 hover:-translate-y-2">
                <div className="flex mb-6 text-brushed-gold gap-1 text-lg">
                  ★★★★★
                </div>
                <p className="text-gray-600 mb-8 font-light leading-relaxed text-lg">
                  "NSE supplied the complete bathroom fixtures for our new housing project in Sanepa. Their basin mixers and diverters are world-class."
                </p>
                <div>
                  <h5 className="font-bold text-matte-black text-lg">— A. Sharma</h5>
                  <span className="text-xs text-brushed-gold uppercase tracking-widest mt-1 block">Architect • Lalitpur</span>
                </div>
              </div>

              <div className="bg-matte-black text-white p-10 rounded shadow-sm border border-gray-800 hover:shadow-xl transition-shadow duration-500 hover:-translate-y-2 md:translate-y-8">
                <div className="flex mb-6 text-brushed-gold gap-1 text-lg">
                  ★★★★★
                </div>
                <p className="text-gray-300 mb-8 font-light leading-relaxed text-lg">
                  "Finding high-end kitchen sink taps in Kathmandu used to be a challenge. NSE's collection in Balkot was exactly what we needed."
                </p>
                <div>
                  <h5 className="font-bold text-white text-lg">— R. Kansakar</h5>
                  <span className="text-xs text-brushed-gold uppercase tracking-widest mt-1 block">Restaurateur • Kathmandu</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
