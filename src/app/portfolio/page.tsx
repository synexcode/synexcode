'use client'
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const portfolioItems = [
  {
    title: "AI Chatbot for E-Commerce",
    description: "GPT-powered assistant for real-time customer interaction & automation.",
    image: "/assets/portfolio/chatbot.png",
    link: "#",
  },
  {
    title: "Furniture Mobile App",
    description: "Modern mobile UI with Flutter and real-time DB support.",
    image: "/assets/portfolio/furniture-app.png",
    link: "#",
  },
  {
    title: "Restaurant Website",
    description: "Food ordering platform with CMS, responsive UI, and seamless UX.",
    image: "/assets/portfolio/restaurant.png",
    link: "#",
  },
  {
    title: "AI Resume Builder",
    description: "Dynamic resume generator with AI suggestions and shareable links.",
    image: "/assets/portfolio/resume-builder.png",
    link: "#",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/portfolio.jpg"
            alt="Portfolio Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-[#008EAA] opacity-80" />
        </div>

        <motion.div 
          className="relative z-10 max-w-3xl px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            Our Portfolio
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            Turning your vision into powerful digital experiences.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-3 bg-white text-[#008EAA] font-semibold rounded-full shadow-md hover:bg-[#f1f1f1] transition"
            >
              Let’s Collaborate
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0f172a]">
            Featured Projects
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl shadow-lg border border-gray-100 overflow-hidden bg-white"
              >
                <Image 
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={300}
                  className="w-full h-52 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-[#0f172a] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <Link href={item.link}>
                    <span className="inline-block px-4 py-2 text-sm border border-[#008EAA] text-[#008EAA] hover:bg-[#008EAA] hover:text-white rounded-full transition duration-300">
                      View Project
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
