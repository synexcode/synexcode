'use client';
import OurFounders from '@/components/OurFounders';
import OurValues from '@/components/OurValues';
import WhyChooseUs from '@/components/WhyChooseUs';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <>
      <section
        className="relative flex items-center justify-center h-[80vh] bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/assets/Slide2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-6 md:px-12">
          <motion.h1
            className="text-4xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About <span className="text-[#008EAA] bg-white px-2 py-1 rounded-2xl">SynexCode</span>
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Innovation, Excellence, and Cutting-Edge Software Solutions
          </motion.p>
          <motion.a
            href="/contact"
            className="mt-6 inline-block px-6 py-3 text-[#008EAA] bg-white font-semibold rounded-lg transition hover:bg-gray-200"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            Contact Us
          </motion.a>
        </div>
      </section>

      {/* Why Choose Us  */}
      <WhyChooseUs />
      {/* Our Founders */}
      <OurFounders/>
      {/* Our Values */}
      <OurValues/>

    </>
  );
}