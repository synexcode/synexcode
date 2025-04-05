'use client';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const features = [
  {
    title: 'Innovative Solutions',
    description: 'We leverage the latest technologies to develop creative, scalable, and efficient software solutions tailored to your business needs.',
  },
  {
    title: 'Expert Team',
    description: 'Our highly skilled engineers and developers bring years of experience in web, mobile, AI, and cloud computing solutions.',
  },
  {
    title: 'Customer-Centric Approach',
    description: 'We prioritize client satisfaction by deeply understanding their requirements and delivering customized solutions that drive success.',
  },
  {
    title: 'Cutting-Edge Technologies',
    description: 'We utilize modern frameworks, AI-driven solutions, and cloud-based architectures to keep your business ahead of the competition.',
  },
  {
    title: 'Robust Security',
    description: 'Our solutions are built with strong security measures to protect your data and ensure compliance with industry standards.',
  },
  {
    title: 'Seamless Integration',
    description: 'We ensure that our solutions smoothly integrate with your existing systems, enabling efficiency and minimizing disruptions.',
  },
  {
    title: 'Agile Development Process',
    description: 'We follow agile methodologies to deliver projects on time, with iterative improvements and continuous feedback implementation.',
  },
  {
    title: '24/7 Support & Maintenance',
    description: 'We provide ongoing support, performance monitoring, and updates to ensure your software runs flawlessly at all times.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
      <motion.h2 
  className="text-3xl md:text-4xl font-bold text-[#008EAA] mb-6 relative"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: false }}
>
  Why Choose SynexCode?
  <motion.div
    className="absolute left-1/2 ml-12 -bottom-2 w-32 h-[6px] -translate-x-1/2"
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

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          At SynexCode, we specialize in delivering cutting-edge, secure, and high-performance software solutions that help businesses thrive in the digital age.
        </p>
        <div className="flex overflow-x-auto md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 no-scrollbar">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="flex items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false }}
            >
              <CheckCircle className="text-[#FF8A00] w-36 md:w-20 h-36 md:h-20 mr-4" />
              <div className="text-left">
                <h3 className="text-xl font-semibold text-[#008EAA]">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
