"use client";
import { useState } from "react";
import type { Product } from "../lib/products";

export default function ProductDetailClient({ product }: { product: Product }) {
  const [qty, setQty] = useState<number>(1);
  const [added, setAdded] = useState<boolean>(false);

  function add() {
    // placeholder: in future integrate cart context or API
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="mt-6 space-y-4">
      <div className="flex items-center gap-3">
        <label className="text-sm">Quantity</label>
        <div className="flex items-center gap-2">
          <button aria-label="decrease quantity" onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-3 py-1 bg-cream rounded">-</button>
          <div className="px-3">{qty}</div>
          <button aria-label="increase quantity" onClick={() => setQty((q) => q + 1)} className="px-3 py-1 bg-cream rounded">+</button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button onClick={add} className="btn-primary">{added ? 'Added' : 'Add to cart'}</button>
        <button className="btn-secondary">Enquire</button>
      </div>
    </div>
  );
}
