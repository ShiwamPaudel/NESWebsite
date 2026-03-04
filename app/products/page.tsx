import { getProducts } from '../../lib/products';
import ProductListClient from '../../components/ProductListClient';

export const metadata = {
  title: 'Premium Bathroom & Kitchen Accessories in Nepal | NSE',
  description: 'Explore the complete catalog of Premium Bathroom and Kitchen Accessories available at New Shiwani Enterprises. Serving Kathmandu, Bhaktapur, and Lalitpur with high-end taps and accessories.'
};

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
