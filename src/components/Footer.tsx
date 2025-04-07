'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-4 sm:grid-cols-2 gap-10 text-center sm:text-left">
        
        {/* Company Info */}
        <div className="flex flex-col items-center sm:items-start">
          <Link href="/">
            <motion.div whileHover={{ scale: 1.05 }} className="mb-4">
              <Image
                src="/assets/logo/SynexCode_Blue_Logo.png"
                alt="SynexCode"
                width={160}
                height={160}
              />
            </motion.div>
          </Link>
          <p className="text-sm leading-relaxed">
            Empowering businesses with cutting-edge software, mobile apps, AI chatbots, and more. Your vision, our code.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white transition">Our Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-white transition">Portfolio</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Technologies */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-white font-semibold mb-4">Technologies</h3>
          <ul className="space-y-2 text-sm">
            <li>Next.js & React.js</li>
            <li>Flutter & Dart</li>
            <li>Node.js & Express</li>
            <li>AI / GPT Integration</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>
              Email:{" "}
              <a href="mailto:contact@synexcode.com" className="text-blue-500 hover:underline">
                contact@synexcode.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:+923312144766" className="text-blue-500 hover:underline">
                +92 331 2144766
              </a>
            </li>
            <li>Karachi, Pakistan</li>
          </ul>

          <div className="flex space-x-4 mt-4">
            <a href="https://www.linkedin.com/in/synex-code-119039359/" className="text-gray-400 hover:text-white transition"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/synexcode/?hl=en" className="text-gray-400 hover:text-white transition"><FaInstagram /></a>
            <a href="https://www.facebook.com/profile.php?id=61574156617831" className="text-gray-400 hover:text-white transition"><FaFacebookF /></a>
            <a href="https://github.com/synexcode" className="text-gray-400 hover:text-white transition"><FaGithub /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 text-center text-sm">
        © {new Date().getFullYear()} SynexCode. All rights reserved.
      </div>
    </footer>
  );
}
