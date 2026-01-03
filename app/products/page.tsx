import { getProducts } from '../../lib/products';
import ProductListClient from '../../components/ProductListClient';

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <section className="py-12">
      <h1 className="text-3xl font-semibold mb-6">All Products</h1>

      {/* client side list with filters and search */}
      <ProductListClient products={products} />
    </section>
  );
}
