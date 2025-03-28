'use client'
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Services from "@/components/Services";

export default function ServicesPage() {
  return (
    <>
    <section className="relative w-full h-[80vh] flex items-center justify-center text-center text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/assets/services.jpg" // Replace with your actual image path
          alt="Services Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-[#008EAA] opacity-70"></div>
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-3xl px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: false }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          Transform Your Ideas into Reality
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          We offer innovative solutions to bring your vision to life with cutting-edge technology and expertise.
        </p>
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            viewport={{ once: false }}
            className="mt-6 px-6 py-3 bg-white text-[#008EAA] font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
          >
            Get Started
          </motion.button>
        </Link>
      </motion.div>
    </section>


    <Services/>
    </>
  );
};

