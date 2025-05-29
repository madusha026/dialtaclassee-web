"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PortfolioPage = () => {
    const [category, setCategory] = useState("ALL");

    const cards = [
        { id: 1, category: "Product", src: "/images/1.jpg", alt: "Ukaye Cards" },
        { id: 2, category: "Fashion", src: "/images/2.jpg", alt: "Royale Retreat" },
        { id: 3, category: "Product", src: "/images/10.jpg", alt: "Ghillli Premium Soda" },
        { id: 4, category: "Fashion", src: "/images/7.jpg", alt: "Mags Collection" },
        { id: 5, category: "Product", src: "/images/3.jpg", alt: "Panikanda State" },
        { id: 6, category: "Product", src: "/images/4.jpg", alt: "Panikanda State" },
        { id: 7, category: "Commercial", src: "/images/6.jpg", alt: "Panikanda State" },
        { id: 8, category: "Fashion", src: "/images/8.jpg", alt: "Panikanda State" },
        { id: 9, category: "Fashion", src: "/images/9.jpg", alt: "Panikanda State" },
        { id: 10, category: "Fashion", src: "/images/5.jpg", alt: "Panikanda State" },
        { id: 11, category: "Fashion", src: "/images/16.jpg", alt: "Panikanda State" },
        { id: 12, category: "Fashion", src: "/images/21.jpg", alt: "Panikanda State" },
        { id: 13, category: "Fashion", src: "/images/18.jpg", alt: "Panikanda State" },
        { id: 14, category: "Fashion", src: "/images/20.jpg", alt: "Panikanda State" },
        { id: 15, category: "Fashion", src: "/images/19.jpg", alt: "Panikanda State" },
        { id: 16, category: "Fashion", src: "/images/22.jpg", alt: "Panikanda State" },
        { id: 17, category: "Fashion", src: "/images/23.jpg", alt: "Panikanda State" },
        { id: 18, category: "Fashion", src: "/images/24.jpg", alt: "Panikanda State" },
        { id: 19, category: "Fashion", src: "/images/25.jpg", alt: "Panikanda State" },
        { id: 20, category: "Fashion", src: "/images/26.jpg", alt: "Panikanda State" },
        { id: 21, category: "Fashion", src: "/images/27.jpg", alt: "Panikanda State" },
        { id: 22, category: "Fashion", src: "/images/29.jpg", alt: "Panikanda State" },
        { id: 23, category: "Fashion", src: "/images/30.jpg", alt: "Panikanda State" },
        { id: 24, category: "Fashion", src: "/images/28.jpg", alt: "Panikanda State" },
        { id: 25, category: "Product", src: "/images/31.jpg", alt: "Panikanda State" },
        { id: 26, category: "Product", src: "/images/32.jpg", alt: "Panikanda State" },
        { id: 27, category: "Product", src: "/images/33.jpg", alt: "Panikanda State" },
        { id: 28, category: "Product", src: "/images/34.jpg", alt: "Panikanda State" },
        { id: 29, category: "Product", src: "/images/35.jpg", alt: "Panikanda State" },
        { id: 30, category: "Product", src: "/images/36.jpg", alt: "Panikanda State" },
        { id: 31, category: "Product", src: "/images/37.jpg", alt: "Panikanda State" },
        { id: 32, category: "Product", src: "/images/38.jpg", alt: "Panikanda State" },
        { id: 33, category: "Product", src: "/images/39.jpg", alt: "Panikanda State" },
        { id: 34, category: "Product", src: "/images/40.jpg", alt: "Panikanda State" },
        { id: 35, category: "Product", src: "/images/41.jpg", alt: "Panikanda State" },
        { id: 36, category: "Product", src: "/images/42.jpg", alt: "Panikanda State" },
        { id: 37, category: "Commercial", src: "/images/32.png", alt: "Panikanda State" },
        { id: 38, category: "Commercial", src: "/images/43.jpg", alt: "Panikanda State" },
        { id: 39, category: "Commercial", src: "/images/23.png", alt: "Panikanda State" },
        { id: 40, category: "Commercial", src: "/images/44.jpg", alt: "Panikanda State" },
        { id: 41, category: "Commercial", src: "/images/15.jpg", alt: "Panikanda State" },
        { id: 42, category: "Commercial", src: "/images/45.jpg", alt: "Panikanda State" },
        { id: 43, category: "Commercial", src: "/images/46.jpg", alt: "Panikanda State" },
        { id: 44, category: "Commercial", src: "/images/47.jpg", alt: "Panikanda State" },
        { id: 45, category: "Commercial", src: "/images/14.jpg", alt: "Panikanda State" },
        { id: 46, category: "Commercial", src: "/images/48.jpg", alt: "Panikanda State" },
        { id: 47, category: "Commercial", src: "/images/50.jpg", alt: "Panikanda State" },
        { id: 48, category: "Commercial", src: "/images/48.jpg", alt: "Panikanda State" },
        { id: 49, category: "Commercial", src: "/images/49.jpg", alt: "Panikanda State" },
        
        { id: 50, category: "Photography", src: "/images/14.jpg", alt: "Panikanda State" },
        { id: 51, category: "Photography", src: "/images/30.jpg", alt: "Panikanda State" },
        { id: 52, category: "Photography", src: "/images/28.jpg", alt: "Panikanda State" },
        { id: 53, category: "Photography", src: "/images/24.jpg", alt: "Panikanda State" },
        { id: 54, category: "Photography", src: "/images/19.jpg", alt: "Panikanda State" },
        { id: 55, category: "Photography", src: "/images/22.jpg", alt: "Panikanda State" },

        { id: 56, category: "Videography", src: "/images/51.jpg", alt: "Panikanda State" },
        { id: 57, category: "Videography", src: "/images/51.jpg", alt: "Panikanda State" },
        { id: 58, category: "Videography", src: "/images/51.jpg", alt: "Panikanda State" },
        { id: 59, category: "Videography", src: "/images/51.jpg", alt: "Panikanda State" },
        { id: 60, category: "Videography", src: "/images/51.jpg", alt: "Panikanda State" },
        
    ];

    // Filtering logic based on category
    const filteredCards = category === "ALL"
        ? cards.slice(0, 10) // Only show first 10 for "ALL"
        : cards.filter(card => card.category === category); // All matching for others

    return (
        <div className="container relative">
            {/* Heading */}
            <div className="absolute text-white py-8 text-left">
                <h3 className="text-4xl md:text-7xl font-light font-reckless">Portfolio</h3>
            </div>

            {/* Top border */}
            <div className="container absolute mt-30">
                <hr className="border-t-1 border-gray-400 my-8" />
            </div>

            {/* Category Filters */}
            <div className="flex items-center space-x-8 mt-50 text-left">
                {["ALL", "Fashion", "Product", "Commercial", "Photography", "Videography"].map(cat => (
                    <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`text-md font-medium hover:text-yellow-500 ${category === cat ? "text-white" : "text-white/60"}`}
                    >
                        {category === cat && <span className="text-white">►</span>} {cat.toUpperCase()}
                    </button>
                ))}
            </div>

            {/* Image Grid */}
            <div className="px-10 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredCards.map(card => (
                        <div
                            key={card.id}
                            className={`mb-4 break-inside-avoid ${
                                category === "ALL" && (card.id === 3 || card.id === 6) ? "col-span-2 row-span-2" : ""
                            }`}
                        >
                            <Image
                                src={card.src}
                                alt={card.alt}
                                width={305}
                                height={200}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-all">
                                {card.alt}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom border */}
            <div className="container absolute px-10">
                <hr className="border-t-1 border-gray-400" />
            </div>

            {/* Call to Action */}
            <div className="container absolute text-white py-16 text-left ml-10">
                <h2 className="text-3xl md:text-4xl font-light mb-4">Don’t settle for ordinary.</h2>
                <h3 className="text-4xl md:text-5xl font-light">
                    Let’s make your visuals <span className="text-yellow-500 font-reckless">extraordinary!</span>
                </h3>
                <div className="mt-20">
                    <Link href="/contact">
                        <button className="bg-transparent border-1 border-white text-white py-4 px-12 rounded-lg text-3xl">
                            Contact Us Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;
