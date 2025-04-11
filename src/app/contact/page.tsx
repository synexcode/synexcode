'use client';
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

export default function ContactUs() {
    const [submitted, setSubmitted] = useState(false);
    // Define formRef with type HTMLFormElement
    const formRef = useRef<HTMLFormElement | null>(null);

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        // Create FormData from the form
        const formData = new FormData(event.target as HTMLFormElement);
        const contactKey = process.env.NEXT_PUBLIC_CONTACT_KEY;
        formData.append("access_key", contactKey || "");
        // Convert FormData to JSON
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        // Send the request to the API
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });

        const result = await response.json();

        // If the submission is successful
        if (result.success) {
            // Reset the form if formRef.current is available
            if (formRef.current) {
                formRef.current.reset();
            }

            // Trigger the animation to play again
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 500);  // Reset state to allow animation again
        }
    }

    return(
        <section
            className="relative flex items-center justify-center min-h-screen bg-cover bg-center text-white px-6 md:px-12 pt-24 pb-10"
            style={{ backgroundImage: "url('/assets/Slide2.jpg')" }}
        >
            <div className="absolute inset-0 bg-[#008EAA] opacity-80"></div>
            <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 p-6 md:p-10 bg-white bg-opacity-95 rounded-3xl shadow-2xl">
                {/* Left Side - Contact Info */}
                
<div>
                    {/* Heading */}
                    <motion.h2
                        className="text-4xl font-bold text-[#008EAA] mb-6 relative inline-block"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: false }}
                    >
                        Let's Connect & Collaborate
                        <motion.div
                            className="absolute left-1/4 md:left-2/3 -bottom-2 w-32 h-[6px] -translate-x-1/2"
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

                    {/* Paragraphs */}
                    <motion.p
                        className="text-gray-700 text-lg mb-6 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: false }}
                    >
                        Have an idea in mind? Need expert advice? We're here to listen and bring your vision to life.
                        Reach out and let’s create something amazing together!
                    </motion.p>

                    <motion.p
                        className="text-gray-700 text-lg mb-6 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: false }}
                    >
                        Whether you're launching a new project, scaling your business, or just exploring possibilities, we're here to turn your ideas into reality. Let's collaborate, innovate, and create something truly extraordinary together!
                    </motion.p>

                    {/* Social Media Links */}
                    <motion.div
                        className="flex gap-4 my-6 justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        viewport={{ once: false }}
                    >
                        {[
                            { Icon: FaLinkedinIn, link: "https://www.linkedin.com/company/synexcode/?viewAsMember=true" },
                            { Icon: FaWhatsapp, link: "https://wa.me/923312144766" },
                            { Icon: FaInstagram, link: "https://www.instagram.com/synexcode/?hl=en" },
                            { Icon: FaFacebookF, link: "https://www.facebook.com/profile.php?id=61575022414136" },
                        ].map(({ Icon, link }, index) => (
                            <motion.a
                                key={index}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-12 h-12 bg-white text-[#008EAA] rounded-full shadow-md hover:shadow-lg transition transform hover:scale-110"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                                <Icon className="text-2xl" />
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Contact & Social Media Cards */}
                    <motion.div
                        className="flex flex-col sm:flex-row justify-center items-center gap-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: false }}
                    >
                        {[
                            { icon: FaEnvelope, label: 'Email', value: 'contact@synexcode.com' },
                            { icon: FaPhone, label: 'Phone', value: '+92 331 2144766' }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center w-72 h-28 px-6 py-4 bg-[#008EAA] rounded-2xl border border-white/20 shadow-lg transition-transform hover:scale-105 hover:shadow-2xl text-white"
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: 30 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: false }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-full shadow-lg"
                                        style={{
                                            background: "linear-gradient(90deg, #FF8A00, #E52E71)"
                                        }}
                                    >
                                        <item.icon className="text-white text-xl" />
                                    </div>
                                    <h3 className="text-lg font-semibold">{item.label}</h3>
                                </div>
                                <p className="text-gray-200 mt-1">{item.value}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                {/* Right Side - Contact Form */}
                <div>
                    <motion.form
                        onSubmit={handleSubmit}
                        ref={formRef}
                        className="bg-white shadow-xl rounded-3xl p-4 md:p-8 space-y-6"
                        initial={{ opacity: 0, x: 20 }}
                        animate={submitted ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        method="POST"
                    >
                        <motion.h3
                            className="text-3xl font-bold text-[#008EAA] mb-4"
                            initial={{ opacity: 0, y: -10 }}
                            animate={submitted ? { opacity: 0, y: -10 } : { opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Let's Build Something Great Together
                        </motion.h3>

                        <motion.p
                            className="text-gray-600 mb-4"
                            initial={{ opacity: 0, y: -10 }}
                            animate={submitted ? { opacity: 0, y: -10 } : { opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Fill out the form below and our team will get back to you as soon as possible.
                        </motion.p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[ 
                                { id: "name", label: "Full Name", type: "text" },
                                { id: "email", label: "Email Address", type: "email" }
                            ].map((field, index) => (
                                <motion.div
                                    key={field.id}
                                    className="relative"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={submitted ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                >
                                    <input type={field.type} id={field.id} name={field.id} className="input-field peer  text-black" required placeholder=" " />
                                    <label htmlFor={field.id} className="input-label text-[#008EAA]">{field.label}</label>
                                </motion.div>
                            ))}
                        </div>

                        {[ 
                            { id: "subject", label: "Subject", type: "text" },
                            { id: "message", label: "Your Message", type: "textarea", rows: 5 },
                        ].map((field, index) => (
                            <motion.div
                                key={field.id}
                                className="relative"
                                initial={{ opacity: 0, x: -10 }}
                                animate={submitted ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                            >
                                {field.type === "textarea" ? (
                                    <textarea id={field.id} name={field.id} rows={field.rows} className="input-field peer text-black" required placeholder=" "></textarea>
                                ) : (
                                    <input type={field.type} id={field.id} name={field.id} className="input-field peer text-black" required placeholder=" " />
                                )}
                                <label htmlFor={field.id} className="input-label">{field.label}</label>
                            </motion.div>
                        ))}

                        <motion.button
                            className="w-full py-4 bg-[#008EAA] text-white text-lg font-semibold rounded-lg hover:bg-[#007593] transition transform hover:scale-105"
                            type="submit"
                            initial={{ opacity: 0, y: 10 }}
                            animate={submitted ? { opacity: 0, y: 10 } : { opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            Send Message
                        </motion.button>
                    </motion.form>
                </div>
            </div>

            {/* Global CSS for Input Fields */}
            <style jsx>{`
                .input-field {
                    width: 100%;
                    padding: 14px;
                    border: 2px solid #ddd;
                    border-radius: 10px;
                    font-size: 16px;
                    outline: none;
                    transition: all 0.3s ease;
                    background: #f9f9f9;
                    color: black;
                }
                .input-field:focus ~ .input-label,
                .input-field:not(:placeholder-shown) ~ .input-label {
                    transform: translateY(-24px);
                    font-size: 14px;
                    color: #008EAA;
                }
                .input-label {
                    position: absolute;
                    left: 14px;
                    top: 14px;
                    font-size: 16px;
                    color: #008EAA;
                    transition: all 0.3s ease;
                    background: white;
                    padding: 0 5px;
                    border-radius: 5px;
                }
            `}</style>
        </section>
    );
}
