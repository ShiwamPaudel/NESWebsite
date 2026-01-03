import Link from 'next/link';

type Product = {
  id: string;
  title: string;
  image: string;
  price: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`} className="block rounded overflow-hidden card-hero bg-white">
      <img src={product.image} alt={product.title} className="w-full h-44 sm:h-56 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold">{product.title}</h3>
        <p className="text-sm text-muted-gray">{product.category}</p>
        <p className="text-lg font-bold text-gold mt-2">{product.price}</p>
      </div>
    </Link>
  );
}
