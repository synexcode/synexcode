'use client';

import { motion } from 'framer-motion';

const services = [
  { icon: "💻", title: "Web Development", description: "Modern and responsive websites tailored to your business needs." },
  { icon: "📱", title: "Mobile Apps", description: "Custom mobile app development for Android & iOS." },
  { icon: "🤖", title: "AI Chatbots", description: "Intelligent chatbot solutions for customer support and automation." },
  { icon: "📈", title: "Digital Marketing", description: "SEO, social media, and online marketing strategies to grow your brand." },
  { icon: "⚙️", title: "Software Solutions", description: "Custom software solutions to streamline your business operations." },
  { icon: "📝", title: "Content Writing", description: "Engaging and SEO-friendly content for websites, blogs, and social media." }
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl text-[#008EAA] mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
