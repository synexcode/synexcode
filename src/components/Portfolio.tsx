'use client';
import React from "react"
import { motion } from 'framer-motion';
import Link from "next/link";
const projectData = [
  {
    id: 1,
    title: "Makeup Store",
    link:"https://e-commerce-sigma-tan.vercel.app/",
    description: "A beautifully designed and fully responsive makeup store built with Next.js. Features smooth navigation, product listings, and a clean UI optimized for all devices",
    tag: ["Web Development"],
    image: "/projects/proj1.png",
  },
  {
    id: 5,
    title: "Quiz Bot",
    description:"An interactive chatbot that quizzes users with multiple-choice questions. Built with JavaScript, it delivers instant feedback, tracks scores, and creates an engaging quiz experience.",
    link:"https://kashan-s-quiz-bot.vercel.app/",
    tag: ["Chatbot"],
    image: "/projects/chatbot2.jpg",
  },
  {
    id: 7,
    title: "Medic – Mobile App",
    link:"https://drive.google.com/file/d/1a7p9g7yC9OllgGXN6VDqDHtJhhYqy3FC/view",
    description:"A user-friendly mobile application built using Flutter and Dart, allowing users to book online doctor appointments and order medicines from the comfort of their home. Designed with convenience and accessibility in mind for a seamless healthcare experience.",
    subtitle: "AI case study",
    tag: ["Mobile App Development"],
    image: "/projects/mobileapp1.jpg",
  },
  {
    id: 9,
    title: "UI Design (Figma)",
    link:"https://www.figma.com/design/xAvCZoIe74JVGEZAfBptTJ/Al-Midad-Maktab-Foudation?node-id=0-1&p=f&t=3QLdtIXeyA4zilVZ-0",
    description:
      "A modern and clean UI design created in Figma for a web-based foundation platform. Focused on user experience and accessibility, it showcases well-structured layouts, intuitive navigation, and a professional aesthetic ideal for development.",
    subtitle: "AI case study",
    tag: ["UI Design"],
    image: "/projects/figma1.png",
  },

];

export default function Portfolioo() {
  return (
    <div className="bg-gray-100">

      <div className="py-16 sm:py-20 px-4 sm:px-6 lg:px-28 bg-gray-100 rounded-2xl mx-3 ">
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
          Our
        <span className='mx-3 relative'>
  Projects
  <motion.div
    className="hidden md:block absolute -left-14 ml-8 md:ml-16 md:-bottom-1 w-32 h-[6px] -translate-x-1/2"
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
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 bg-white shadow-lg rounded-xl p-4 sm:p-6 transition-transform transform hover:scale-105"
            >
               <div className="w-full lg:hidden block sm:flex-1 h-[230px] sm:h-52 overflow-hidden bg-gray-200 rounded-xl">
                <img
                  src={project.image || ""}
                  alt={`Project ${project.id}`}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1 w-full">
                <p className="text-xs sm:text-sm text-gray-400 uppercase mb-1 sm:mb-2">
                  {Array.isArray(project.tag) ? project.tag.join(", ") : project.tag}
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                  {project.title}
                </h3>
                {project.description && (
                  <p className="text-sm text-gray-500 mb-1">{project.description}</p>
                )}
                <div className="text-[#008eaa] mt-1 sm:mt-2">
                <Link href={project.link || ""} target="_blank">
                  <svg
                    className="w-7 h-7 sm:w-7 sm:h-7 -rotate-45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                  </Link>
                </div>
              </div>
              <div className="w-full lg:block hidden sm:flex-1 h-40 sm:h-52 overflow-hidden bg-gray-200 rounded-xl">
                <img
                  src={project.image || ""}
                  alt={`Project ${project.id}`}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
        <button className="bg-[#008EAA] rounded-md p-[10px] text-white"><Link href={"/portfolio"}>See More</Link></button>
      </div>      </div>
    </div>
  );
}
