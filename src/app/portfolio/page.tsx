
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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
    id: 2,
    title: "Nike Store",
    link:"https://nikestoregiaic.vercel.app/",
    description: "A modern, fully responsive online store for Nike products, developed with Next.js. This eCommerce site features smooth navigation, easy product search, and an intuitive user interface optimized for various devices.",
    tag: ["Web Development"],
    image: "/projects/proj2.png",
  },
  {
    id: 3,
    title: "Green Special Chatbot",
    link:"https://green-special.vercel.app/",
    description : "A JavaScript-powered chatbot designed for a food delivery service. It helps users browse menus, place orders, and get responses in real-time through a sleek and intuitive interface.",
    subtitle: "UX case study",
    tag: ["Chatbot"],
    image: "/projects/chatbot1.jpg",
  },
  {
    id: 4,
    title: "Sportswear Store",
    link:"https://sportswears.vercel.app/",
    subtitle: "AI case study",
    description: "A sleek, responsive online sportswear store created with Next.js and Tailwind CSS. The site offers an intuitive shopping experience with fast loading times and smooth navigation for a variety of sports products.",
    tag: ["Web Development"],
    image: "/projects/proj4.png",
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
    id: 6,
    title: "University",
    link:"https://eduforduniversityclone.netlify.app/",
    description:"A responsive and modern clone of a university website, built using HTML, CSS, and JavaScript. This project highlights clean layout design, smooth scrolling, and structured content sections perfect for showcasing academic programs and campus life.",
    tag: ["Web Development"],
    image: "/projects/proj5.png",
  },
  {
    id: 12,
    title: "KM Foods – Q-Commerce",
    link:"https://km-foods.vercel.app/",
    subtitle: "AI case study",
    description: "A dynamic food delivery website built with Next.js, offering quick commerce features. This website includes real-time order tracking, fully responsive design, and a user-friendly interface for fast food orders and deliveries.",
    tag: ["Web Development"],
    image: "/projects/proj7.png",
  },
  {
    id: 10,
    title: "Sites By Kashan – Chatbot ",
    link:"https://sitesbykashan.netlify.app/",
    description:
      "A simple and efficient JavaScript chatbot embedded within a portfolio website. It assists visitors with navigation, answering common queries, and showcasing the developer’s interactive UI skills. This chatbot is used in personal Protfolio.",
    tag: ["Chatbot"],
    image: "/projects/chatbot3.jpg",
  },
  {
    id: 7,
    title: "Medic – Mobile App",
    description:"A user-friendly mobile application built using Flutter and Dart, allowing users to book online doctor appointments and order medicines from the comfort of their home. Designed with convenience and accessibility in mind for a seamless healthcare experience.",
    subtitle: "AI case study",
    tag: ["Mobile App Development"],
    image: "/projects/mobileapp1.jpg",
  },
  {
    id: 8,
    title: "Food Website – Q-Commerce",
    link:"https://hackaton-eight-chi.vercel.app/",
    description:
      "A fast and dynamic quick-commerce food website. Includes both frontend and backend + Admin Dashboard with complete responsiveness and real-time order flow.",
    subtitle: "UX case study",
    tag: ["Web Development"],
    image: "/projects/proj3.png",
  },
  {
    id: 9,
    title: "UI Design (Figma)",
    description:
      "A modern and clean UI design created in Figma for a web-based foundation platform. Focused on user experience and accessibility, it showcases well-structured layouts, intuitive navigation, and a professional aesthetic ideal for development.",
    subtitle: "AI case study",
    tag: ["UI Design"],
    image: "/projects/figma1.png",
  },
  {
    id: 11,
    title: "Makeup Blog",
    link:"https://beautyblog3.vercel.app/",
    description: "A fast, SEO-optimized blog website developed with Next.js, tailored for makeup enthusiasts. Combines clean UI design with well-crafted content to offer both aesthetic appeal and valuable beauty insights.",
    subtitle: "AI case study",
    tag: ["Web Development", "Content Writing"],
    image: "/projects/proj8.png",
  },
  {
    id: 13,
    title: "Blog on Nextjs",
    link:"https://nextjsblogg.vercel.app/",
    description:"A sleek and responsive blog platform crafted with Next.js, featuring SEO-friendly architecture and optimized performance. Combines engaging, well-written content with a smooth user experience and clean, modern UI.",
    subtitle: "AI case study",
    tag: ["Web Development", "Content Writing"],
    image: "/projects/proj6.png",
  },
];

export default function RecentProjects() {
  const [activeTag, setActiveTag] = useState("All");

  const allTags = [
    "All",
    ...Array.from(
      new Set(
        projectData.flatMap((project) =>
          Array.isArray(project.tag) ? project.tag : [project.tag]
        )
      )
    ),
  ];

  const filteredProjects =
    activeTag === "All"
      ? projectData
      : projectData.filter((project) =>
          Array.isArray(project.tag)
            ? project.tag.includes(activeTag)
            : project.tag === activeTag
        );

  return (
    <div>
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
          className="relative z-10 max-w-3xl px-4 sm:px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg">
            Our Portfolio
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200">
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

      <div className="py-16 sm:py-20 bg-white px-4 sm:px-6 lg:px-28">
        <h2 className="text-black text-3xl sm:text-4xl font-bold mb-8">Our Top Projects</h2>
        <div className="flex flex-wrap gap-3 sm:gap-4 mb-12">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-full border text-sm sm:text-base ${
                activeTag === tag
                  ? "bg-[#008EAA] text-white"
                  : "border-gray-300 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5"
            >
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
                </div>
              </div>
              <div className="w-full sm:flex-1 h-40 sm:h-52 overflow-hidden bg-gray-200 rounded-xl">
                <img
                  src={project.image || ""}
                  alt={`Project ${project.id}`}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
