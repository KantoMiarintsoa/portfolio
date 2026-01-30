'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'A Fullstack Developer',
    'A Mobile Developer',
    'A Web Developer',
    'A Software Engineer',
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          // Move to next role
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 via-transparent to-gray-800/10" />
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-700 to-gray-600 p-1">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-6xl"></div>
          </div>
        </motion.div>
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Hey, I&apos;m <span className="text-white">Kanto Sarobidy</span>
        </motion.h1>
        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-3xl md:text-5xl font-bold mb-6 min-h-[4rem] md:min-h-[5rem]"
        >
          <span className="text-gray-200">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg"
        >
          Professional fullstack developer specialized in building modern web
          and mobile applications. Organized, autonomous, entrepreneurial, and
          engaged developer passionate about crafting seamless user experiences
          with cutting-edge technologies.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center mt-4"
        >
          <button className="px-12 py-5 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 rounded-lg transition flex items-center gap-3 font-semibold text-xl">
            Hire Me
          </button>
        </motion.div>
      </div>
    </section>
  );
}
