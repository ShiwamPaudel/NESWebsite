"use client";
import Link from 'next/link';
import { useCart } from './CartContext';
import type { Product } from '../lib/products';

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    add({ id: product.id, title: product.title, price: product.price, image: product.image }, 1);
  };

  return (
    <div className="group block h-full bg-white relative card-hero mb-2 flex flex-col">
      <Link href={`/products/${product.id}`} className="block relative h-64 sm:h-72 overflow-hidden bg-[#fafafa]">
        <img
          src={product.image}
          alt={product.title}
          className="product-image w-full h-full object-contain p-6 mix-blend-multiply transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
        />
        {/* Add to Cart Button on Hover */}
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transform translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={handleAddToCart}
            className="w-full bg-matte-black/95 backdrop-blur tracking-[0.2em] hover:bg-brushed-gold text-white py-3.5 text-xs uppercase font-semibold rounded-sm transition-colors duration-300 shadow-xl"
          >
            Add to Cart
          </button>
        </div>
      </Link>

      <div className="p-5 flex flex-col justify-between flex-1" style={{ minHeight: '130px' }}>
        <div>
          <span className="text-[11px] uppercase tracking-wider text-muted-gray mb-1 block">{product.category}</span>
          <h3 className="font-semibold text-matte-black text-lg line-clamp-1 group-hover:text-brushed-gold transition-colors">
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </h3>
        </div>
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
          <p className="font-medium text-matte-black">{product.price}</p>
          <div className="flex gap-2">
            <div className="w-4 h-4 rounded-full border border-gray-200 bg-[#E8EBED] shadow-inner" title="Chrome"></div>
            <div className="w-4 h-4 rounded-full bg-matte-black shadow-inner" title="Matte Black"></div>
            <div className="w-4 h-4 rounded-full bg-[#D4AF37] shadow-inner" title="Brushed Gold"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
