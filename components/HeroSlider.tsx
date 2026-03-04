"use client";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

const slides = [
    {
        image: "/images/hero-banner-1.png",
        title: "Elevate",
        highlight: "Your Space",
        subtitle:
            "Precision engineering meets Modern Luxury. Discover Nepal's premier fixtures for kitchen and bathroom.",
    },
    {
        image: "/images/hero-banner-2.png",
        title: "Redefine",
        highlight: "The Everyday",
        subtitle:
            "World-class taps and fittings delivered to Kathmandu, Bhaktapur & Lalitpur. Crafted for lasting elegance.",
    },
    {
        image: "/images/hero-banner-3.png",
        title: "Luxury",
        highlight: "Flows Here",
        subtitle:
            "From basin mixers to overhead showers — experience unmatched quality in every drop.",
    },
];

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);
    const [animating, setAnimating] = useState(false);

    const goTo = useCallback(
        (idx: number) => {
            if (animating || idx === current) return;
            setAnimating(true);
            setTimeout(() => {
                setCurrent(idx);
                setAnimating(false);
            }, 600);
        },
        [animating, current]
    );

    const next = useCallback(() => {
        goTo((current + 1) % slides.length);
    }, [current, goTo]);

    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [next]);

    const slide = slides[current];

    return (
        <section className="relative w-full h-[85vh] flex items-center overflow-hidden bg-matte-black">
            {/* Background images with transition */}
            {slides.map((s, i) => (
                <div
                    key={i}
                    className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
                    style={{
                        backgroundImage: `url('${s.image}')`,
                        opacity: i === current ? 1 : 0,
                    }}
                />
            ))}

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-matte-black/85 to-transparent" />

            {/* Content */}
            <div
                className="container relative z-10 px-6 sm:px-12 lg:px-20 text-left text-white max-w-7xl mx-auto mt-20"
                style={{ transition: "opacity 0.6s", opacity: animating ? 0 : 1 }}
            >
                <span className="text-brushed-gold tracking-[0.3em] uppercase text-sm font-semibold inline-flex items-center gap-3 mb-4">
                    <span className="w-12 h-[1px] bg-brushed-gold inline-block" />
                    The Art of Water
                </span>
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-playfair font-bold uppercase tracking-widest leading-[1.1] text-shadow-lg max-w-4xl mb-6">
                    {slide.title}
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brushed-gold to-yellow-200">
                        {slide.highlight}
                    </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-200 font-light max-w-2xl text-shadow leading-relaxed mb-10">
                    {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                    <Link
                        href="/products"
                        className="group relative inline-flex items-center justify-center px-8 py-4 bg-brushed-gold text-matte-black font-semibold tracking-wider uppercase text-sm overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                    >
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10" />
                        <span className="relative">Explore Collection</span>
                    </Link>
                    <Link
                        href="/collections"
                        className="relative inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/30 text-white font-semibold tracking-wider uppercase text-sm transition-all hover:border-white hover:bg-white/5 backdrop-blur-sm"
                    >
                        View Lookbook
                    </Link>
                </div>
            </div>

            {/* Slide dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        className={`h-[3px] transition-all duration-500 rounded-full ${i === current
                                ? "w-12 bg-brushed-gold"
                                : "w-4 bg-white/40 hover:bg-white/70"
                            }`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>

            {/* Prev / Next arrows */}
            <button
                onClick={() => goTo((current - 1 + slides.length) % slides.length)}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 border border-white/30 bg-black/30 backdrop-blur text-white hover:border-brushed-gold hover:text-brushed-gold transition-all flex items-center justify-center rounded-full"
                aria-label="Previous slide"
            >
                ←
            </button>
            <button
                onClick={() => goTo((current + 1) % slides.length)}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 border border-white/30 bg-black/30 backdrop-blur text-white hover:border-brushed-gold hover:text-brushed-gold transition-all flex items-center justify-center rounded-full"
                aria-label="Next slide"
            >
                →
            </button>
        </section>
    );
}
