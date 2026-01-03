import { getProduct, getProducts } from '../../../lib/products';
import Image from 'next/image';

type Props = { params: { id: string } };

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ id: p.id }));
}

export default async function ProductPage({ params }: Props) {
  const product = await getProduct(params.id);

  if (!product) return <p>Product not found.</p>;

  return (
    <section className="py-12">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <img src={product.image} alt={product.title} className="w-full rounded" />
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-lg text-muted-gray mb-4">{product.description}</p>
          <p className="text-xl font-semibold mb-4">{product.price}</p>

          <div className="bg-yellow-50 p-4 rounded">
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div><strong>Brand</strong><br />{product.specs.brand}</div>
              <div><strong>Warranty</strong><br />{product.specs.warranty}</div>
              <div><strong>Size</strong><br />{product.specs.size}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
