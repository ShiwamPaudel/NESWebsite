"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "./CartContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const { totalItems } = useCart();

  const cartItemCount = totalItems;

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [open]);

  return (
    <header
      className="py-4 bg-white/90 backdrop-blur-md text-matte-black sticky top-0 z-50 transition-all duration-300 relative border-b border-gray-200/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
      style={{ WebkitFontSmoothing: "antialiased" }}
    >
      <div className="w-full flex items-center justify-between px-6 lg:px-12">
        <Link href="/" className="flex items-center gap-3 relative z-50 mr-8">
          <img
            src="/images/logo.png"
            alt="NSE Logo"
            width={160}
            className="max-h-12 object-contain"
          />
        </Link>

        {/* Desktop Mega Menu Navigation */}
        <nav
          className="hidden md:flex gap-10 items-center justify-center font-medium tracking-wide uppercase text-sm h-full"
          aria-label="Primary navigation"
        >
          <div
            className="group relative h-full flex items-center px-2 py-4 cursor-pointer"
            onMouseEnter={() => setActiveMenu("rooms")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <span className="text-matte-black font-semibold hover:text-brushed-gold transition-colors flex items-center">
              Shop By Room <span className="ml-1 opacity-60">▼</span>
            </span>
            {activeMenu === "rooms" && (
              <div className="absolute top-full left-1/2 min-w-[500px] -translate-x-1/2 p-0 -mt-2">
                <div className="bg-white text-matte-black rounded shadow-2xl overflow-hidden animate-fade-in mt-4 border border-gray-100 flex p-6">
                  <div className="w-1/2 pr-6 border-r border-gray-200">
                    <h4 className="text-brushed-gold mb-3 text-sm font-semibold tracking-wider">
                      Kitchen Solutions
                    </h4>
                    <ul className="text-sm space-y-3">
                      <li>
                        <Link
                          href="/products/sink-taps"
                          className="hover:text-brushed-gold transition-colors block text-gray-700 font-normal"
                        >
                          Sink Taps (Swivel, Pull-out)
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/products/wall-mixers"
                          className="hover:text-brushed-gold transition-colors block text-gray-700 font-normal"
                        >
                          Wall Mixers
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/products/water-purifier"
                          className="hover:text-brushed-gold transition-colors block text-gray-700 font-normal"
                        >
                          Water Purifier Faucets
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="w-1/2 pl-6">
                    <h4 className="text-brushed-gold mb-3 text-sm font-semibold tracking-wider">
                      Bathroom Solutions
                    </h4>
                    <ul className="text-sm space-y-3">
                      <li>
                        <Link
                          href="/products/basin-mixers"
                          className="hover:text-brushed-gold transition-colors block text-gray-700 font-normal"
                        >
                          Basin Mixers
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/products/diverters"
                          className="hover:text-brushed-gold transition-colors block text-gray-700 font-normal"
                        >
                          Diverters
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/products/overhead-showers"
                          className="hover:text-brushed-gold transition-colors block text-gray-700 font-normal"
                        >
                          Overhead Showers
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/products/hand-showers"
                          className="hover:text-brushed-gold transition-colors block text-gray-700 font-normal"
                        >
                          Hand Showers
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div
            className="group relative h-full flex items-center px-2 py-4 cursor-pointer"
            onMouseEnter={() => setActiveMenu("accessories")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <span className="text-matte-black font-semibold hover:text-brushed-gold transition-colors flex items-center">
              Accessories & Sanitary <span className="ml-1 opacity-60">▼</span>
            </span>
            {activeMenu === "accessories" && (
              <div className="absolute top-full left-1/2 min-w-[300px] -translate-x-1/2 p-0 -mt-2">
                <div className="bg-white text-matte-black rounded shadow-2xl overflow-hidden animate-fade-in mt-4 border border-gray-100 p-6">
                  <h4 className="text-brushed-gold mb-3 text-sm font-semibold tracking-wider">
                    Sanitary Essentials
                  </h4>
                  <ul className="text-sm space-y-3">
                    <li>
                      <Link
                        href="/products/towel-rails"
                        className="hover:text-brushed-gold transition-colors block text-gray-700 font-normal"
                      >
                        Towel Rails
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/products/soap-dispensers"
                        className="hover:text-brushed-gold transition-colors block text-gray-700 font-normal"
                      >
                        Soap Dispensers
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/products/robe-hooks"
                        className="hover:text-brushed-gold transition-colors block text-gray-700 font-normal"
                      >
                        Robe Hooks
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/products/paper-holders"
                        className="hover:text-brushed-gold transition-colors block text-gray-700 font-normal"
                      >
                        Paper Holders
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/collections"
            className="text-matte-black font-semibold hover:text-brushed-gold transition-colors px-2"
          >
            Collections
          </Link>
          <Link
            href="/about"
            className="text-matte-black font-semibold hover:text-brushed-gold transition-colors px-2"
          >
            About Us
          </Link>
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-5 relative z-50">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
            placeholder="Search collection..."
            className="hidden md:block bg-gray-50 border border-gray-200 text-matte-black rounded-sm px-4 py-1.5 focus:border-brushed-gold focus:outline-none focus:ring-1 focus:ring-brushed-gold transition-all text-sm placeholder-gray-500 w-48 focus:w-64"
          />

          <Link href="/cart" className="relative text-matte-black hover:text-brushed-gold transition-colors flex items-center justify-center p-2 rounded-full hover:bg-gray-100">
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-brushed-gold rounded-full shadow-sm">
                {totalItems}
              </span>
            )}
          </Link>

          <button
            aria-label="open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            <div className="flex flex-col gap-1.5 w-6">
              <span
                className={`block h-[2px] w-full bg-matte-black transition-transform ${open ? "rotate-45 translate-y-2" : ""
                  }`}
              ></span>
              <span
                className={`block h-[2px] w-full bg-matte-black transition-opacity ${open ? "opacity-0" : ""
                  }`}
              ></span>
              <span
                className={`block h-[2px] w-full bg-matte-black transition-transform ${open ? "-rotate-45 -translate-y-2" : ""
                  }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 bg-white transform ${open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          } transition-all duration-400 ease-in-out z-40`}
        aria-hidden={!open}
      >
        <div className="p-6 pt-28 flex flex-col gap-8 text-xl font-medium">
          <Link
            href="/products"
            onClick={() => setOpen(false)}
            className="text-matte-black hover:text-brushed-gold transition-colors"
          >
            By Room
          </Link>
          <Link
            href="/products"
            onClick={() => setOpen(false)}
            className="text-matte-black hover:text-brushed-gold transition-colors"
          >
            Accessories
          </Link>
          <Link
            href="/collections"
            onClick={() => setOpen(false)}
            className="text-matte-black hover:text-brushed-gold transition-colors"
          >
            Collections
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="text-matte-black hover:text-brushed-gold transition-colors"
          >
            About Us
          </Link>
        </div>
      </div>
    </header>
  );
}
