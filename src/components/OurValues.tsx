import { motion } from "framer-motion";
import { Lightbulb, ShieldCheck, Users, TrendingUp, ChevronRight, ChevronLeft } from "lucide-react"; // Icons
import { useRef } from "react"; // To create the scroll ref

const values = [
  { icon: <Lightbulb size={40} />, title: "Innovation", desc: "We embrace creativity and cutting-edge technology to solve problems in unique ways." },
  { icon: <ShieldCheck size={40} />, title: "Integrity", desc: "Honesty and transparency are at the core of everything we do." },
  { icon: <Users size={40} />, title: "Collaboration", desc: "Teamwork and communication drive our success." },
  { icon: <TrendingUp size={40} />, title: "Growth", desc: "We continuously strive to improve and push boundaries." },
];

export default function OurValues() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 text-[#008EAA] bg-gray-200">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12 relative"
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
        style={{
          textShadow: "0px 0px 15px rgba(255, 255, 255, 0.8), 0px 0px 30px rgba(255, 255, 255, 0.5)",
        }}
      >
        Our Values
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

      <div className="relative">
        {/* Scroll Buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute z-10 left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#FF8A00] to-[#E52E71] text-white p-2 rounded-full backdrop-blur-sm flex md:hidden"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={() => scroll('right')}
          className="absolute z-10 right-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#FF8A00] to-[#E52E71] text-white p-2 rounded-full backdrop-blur-sm flex md:hidden"
        >
          <ChevronRight />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 no-scrollbar px-4"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-72 md:w-auto flex flex-col items-center p-6 rounded-xl bg-[#008EAA] backdrop-blur-lg border border-white/20 shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center text-white bg-gradient-to-r from-[#FF8A00] to-[#E52E71] rounded-full shadow-lg">
                {value.icon}
              </div>

              {/* Title with animated underline */}
              <h3 className="text-xl font-semibold mt-4 relative text-white">
                {value.title}
                <motion.div
                  className="absolute left-0 -bottom-2 w-28 h-[6px]"
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

              {/* Description */}
              <p className="text-gray-300 text-center mt-2">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
