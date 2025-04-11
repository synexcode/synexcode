'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const images = [
  '/assets/Slide1.jpg',
  '/assets/slide2.jpg',
  '/assets/slide3.jpg',
  '/assets/slide4.jpg'
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex items-center justify-center h-screen text-white text-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center w-full h-full"
            style={{ backgroundImage: `url(${img})`, opacity: index === currentImage ? 1 : 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImage ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}
      </div>

      <div className="container px-6 md:px-12 lg:px-16 relative z-10">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 sm:mt-20 mt-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to <span className="text-[#008EAA] bg-white px-2 py-1 rounded-2xl">SynexCode</span>
        </motion.h1>



        <motion.p
          className="text-lg md:text-xl mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Innovate with Code – Web, Mobile, and AI Solutions
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Link href="/services">
            <button className="px-6 py-3 bg-white text-[#008EAA] rounded-lg font-semibold hover:bg-gray-200 transition">
              Explore Services
            </button>
          </Link>
          <Link href="/contact">
            <button className="px-6 py-3 border border-white rounded-lg font-semibold hover:bg-white hover:text-[#008EAA] transition">
              Get in Touch
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
