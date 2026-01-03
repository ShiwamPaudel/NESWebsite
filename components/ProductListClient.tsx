"use client";
import { useMemo, useState } from "react";
import type { Product } from "../lib/products";
import ProductCard from "./ProductCard";

export default function ProductListClient({ products }: { products: Product[] }) {
  const [category, setCategory] = useState<string>("All");
  const [query, setQuery] = useState<string>("");

  const categories = useMemo(() => ["All", ...Array.from(new Set(products.map((p) => p.category)))], [products]);

  const filtered = products.filter((p) => {
    const matchesCategory = category === "All" || p.category === category;
    const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase()) || p.description.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="flex gap-2 flex-wrap">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-3 py-1 rounded ${category === c ? "bg-brand-navy text-white" : "bg-cream text-gray-800"}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products"
            className="border rounded px-3 py-1 w-48 sm:w-64"
            aria-label="Search products"
          />
          <div className="text-sm text-muted-gray">{filtered.length} items</div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
