import Link from 'next/link';
import { getProducts } from '../lib/products';
import ProductCard from '../components/ProductCard';
import dynamic from 'next/dynamic';

const CSSCheck = dynamic(() => import('../components/CSSCheck'), { ssr: false });

export default async function Home() {
  const products = await getProducts();

  return (
    <section className="py-12">
      <CSSCheck />
      <div className="grid md:grid-cols-3 gap-6">
        <div className="col-span-2">
          <h1 className="text-4xl font-bold mb-4">Stylish Bathroom & Kitchen Solutions</h1>
          <p className="mb-6 text-lg">Premium fittings and accessories for every home — quality, durability, and style.</p>
          <Link href="/products" className="btn-primary">Shop All Products</Link>
        </div>
        <div className="space-y-4">
          <img src="/images/hero-banner-1.png" alt="hero" className="w-full rounded" />
          <img src="/images/offer-banner-1.jpg" alt="offer" className="w-full rounded" />
        </div>
      </div>

      <h2 className="mt-12 mb-6 text-2xl font-semibold">Featured Products</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.slice(0, 6).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
