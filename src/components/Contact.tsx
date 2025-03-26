'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e : any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e : any) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Get in Touch</h2>
        <motion.form 
          className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="mb-4">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name} 
              onChange={handleChange} 
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008EAA]"
              required
            />
          </div>
          <div className="mb-4">
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008EAA]"
              required
            />
          </div>
          <div className="mb-4">
            <textarea 
              name="message"  
              placeholder="Your Message" 
              value={formData.message} 
              onChange={handleChange} 
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008EAA]"
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full py-3 bg-[#008EAA] text-white font-semibold rounded-lg hover:bg-[#006b88] transition"
          >
            Send Message
          </button>
          {submitted && <p className="mt-4 text-green-600">Message sent successfully!</p>}
        </motion.form>
      </div>
    </section>
  );
}
