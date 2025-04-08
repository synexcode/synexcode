"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const projectData = [
  {
    id: 1,
    title: "Bally Website Research",
    subtitle: "UX case study",
    tag: "Next.Js Development",
    image: "/projects/proj1.png",
  },
  {
    id: 2,
    title: "AI Chatbot for E-Commerce",
    description: "GPT-powered assistant for real-time customer interaction & automation.",
    tag: "AI Project",
    image: "/projects/proj2.png",
  },
  {
    id: 3,
    title: "Bally Website Research",
    subtitle: "UX case study",
    tag: "Web Project",
    image: "/projects/proj3.png",
  },
  {
    id: 4,
    title: "Bally Website Research",
    subtitle: "AI case study",
    tag: "AI Project",
    image: "/projects/proj4.png",
  },
  {
    id: 5,
    title: "Bally Website Research",
    subtitle: "AI case study",
    tag: "ChatBoat",
    image: "/projects/proj5.png",
  },
  {
    id: 6,
    title: "Bally Website Research",
    subtitle: "AI case study",
    tag: "Mern Stalk Project",
    image: "/projects/proj6.png",
  },
  {
    id: 7,
    title: "Bally Website Research",
    subtitle: "AI case study",
    tag: "UI desing",
    image: "/projects/proj7.png",
  },
  {
    id: 8,
    title: "Bally Website Research",
    subtitle: "AI case study",
    tag: "Graphic Designing",
    image: "/projects/proj8.png",
  },
  {
    id: 9,
    title: "Bally Website Research",
    subtitle: "AI case study",
    tag: "Mobile App development",
    image: "/projects/proj8.png",
  },
  {
    id: 10,
    title: "Bally Website Research",
    subtitle: "AI case study",
    tag: "Degital Marketinh",
    image: "/projects/proj8.png",
  },
  {
    id: 11,
    title: "Bally Website Research",
    subtitle: "AI case study",
    tag: "Contant writing",
    image: "/projects/proj8.png",
  },
];

// export default function RecentProjects() {
//   const [activeTag, setActiveTag] = useState("All");

//   const allTags = ["All", ...Array.from(new Set(projectData.map((project) => project.tag)))];

//   const filteredProjects =
//     activeTag === "All"
//       ? projectData
//       : projectData.filter((project) => project.tag === activeTag);

//   return (
//     <div>
//       {/* Header Section */}
//       <section className="relative w-full h-[80vh] flex items-center justify-center text-center text-white">
//         <div className="absolute inset-0 z-0">
//           <Image
//             src="/assets/portfolio.png"
//             alt="Portfolio Background"
//             layout="fill"
//             objectFit="cover"
//             quality={100}
//           />
//           <div className="absolute inset-0 bg-[#008EAA] opacity-80" />
//         </div>

//         <motion.div
//           className="relative z-10 max-w-3xl px-6"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//         >
//           <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
//             Our Portfolio
//           </h1>
//           <p className="mt-4 text-lg md:text-xl text-gray-200">
//             Turning your vision into powerful digital experiences.
//           </p>
//           <Link href="/contact">
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               className="mt-6 px-6 py-3 bg-white text-[#008EAA] font-semibold rounded-full shadow-md hover:bg-[#f1f1f1] transition"
//             >
//               Let’s Collaborate
//             </motion.button>
//           </Link>
//         </motion.div>
//       </section>

//       {/* Filter Buttons */}
//       <div className="py-20 bg-white lg:px-28">
//         <h2 className="text-black text-4xl font-bold mb-8">Recent Projects</h2>

//         <div className="flex flex-wrap gap-4 mb-12">
//           {allTags.map((tag) => (
//             <button
//               key={tag}
//               onClick={() => setActiveTag(tag)}
//               className={`px-4 py-2 rounded-full border ${
//                 activeTag === tag
//                   ? "bg-[#008EAA] text-white"
//                   : "border-gray-300 text-gray-600 hover:bg-gray-100"
//               }`}
//             >
//               {tag}
//             </button>
//           ))}
//         </div>

//         {/* Project Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {filteredProjects.map((project) => (
//             <div key={project.id} className="flex items-center gap-6">
//               <div className="flex-1">
//                 <p className="text-sm text-gray-400 uppercase mb-2">
//                   {project.tag}
//                 </p>
//                 <h3 className="text-3xl font-bold text-gray-900 mb-4">
//                   {project.title}
//                 </h3>
//                 {project.description && (
//                   <p className="text-sm text-gray-500 mb-1">
//                     {project.description}
//                   </p>
//                 )}
//                 <div className="text-[#008eaa]">
//                   <svg
//                     className="w-6 h-6 rotate-45"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M5 12h14M12 5l7 7-7 7"
//                     />
//                   </svg>
//                 </div>
//               </div>

//               <div className="flex-1 w-full h-52 overflow-hidden bg-gray-200 rounded-xl">
//                 <img
//                   src={project.image}
//                   alt={`Project ${project.id}`}
//                   className="object-cover w-full h-full"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


export default function RecentProjects() {
  const [activeTag, setActiveTag] = useState("All");

  const allTags = ["All", ...Array.from(new Set(projectData.map((project) => project.tag)))];

  const filteredProjects =
    activeTag === "All"
      ? projectData
      : projectData.filter((project) => project.tag === activeTag);

  return (
    <div>
      {/* Header Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/portfolio.png"
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

      {/* Filter Buttons */}
      <div className="py-16 sm:py-20 bg-white px-4 sm:px-6 lg:px-28">
        <h2 className="text-black text-3xl sm:text-4xl font-bold mb-8">
          Recent Projects
        </h2>

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

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5"
            >
              <div className="flex-1 w-full">
                <p className="text-xs sm:text-sm text-gray-400 uppercase mb-1 sm:mb-2">
                  {project.tag}
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                  {project.title}
                </h3>
                {project.description && (
                  <p className="text-sm text-gray-500 mb-1">
                    {project.description}
                  </p>
                )}
                <div className="text-[#008eaa] mt-1 sm:mt-2">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 rotate-45"
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

              <div className="flex-1 w-full h-40 sm:h-52 overflow-hidden bg-gray-200 rounded-xl">
                <img
                  src={project.image}
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
