import ProductCard from '../../components/ProductCard';
import { getProducts } from '../../lib/products';

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <section className="py-12">
      <h1 className="text-3xl font-semibold mb-6">All Products</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
