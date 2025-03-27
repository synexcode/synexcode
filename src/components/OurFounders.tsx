'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const founders = [
    {
        name: 'GHANIYA KHAN',
        role: 'Co-Founder & CEO',
        image: '/assets/founders/ghaniya.jpg',
        description:
            'Ghaniya Khan is a visionary leader with expertise in business strategy and software solutions. She has led multiple successful tech ventures and is passionate about innovation, automation, and digital transformation.',
    },
    {
        name: 'M KASHAN MALIK AWAN',
        role: 'Co-Founder & CTO',
        image: '/assets/founders/kashan.jpg',
        description:
            'M Kashan Malik Awan is a Full Stack Developer, AI Chatbot Specialist, and Mobile App Developer. With extensive experience in MERN stack and AI-driven solutions, he is committed to building next-generation digital experiences.',
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
                {founders.map((founder, index) => (
                    <motion.div
                        key={index}
                        className={`flex flex-col md:flex-row items-center gap-8 mb-12 p-8 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 transition-transform transform hover:scale-105 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                            }`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                        viewport={{ once: false }} // 🔥 Ensures animation runs every time in view
                    >
                        {/* Founder Image - Modern Hover Effect */}
                        <div className="w-72 h-72 md:w-80 md:h-96 flex-shrink-0 overflow-hidden rounded-lg shadow-lg relative">
                            <motion.div
                                className="absolute inset-0 bg-black/10 rounded-lg"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                            <Image
                                src={founder.image}
                                alt={founder.name}
                                width={320}
                                height={320}
                                className="rounded-lg object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                            />
                        </div>

                        {/* Founder Details with Better Contrast */}
                        <motion.div
                            className="w-full md:w-2/3 text-center md:text-left text-white"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: false }} // 🔥 Animates on every scroll
                        >
                            <div className="relative w-full text-left"> {/* Ensuring full width and left alignment */}
                                <h3 className="text-2xl font-semibold text-white">{founder.name}</h3>

                                <motion.div
                                    className="absolute left-0 -bottom-2 w-28 h-[6px]" // Adjusted width to fit under name
                                    initial={{ scaleX: 0, opacity: 0, borderRadius: "50%" }}
                                    whileInView={{ scaleX: 1, opacity: 1, borderRadius: "50px" }}
                                    transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
                                    viewport={{ once: false }}
                                    style={{
                                        boxShadow: "0px 0px 10px rgba(255, 138, 0, 0.8), 0px 0px 20px rgba(229, 46, 113, 0.9)", // Glowing effect
                                        transformOrigin: "left", // Animation starts from the left
                                        background: "linear-gradient(90deg, #FF8A00, #E52E71)", // Gradient for vibrant effect
                                        maskImage: "radial-gradient(circle, white 60%, transparent 100%)", // Smooth edges effect
                                    }}
                                />
                            </div>

                            <p className="text-lg mt-3 text-[#FF8A00] font-medium">{founder.role}</p>
                            <p className="text-gray-300 mt-4">{founder.description}</p>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
