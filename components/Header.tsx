"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import CartDrawer from './CartDrawer';

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }, [open]);

  return (
    <header className="site-header py-4 bg-brand-navy text-white sticky top-0 z-50">
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/images/logo.png" alt="NSE Logo" width={160} />
        </Link>

        {/* desktop nav */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="/products" className="hover:underline">Products</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>

        {/* mobile controls */}
        <div className="flex items-center gap-3">
          <input placeholder="Search product" className="hidden md:block bg-white text-gray-800 rounded px-3 py-1" />

          <CartDrawer />

          <button aria-label="open menu" className="md:hidden p-2" onClick={() => setOpen(!open)}>
            <span className="sr-only">Toggle menu</span>
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>
      </div>

      {/* mobile nav overlay */}
      <div className={`md:hidden fixed inset-0 bg-brand-navy/95 transform ${open ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 z-40`}>
        <div className="p-6 pt-24 flex flex-col gap-6 text-xl">
          <Link href="/products" onClick={() => setOpen(false)} className="block">Products</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="block">About</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="block">Contact</Link>
        </div>
      </div>
    </header>
  );
}
