'use client';

import { motion } from 'framer-motion';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center mb-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-400">
              Some of my recent work that I&apos;m proud of
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-lg transition border border-white/10">
            View All Projects
          </button>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* StudentMap */}
          <motion.div
            variants={itemVariants}
            className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition"
          >
            <div className="aspect-video bg-gradient-to-br from-gray-800/50 to-gray-700/50 flex items-center justify-center"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">StudentMap</h3>
              <p className="text-gray-400 mb-4 text-sm">
                Mobile app for students to locate and consult university points
                of interest (buildings, messaging, etc.).
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-xs">
                  React Native
                </span>
                <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-xs">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-xs">
                  NestJS
                </span>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://github.com/KantoMiarintsoa/studentmap-mobile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 bg-white/5 hover:bg-white/10 rounded-lg transition text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>

          {/* VibeTalk */}
          <motion.div
            variants={itemVariants}
            className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition"
          >
            <div className="aspect-video bg-gradient-to-br from-gray-700/50 to-gray-800/50 flex items-center justify-center"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">VibeTalk</h3>
              <p className="text-gray-400 mb-4 text-sm">
                Modern and reactive web messaging application with real-time
                communication.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-xs">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-xs">
                  NestJS
                </span>
                <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-xs">
                  Socket.io
                </span>
                <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-xs">
                  Tailwind
                </span>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://github.com/KantoMiarintsoa/chat-app-front"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 bg-white/5 hover:bg-white/10 rounded-lg transition text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>

          {/* Fanorona */}
          <motion.div
            variants={itemVariants}
            className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition"
          >
            <div className="aspect-video bg-gradient-to-br from-slate-800/50 to-gray-800/50 flex items-center justify-center"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Fanorona Game</h3>
              <p className="text-gray-400 mb-4 text-sm">
                Mobile version of the traditional Malagasy strategy game with
                intuitive interface and game logic.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                  React Native
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                  TypeScript
                </span>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://github.com/KantoMiarintsoa/fanorona-mobile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 bg-white/5 hover:bg-white/10 rounded-lg transition text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
