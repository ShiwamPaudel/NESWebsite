import { use } from 'react';
import { getProducts } from '../../lib/products';
import { useCart } from '../../components/CartContext';

export default function CartPage() {
  // This page will be client-side driven; we use a small client component via a dynamic import pattern
  return (
    <div className="py-12">
      <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>
      <p className="text-muted-gray">Open the cart from the header to manage items, or continue to checkout.</p>
    </div>
  );
}
