'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  { icon: "💻", title: "Web Development", description: "Modern and responsive websites tailored to your business needs.", bg: "/assets/services/web-development.jpg" },
  { icon: "📱", title: "Mobile App Development", description: "Custom mobile app development for Android & iOS.", bg: "/assets/services/app-development.jpg" },
  { icon: "🤖", title: "AI Chatbots", description: "Intelligent chatbot solutions for customer support and automation.", bg: "/assets/services/ai-chatbot.png" },
  { icon: "📈", title: "Digital Marketing", description: "SEO, social media, and online marketing strategies to grow your brand.", bg: "/assets/services/digital-marketing.jpg" },
  { icon: "🎨", title: "UI/UX Design", description: "Creating user-friendly and visually appealing designs.", bg: "/assets/services/uiux-designing.jpg" },
  { icon: "🛠️", title: "IT Consultancy", description: "Expert advice and strategic IT solutions for businesses.", bg: "/assets/services/it-consultancy.jpg" },
  { icon: "🏢", title: "Custom Enterprise Software", description: "Tailored software solutions to meet unique business requirements.", bg: "/assets/services/software.jpg" },
  { icon: "📝", title: "Content Writing", description: "Engaging and SEO-friendly content for websites, blogs, and social media.", bg: "/assets/services/content-writing.jpg" }
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
        {/* 🔥 Eye-Catching Animated Heading */}
        <motion.h2
                    className="text-3xl md:text-4xl font-bold text-[#008EAA] text-center mb-12 relative"
                    initial={{ opacity: 0, y: -20, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false }} // 🔥 Animation triggers every time it's in view
                    style={{
                        textShadow: "0px 0px 15px rgba(255, 255, 255, 0.8), 0px 0px 30px rgba(255, 255, 255, 0.5)", // Glowing effect
                    }}
                >
                   Tailored Solutions for Your Success 

                    <motion.div
                        className="absolute left-1/2 -bottom-2 w-32 h-[6px] -translate-x-1/2"
                        initial={{ scaleX: 0, opacity: 0, borderRadius: "50%" }}
                        whileInView={{ scaleX: 1, opacity: 1, borderRadius: "50px" }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
                        viewport={{ once: false }}
                        style={{
                            boxShadow: "0px 0px 10px rgba(255, 138, 0, 0.8), 0px 0px 20px rgba(229, 46, 113, 0.9)", // Glowing effect
                            transformOrigin: "center", // Animation starts from center
                            background: "linear-gradient(90deg, #FF8A00, #E52E71)", // Vibrant gradient
                            maskImage: "radial-gradient(circle, white 60%, transparent 100%)", // Smooth edges effect
                        }}
                    />
                </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="relative p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition overflow-hidden"
              whileHover={{ scale: 1.05 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === index && (
                <motion.div 
                  className="absolute inset-0 bg-cover bg-center opacity-40 transition duration-300"
                  style={{ backgroundImage: `url(${service.bg})` }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                  exit={{ opacity: 0 }}
                />
              )}
              <div className="relative z-10">
                <div className="text-5xl text-[#008EAA] mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}