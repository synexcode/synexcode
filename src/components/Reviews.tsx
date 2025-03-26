'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: 'Ali Khan',
    review: 'Excellent service! The team delivered a fantastic website for my business.',
    rating: 5,
  },
  {
    name: 'Sara Ahmed',
    review: 'Highly professional and great communication throughout the project.',
    rating: 4,
  },
  {
    name: 'John Doe',
    review: 'Amazing experience! Highly recommended for AI chatbot development.',
    rating: 5,
  },
];

export default function Reviews() {
  const [selectedReview, setSelectedReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-100 text-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Client Reviews</h2>
        <div className="max-w-3xl mx-auto bg-white p-6 shadow-lg rounded-lg">
          <motion.p 
            key={selectedReview}
            className="text-lg text-gray-700 mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            "{reviews[selectedReview].review}"
          </motion.p>
          <h3 className="text-xl font-semibold text-gray-900">- {reviews[selectedReview].name}</h3>
          <div className="flex justify-center mt-2">
            {'⭐'.repeat(reviews[selectedReview].rating)}
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {reviews.map((_, index) => (
              <button 
                key={index} 
                className={`w-3 h-3 rounded-full ${index === selectedReview ? 'bg-blue-600' : 'bg-gray-400'}`} 
                onClick={() => setSelectedReview(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
