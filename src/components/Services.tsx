'use client';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';



const services = [
  {
    icon: "💻",
    title: "Web Development",
    description: "Modern and responsive websites tailored to your business needs.",
    benefits: ["Custom design", "SEO optimized", "Fast loading speed"],
    technologies: ["React.js", "Next.js", "Tailwind CSS"],
    languages: ["JavaScript", "TypeScript", "HTML", "CSS"],
    bg: "/assets/services/web-development.jpg"
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    description: "Custom mobile app development for Android & iOS.",
    benefits: ["Cross-platform support", "User-friendly UI", "Fast performance"],
    technologies: ["Flutter", "React Native"],
    languages: ["Dart", "JavaScript", "Swift", "Kotlin"],
    bg: "/assets/services/app-development.jpg"
  },
  {
    icon: "🤖",
    title: "AI Chatbots",
    description: "Intelligent chatbot solutions for customer support and automation.",
    benefits: ["24/7 customer support", "Automated responses", "Multi-platform integration"],
    technologies: ["Dialogflow", "Flowise", "Kommunicate"],
    languages: ["JavaScript", "Python"],
    bg: "/assets/services/ai-chatbot.png"
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description: "Creating user-friendly and visually appealing designs.",
    benefits: ["Intuitive interface", "Enhanced user experience", "Mobile responsive"],
    technologies: ["Figma", "Sketch", "Adobe XD"],
    languages: ["English"],
    bg: "/assets/services/uiux-designing.jpg"
  },
  {
    icon: "📈",
    title: "Digital Marketing",
    description: "SEO, social media, and online marketing strategies to grow your brand.",
    benefits: ["Increase brand awareness", "Targeted marketing strategies", "Lead generation"],
    technologies: ["Google Analytics", "Facebook Ads", "Google Ads", "SEO tools"],
    languages: ["English", "Spanish", "French"],
    bg: "/assets/services/digital-marketing.jpg"
  },
  {
    icon: "🖌️",
    title: "Graphic Designing",
    description: "Creative and impactful graphic designs to elevate your brand identity.",
    benefits: ["Unique branding", "High-quality visuals", "Custom illustrations"],
    technologies: ["Adobe Photoshop", "Illustrator", "Canva"],
    languages: ["English"],
    bg: "/assets/services/graphic-designing.jpg"
  },
  {
    icon: "🛠️",
    title: "IT Consultancy",
    description: "Expert advice and strategic IT solutions for businesses.",
    benefits: ["Tailored solutions", "Business process optimization", "Cost efficiency"],
    technologies: ["Cloud computing", "Networking", "Cybersecurity"],
    languages: ["English", "German", "French"],
    bg: "/assets/services/it-consultancy.jpg"
  },
  {
    icon: "🏢",
    title: "Custom Enterprise Software",
    description: "Tailored software solutions to meet unique business requirements.",
    benefits: ["Scalability", "Custom workflows", "Integration with existing systems"],
    technologies: ["Java", "C#", "Python", "Node.js"],
    languages: ["Java", "C#", "Python", "SQL"],
    bg: "/assets/services/software.jpg"
  },
  {
    icon: "📝",
    title: "Content Writing",
    description: "Engaging and SEO-friendly content for websites, blogs, and social media.",
    benefits: ["High-quality content", "SEO optimized", "Timely delivery"],
    technologies: ["WordPress", "Grammarly", "Yoast SEO"],
    languages: ["English", "Spanish", "French"],
    bg: "/assets/services/content-writing.jpg"
  }
];



export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<any | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Customize as needed
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#008EAA] text-center mb-12 relative"
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          style={{
            textShadow: "0px 0px 15px rgba(255, 255, 255, 0.8), 0px 0px 30px rgba(255, 255, 255, 0.5)",
          }}
        >
          Tailored
        <span className='mx-3 relative'>
  Solutions
  <motion.div
    className="hidden md:block absolute -left-3 ml-8 md:ml-16 md:-bottom-1 w-32 h-[6px] -translate-x-1/2"
    initial={{ scaleX: 0, opacity: 0, borderRadius: "50%" }}
    whileInView={{ scaleX: 1, opacity: 1, borderRadius: "50px" }}
    transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
    viewport={{ once: false }}
    style={{
      boxShadow: "0px 0px 10px rgba(255, 138, 0, 0.8), 0px 0px 20px rgba(229, 46, 113, 0.9)",
      transformOrigin: "center",
      background: "linear-gradient(90deg, #FF8A00, #E52E71)",
      maskImage: "radial-gradient(circle, white 60%, transparent 100%)",
    }}
  />
</span>

          for Your Success
          <motion.div
            className="absolute left-1/2 md:left-2/3 -bottom-2 w-32 h-[6px] -translate-x-1/2"
            initial={{ scaleX: 0, opacity: 0, borderRadius: "50%" }}
            whileInView={{ scaleX: 1, opacity: 1, borderRadius: "50px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
            viewport={{ once: false }}
            style={{
              boxShadow: "0px 0px 10px rgba(255, 138, 0, 0.8), 0px 0px 20px rgba(229, 46, 113, 0.9)",
              transformOrigin: "center",
              background: "linear-gradient(90deg, #FF8A00, #E52E71)",
              maskImage: "radial-gradient(circle, white 60%, transparent 100%)",
            }}
          />
        </motion.h2>

        {/* Responsive Scrollable Cards on Mobile */}
        <div className="relative">
  {/* Left Button */}
  <button
    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-[#008EAA] text-white p-2 rounded-full shadow-md z-10 md:hidden"
    onClick={() => scroll("left")}
  >
    ◀
  </button>

  {/* Scrollable Services */}
  <div
    ref={scrollRef}
    className="flex overflow-x-auto gap-6 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 no-scrollbar"
  >
    {services.map((service, index) => (
      <motion.div
        key={index}
        className="relative flex-shrink-0 w-80 md:w-auto p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition overflow-hidden cursor-pointer snap-start"
        whileHover={{ scale: 1.05 }}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        onClick={() => setSelectedService(service)}
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
          <h3 className="text-xl font-semibold text-gray-800 mb-2 relative">
            {service.title}
            {/* underline motion */}
            <motion.div
              className="absolute left-1/3 w-28 h-[6px] mt-1"
              initial={{ scaleX: 0, opacity: 0, borderRadius: "50%" }}
              whileInView={{ scaleX: 1, opacity: 1, borderRadius: "50px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
              viewport={{ once: false }}
              style={{
                boxShadow: "0px 0px 10px rgba(255, 138, 0, 0.8), 0px 0px 20px rgba(229, 46, 113, 0.9)",
                transformOrigin: "left",
                background: "linear-gradient(90deg, #FF8A00, #E52E71)",
                maskImage: "radial-gradient(circle, white 60%, transparent 100%)",
              }}
            />
          </h3>
          <p className="text-gray-600 mt-4">{service.description}</p>
        </div>
      </motion.div>
    ))}
  </div>

  {/* Right Button */}
  <button
    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#008EAA] text-white p-2 rounded-full shadow-md z-10 md:hidden"
    onClick={() => scroll("right")}
  >
    ▶
  </button>
</div>

      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              onClick={() => setSelectedService(null)}
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold text-[#008EAA]">{selectedService.title}</h2>
            <p className="text-gray-600 mt-2">{selectedService.description}</p>
            <h3 className="text-lg font-semibold mt-4 text-gray-800">Benefits:</h3>
            <ul className="list-disc list-inside text-gray-600">
              {selectedService.benefits.map((benefit: string, i: number) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mt-4 text-gray-800">Technologies Used:</h3>
            <p className="text-gray-600">{selectedService.technologies.join(", ")}</p>
            <h3 className="text-lg font-semibold mt-4 text-gray-800">Languages Used:</h3>
            <p className="text-gray-600">{selectedService.languages.join(", ")}</p>
          </motion.div>
        </div>
      )}
    </section>
  );
}
