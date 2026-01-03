"use client";
import { useState } from 'react';
import { useCart } from './CartContext';
import Link from 'next/link';

export default function CartDrawer() {
  const [open, setOpen] = useState(false);
  const { items, totalItems, totalPrice, updateQty, remove, clear } = useCart();

  return (
    <div suppressHydrationWarning>
      <button aria-label="open cart" className="relative" onClick={() => setOpen((v) => !v)}>
        <span className="btn-secondary">Cart</span>
        {totalItems > 0 && <span className="absolute -top-2 -right-2 bg-gold text-[#072237] rounded-full px-2 text-xs">{totalItems}</span>}
      </button>

      <div className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-lg transform ${open ? 'translate-x-0' : 'translate-x-full'} transition-transform z-50`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Your Cart</h3>
            <button onClick={() => setOpen(false)} className="text-muted-gray">Close</button>
          </div>

          <div className="mt-4 flex-1 overflow-auto">
            {items.length === 0 && <p className="text-muted-gray">Cart is empty.</p>}
            {items.map((it) => (
              <div key={it.id} className="flex items-center gap-3 py-3 border-b">
                <img src={it.image} alt={it.title} className="w-16 h-16 object-cover rounded" />
                <div className="flex-1">
                  <p className="font-semibold">{it.title}</p>
                  <p className="text-sm text-muted-gray">{it.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button onClick={() => updateQty(it.id, Math.max(1, it.qty - 1))} className="px-2 py-1 bg-cream rounded">-</button>
                    <div className="px-3">{it.qty}</div>
                    <button onClick={() => updateQty(it.id, it.qty + 1)} className="px-2 py-1 bg-cream rounded">+</button>
                    <button onClick={() => remove(it.id)} className="ml-4 text-sm text-muted-gray">Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <div className="text-sm">Total</div>
              <div className="font-semibold">{totalPrice}</div>
            </div>

            <div className="mt-4 flex gap-2">
              <Link href="/cart" className="btn-primary w-full text-center">View Cart</Link>
              <button onClick={() => clear()} className="btn-secondary">Clear</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
