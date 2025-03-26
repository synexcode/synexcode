'use client';

import { motion } from 'framer-motion';

const portfolioItems = [
  {
    title: "E-Commerce Website",
    image: "/assets/Slide1.jpg",
    description: "A modern and fully responsive e-commerce platform with secure payment integration.",
  },
  {
    title: "AI Chatbot",
    image: "/assets/Slide2.jpg",
    description: "An intelligent chatbot powered by AI to automate customer support and inquiries.",
  },
  {
    title: "Mobile App Development",
    image: "/assets/Slide3.jpg",
    description: "A cross-platform mobile application for seamless user experience on both iOS and Android.",
  },
];

export default function Portfolio() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
