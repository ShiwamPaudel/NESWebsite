import Link from 'next/link';

import type { Product } from '../lib/products';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`} className="block rounded overflow-hidden card-hero bg-white text-gray-800">
      <img src={product.image} alt={product.title} className="product-image w-full h-44 sm:h-56 object-cover" style={{maxWidth: '100%', height: 'auto'}} />
      <div className="p-4">
        <h3 className="font-semibold">{product.title}</h3>
        <p className="text-sm text-muted-gray">{product.category}</p>
        <p className="text-lg font-bold text-gold mt-2">{product.price}</p>
      </div>
    </Link>
  );
}
