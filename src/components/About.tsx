'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">About SynexCode</h2>
        
        <motion.div 
          className="max-w-6xl mx-auto bg-white p-10 shadow-lg rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            SynexCode is a cutting-edge software house co-founded by <strong>M. Kashan Malik Awan</strong> and <strong>Ghaniya Khan</strong>. 
            We specialize in full-stack web development, mobile applications, AI-powered chatbots, and UI/UX design. 
            Our mission is to innovate and deliver top-tier digital solutions tailored to your business needs.
          </p>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <Image src="/assets/kashan.jpg" alt="M. Kashan Malik Awan" width={200} height={200} className="mx-auto rounded-full mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900">M. Kashan Malik Awan</h3>
              <p className="text-gray-700">Co-Founder | Full Stack Developer | AI Chatbot Expert</p>
              <a href="https://www.linkedin.com/in/kashan-malik-47374422a/" target="_blank" className="text-blue-600 mt-2 inline-block">LinkedIn Profile</a>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <Image src="/assets/ghaniya.jpg" alt="Ghaniya Khan" width={200} height={200} className="mx-auto rounded-full mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900">Ghaniya Khan</h3>
              <p className="text-gray-700">Co-Founder | Web Developer | UI/UX Designer</p>
              <a href="https://www.linkedin.com/in/ghaniya-khan-138919308/" target="_blank" className="text-blue-600 mt-2 inline-block">LinkedIn Profile</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}