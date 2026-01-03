import Link from 'next/link';

export default function Header() {
  return (
    <header className="py-4 bg-brand-navy text-white">
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/images/logo.png" alt="NSE Logo" width={160} />
        </Link>
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="/products" className="hover:underline">Products</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
        <div className="flex items-center gap-3">
          <input placeholder="Search product" className="hidden md:block bg-white text-gray-800 rounded px-3 py-1" />
          <button className="btn-secondary">Cart</button>
        </div>
      </div>
    </header>
  );
}
