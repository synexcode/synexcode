'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';

const founders = [
    {
        name: 'GHANIYA KHAN',
        role: 'Co-Founder & CEO',
        image: '/assets/founders/ghaniya.jpg',
        description:
            'Ghaniya Khan is a visionary leader with expertise in business strategy and software solutions. She has led multiple successful tech ventures and is passionate about innovation, automation, and digital transformation.',
            instagram: "https://www.instagram.com/ghaniya08/?hl=en",
            linkedin: "https://www.linkedin.com/in/ghaniya-khan-138919308/",
            facebook: "https://www.facebook.com/profile.php?id=61554662968933",
            twitter: "/"
    },
    {
        name: 'M KASHAN MALIK AWAN',
        role: 'Co-Founder & CTO',
        image: '/assets/founders/kashan.png',
        description:
            'M Kashan Malik Awan is a Full Stack Developer, AI Chatbot Specialist, and Mobile App Developer. With extensive experience in MERN stack and AI-driven solutions, he is committed to building next-generation digital experiences.',
            instagram: "https://www.instagram.com/kashan_malik811/?hl=en",
            linkedin: "https://www.linkedin.com/in/kashan-malik-47374422a/",
            facebook: "https://www.facebook.com/kashanmalik.kashanmalik.9",
            twitter: "/"
    },
];

export default function OurFounders() {
    return (
        <section className="py-16 bg-gradient-to-r from-[#004E64] to-[#008EAA] rounded-3xl">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">

                {/* 🔥 Eye-Catching Animated Heading */}
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-white text-center mb-12 relative"
                    initial={{ opacity: 0, y: -20, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false }} // 🔥 Animation triggers every time it's in view
                    style={{
                        textShadow: "0px 0px 15px rgba(255, 255, 255, 0.8), 0px 0px 30px rgba(255, 255, 255, 0.5)", // Glowing effect
                    }}
                >
                    Meet Our Founders

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

                {/* 🔥 Animated Founder Sections */}
                <div className="flex overflow-x-auto gap-6 no-scrollbar px-4 md:grid md:grid-cols-2 lg:grid-cols-2">
  {founders.map((founder, index) => (
    <motion.div
      key={index}
      className="min-w-[320px] md:min-w-0 flex flex-col items-center text-center md:text-left gap-4 p-6 w-full h-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 transition-transform transform hover:scale-105"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
      viewport={{ once: false }}
    >
      {/* Image */}
      <div className="w-60 h-60 rounded-full overflow-hidden shadow-lg relative">
        <motion.div
          className="absolute inset-0 bg-black/10 rounded-full"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <Image
          src={founder.image}
          alt={founder.name}
          width={160}
          height={160}
          className="object-cover w-full h-full rounded-full transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Text */}
      <div className="text-white">
        <h3 className="text-xl font-semibold">{founder.name}</h3>
        <div className="relative w-full flex justify-center md:justify-start">
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 -bottom-2 w-28 h-[6px]"
            initial={{ scaleX: 0, opacity: 0, borderRadius: '50%' }}
            whileInView={{ scaleX: 1, opacity: 1, borderRadius: '50px' }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeInOut' }}
            viewport={{ once: false }}
            style={{
              boxShadow:
                '0px 0px 10px rgba(255, 138, 0, 0.8), 0px 0px 20px rgba(229, 46, 113, 0.9)',
              transformOrigin: 'left',
              background: 'linear-gradient(90deg, #FF8A00, #E52E71)',
              maskImage: 'radial-gradient(circle, white 60%, transparent 100%)',
            }}
          />
        </div>
        <p className="text-sm mt-3 text-[#FF8A00] font-medium">{founder.role}</p>
        <p className="text-sm text-gray-300 mt-3">{founder.description}</p>

        {/* Social Icons */}
        <div className="mt-4 flex justify-center md:justify-start gap-4">
          {founder.linkedin && founder.linkedin !== '/' && (
            <a
              href={founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#FF8A00] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {founder.instagram && founder.instagram !== '/' && (
            <a
              href={founder.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#FF8A00] transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          )}
          {founder.facebook && founder.facebook !== '/' && (
            <a
              href={founder.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#FF8A00] transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
          )}
          {founder.twitter && founder.twitter !== '/' && (
            <a
              href={founder.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#FF8A00] transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  ))}
</div>



            </div>
        </section>
    );
}
