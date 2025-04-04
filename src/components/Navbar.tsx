'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
          // className='text-3xl text-white py-1'
            whileHover={{ scale: 1.1 }}
          >
            <Image
            width={100}
            height={100}
            src={pathname === '/' ? (scrolled ? '/assets/logo/SynexCode_White_Logo.png' : '/assets/logo/SynexCode_Blue_Logo.png') : '/assets/logo/SynexCode_White_Logo.png'}
            alt='SynexCode'
            />
          </motion.div>
        </Link>

        <div className="hidden md:flex gap-6">
        <Link href={'/'} className="text-white font-medium hover:text-gray-300">
              Home
            </Link>
          {['Portfolio','Services', 'About', 'Contact'].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="text-white font-medium hover:text-gray-300">
              {item}
            </Link>
          ))}
        </div>

        <Link
  href="https://wa.me/923312144766"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="hidden md:flex mt-1 px-5 py-3 bg-[#25D366] text-white rounded-2xl font-semibold items-center gap-2 hover:bg-[#1EBE5F] transition">
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.48 2 2 6.48 2 12c0 2.23.66 4.3 1.8 6.05L2 22l4.18-1.78A9.97 9.97 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2m-.01 18c-1.6 0-3.12-.42-4.46-1.23L6 18l.92-3.38A7.98 7.98 0 0 1 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8.01 8m4.47-5.07c-.24-.12-1.42-.7-1.64-.78s-.38-.12-.54.12c-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06s-1.02-.38-1.94-1.15c-.72-.61-1.2-1.36-1.34-1.6-.14-.24-.01-.37.11-.5.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42s-.54-1.3-.74-1.78c-.2-.48-.4-.42-.54-.42h-.46c-.16 0-.42.06-.64.3s-.84.82-.84 2c0 1.18.86 2.32.98 2.48s1.7 2.72 4.12 3.8c.58.25 1.04.4 1.4.5.58.18 1.12.15 1.54.09.47-.07 1.42-.58 1.62-1.14s.2-1.04.14-1.14c-.06-.1-.22-.16-.46-.28"
      />
    </svg>
    Chat on WhatsApp
  </button>
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
    <Link href={'/'} className="text-white text-lg font-medium" onClick={() => setIsOpen(false)}>
      Home
    </Link>
    {['Portfolio', 'Services', 'About', 'Contact'].map((item) => (
      <Link key={item} href={`/${item.toLowerCase()}`} className="text-white text-lg font-medium" onClick={() => setIsOpen(false)}>
        {item}
      </Link>
    ))}
    <Link
      href="https://wa.me/923312144766"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => setIsOpen(false)} // Close menu when clicking WhatsApp button
    >
      <button className="mt-4 px-6 py-3 bg-[#25D366] text-white rounded-lg font-semibold flex items-center gap-2 hover:bg-[#1EBE5F] transition">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12c0 2.23.66 4.3 1.8 6.05L2 22l4.18-1.78A9.97 9.97 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2m-.01 18c-1.6 0-3.12-.42-4.46-1.23L6 18l.92-3.38A7.98 7.98 0 0 1 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8.01 8m4.47-5.07c-.24-.12-1.42-.7-1.64-.78s-.38-.12-.54.12c-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06s-1.02-.38-1.94-1.15c-.72-.61-1.2-1.36-1.34-1.6-.14-.24-.01-.37.11-.5.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42s-.54-1.3-.74-1.78c-.2-.48-.4-.42-.54-.42h-.46c-.16 0-.42.06-.64.3s-.84.82-.84 2c0 1.18.86 2.32.98 2.48s1.7 2.72 4.12 3.8c.58.25 1.04.4 1.4.5.58.18 1.12.15 1.54.09.47-.07 1.42-.58 1.62-1.14s.2-1.04.14-1.14c-.06-.1-.22-.16-.46-.28"
          />
        </svg>
        Chat on WhatsApp
      </button>
    </Link>
  </motion.div>
)}

    </motion.nav>
  );
}