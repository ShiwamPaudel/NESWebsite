"use client";
import { useMemo, useState } from "react";
import type { Product } from "../lib/products";
import ProductCard from "./ProductCard";

export default function ProductListClient({ products }: { products: Product[] }) {
  const [category, setCategory] = useState<string>("All");
  const [finish, setFinish] = useState<string>("All");
  const [style, setStyle] = useState<string>("All");
  const [query, setQuery] = useState<string>("");

  const categories = useMemo(() => ["All", ...Array.from(new Set(products.map((p) => p.category)))], [products]);
  const finishes = ["All", "Chrome", "Matte Black", "Brushed Gold"];
  const styles = ["All", "Modern", "Classic"];

  const filtered = products.filter((p) => {
    const matchesCategory = category === "All" || p.category === category;
    // Static checks for Demo contexts (finish/style usually come from CMS)
    const matchesFinish = finish === "All" || true;
    const matchesStyle = style === "All" || true;
    const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase()) || p.description.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesFinish && matchesStyle && matchesQuery;
  });

  return (
    <div className="flex flex-col lg:flex-row gap-10">

      {/* Sidebar Filter System */}
      <aside className="lg:w-1/4 flex-shrink-0 space-y-8 sticky top-24 h-fit">
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
          <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-matte-black mb-5 pb-3 border-b border-gray-100">Collection</h3>
          <ul className="space-y-3">
            {categories.map((c) => (
              <li key={c}>
                <button
                  onClick={() => setCategory(c)}
                  className={`text-sm transition-all uppercase tracking-wider block w-full text-left flex items-center gap-2 ${category === c ? "text-brushed-gold font-bold translate-x-1" : "text-gray-500 hover:text-matte-black hover:translate-x-1"}`}
                >
                  {category === c && <span className="w-1.5 h-1.5 bg-brushed-gold rounded-full inline-block"></span>}
                  {c}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded shadow-sm border border-gray-100 mt-6">
          <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-matte-black mb-5 pb-3 border-b border-gray-100 flex justify-between cursor-pointer group">
            Finish Option <span className="text-gray-400 group-hover:text-matte-black transition-colors">+</span>
          </h3>
          <ul className="space-y-4">
            {finishes.map((f) => (
              <li key={f} className="flex items-center gap-3 group/item cursor-pointer" onClick={() => setFinish(f)}>
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${finish === f ? 'border-brushed-gold bg-brushed-gold/10' : 'border-gray-300 group-hover/item:border-gray-400'}`}>
                  {finish === f && <div className="w-2 h-2 rounded-full bg-brushed-gold"></div>}
                </div>
                <span className={`text-sm transition-colors ${finish === f ? 'text-matte-black font-semibold' : 'text-gray-500 group-hover/item:text-matte-black'}`}>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded shadow-sm border border-gray-100 mt-6">
          <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-matte-black mb-5 pb-3 border-b border-gray-100 flex justify-between cursor-pointer group">
            Design Style <span className="text-gray-400 group-hover:text-matte-black transition-colors">+</span>
          </h3>
          <ul className="space-y-4">
            {styles.map((s) => (
              <li key={s} className="flex items-center gap-3 group/item cursor-pointer" onClick={() => setStyle(s)}>
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${style === s ? 'border-brushed-gold bg-brushed-gold/10' : 'border-gray-300 group-hover/item:border-gray-400'}`}>
                  {style === s && <div className="w-2 h-2 rounded-full bg-brushed-gold"></div>}
                </div>
                <span className={`text-sm transition-colors ${style === s ? 'text-matte-black font-semibold' : 'text-gray-500 group-hover/item:text-matte-black'}`}>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content Grid */}
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pb-4 border-b border-gray-200">
          <div className="text-sm text-muted-gray"><span className="font-semibold text-matte-black">{filtered.length}</span> Products Found</div>

          <div className="flex items-center gap-3">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="border-b border-gray-300 bg-transparent px-3 py-1.5 w-48 sm:w-64 focus:outline-none focus:border-matte-black transition-colors"
              aria-label="Search products"
            />
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <h3 className="text-xl font-semibold mb-2 text-matte-black">No products found</h3>
            <p className="text-muted-gray">Try adjusting your filters or search criteria.</p>
            <button onClick={() => { setCategory("All"); setFinish("All"); setStyle("All"); setQuery(""); }} className="mt-6 text-sm underline text-brushed-gold font-bold">Clear all filters</button>
          </div>
        )}
      </div>
    </div>
  );
}
