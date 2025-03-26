'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all ${scrolled ? 'bg-[#008EAA] shadow-lg' : 'bg-transparent'}`} 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/">
          <motion.div 
            className="text-white text-2xl font-bold"
            whileHover={{ scale: 1.1 }}
          >
            SynexCode
          </motion.div>
        </Link>

        <div className="hidden md:flex gap-6">
        <Link href={'/'} className="text-white font-medium hover:text-gray-300">
              Home
            </Link>
          {['Services', 'About', 'Contact'].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="text-white font-medium hover:text-gray-300">
              {item}
            </Link>
          ))}
        </div>

        <Link href="/get-started">
          <motion.button 
            className="hidden md:block px-5 py-2 bg-white text-[#008EAA] rounded-lg font-semibold hover:bg-gray-200 transition"
            whileHover={{ scale: 1.1 }}
          >
            Get Started
          </motion.button>
        </Link>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <motion.div 
          className="md:hidden bg-[#008EAA] text-white p-6 absolute w-full top-16 left-0 flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link href={'/'} className="text-white text-lg font-medium">
              Home
            </Link>
          {['Services', 'About', 'Contact'].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="text-white text-lg font-medium">
              {item}
            </Link>
          ))}
          <Link href="/get-started">
            <button className="mt-4 px-6 py-3 bg-white text-[#008EAA] rounded-lg font-semibold hover:bg-gray-200 transition">
              Get Started
            </button>
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}