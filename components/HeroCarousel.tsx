"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';

type Props = {
  images: string[];
  title?: string;
  subtitle?: string;
};

export default function HeroCarousel({ images, title, subtitle }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % images.length), 5000);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-800 ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          style={{ backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: 420 }}
          aria-hidden={i !== index}
        />
      ))}

      <div className="relative">
        <div className="container py-24">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow-lg">{title ?? 'Elevate Your Space with Premium Fittings'}</h1>
            <p className="mt-4 text-lg text-[#F3EFEA] drop-shadow">{subtitle ?? 'Discover luxury bathroom and kitchen fixtures crafted to last — durable, elegant, and thoughtfully designed.'}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/products" className="btn-primary">Shop Collection</Link>
              <Link href="/about" className="btn-secondary">Our Story</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button key={i} aria-label={`Go to slide ${i + 1}`} onClick={() => setIndex(i)} className={`w-3 h-3 rounded-full ${i === index ? 'bg-white' : 'bg-white/50'}`} />
        ))}
      </div>
    </div>
  );
}
