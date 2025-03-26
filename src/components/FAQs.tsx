'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  { question: "What services does SynexCode offer?", answer: "We provide web development, mobile apps, AI chatbot development, digital marketing, and more." },
  { question: "How can I contact SynexCode?", answer: "You can reach us through our contact page or email us at contact@synexcode.com." },
  { question: "Do you offer custom software solutions?", answer: "Yes, we build tailored software solutions to meet your business needs." },
  { question: "What technologies do you use?", answer: "We specialize in Next.js, React, Flutter, AI, and cloud-based solutions." },
  { question: "Can you develop both Android and iOS apps?", answer: "Yes, we create cross-platform mobile apps using Flutter for seamless performance." }
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto text-left">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className="bg-white shadow-lg rounded-lg p-5 mb-4 cursor-pointer"
              whileTap={{ scale: 0.98 }}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                <span className="text-xl font-bold">{activeIndex === index ? '-' : '+'}</span>
              </div>
              {activeIndex === index && (
                <motion.p 
                  className="mt-2 text-gray-600"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}