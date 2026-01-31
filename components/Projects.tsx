'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface Project {
  title: string;
  company?: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  github: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'StudentMap',
      description:
        'Mobile app for students to locate and consult university points of interest (buildings, messaging, etc.).',
      fullDescription:
        'StudentMap is a comprehensive mobile application designed to help university students navigate campus life. The app provides an interactive map showing all important locations including buildings, cafeterias, libraries, and study areas. Students can also use the integrated messaging system to communicate with peers and get real-time updates about campus events and activities.',
      image: '/images/studentmap.png',
      technologies: ['React Native', 'Next.js', 'NestJS'],
      github: 'https://github.com/KantoMiarintsoa/studentmap-mobile',
    },
    {
      title: 'VibeTalk',
      description:
        'Modern and reactive web messaging application with real-time communication.',
      fullDescription:
        'VibeTalk is a cutting-edge web messaging platform that enables real-time communication between users. Built with modern technologies, it offers instant message delivery, user presence indicators, typing indicators, and a sleek user interface. The application uses WebSocket technology through Socket.io to ensure fast and reliable message delivery.',
      image: '/images/vibetalk.png',
      technologies: ['Next.js', 'NestJS', 'Socket.io', 'Tailwind'],
      github: 'https://github.com/KantoMiarintsoa/chat-app-front',
    },
    {
      title: 'Fanorona Game',
      description:
        'Mobile version of the traditional Malagasy strategy game with intuitive interface and game logic.',
      fullDescription:
        'Fanorona is a traditional Malagasy strategy board game that has been played for centuries. This mobile implementation brings the classic game to modern devices with an intuitive touch interface, smart AI opponents, and a tutorial system for new players. The game features authentic rules and gameplay mechanics while providing a smooth mobile gaming experience.',
      image: '/images/fanorona.png',
      technologies: ['React Native', 'TypeScript'],
      github: 'https://github.com/KantoMiarintsoa/fanorona-mobile',
    },
  ];

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
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              onClick={() => setSelectedProject(project)}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition cursor-pointer"
            >
              <div className="aspect-video relative overflow-hidden bg-gray-900">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 text-center py-2 bg-white/5 hover:bg-white/10 rounded-lg transition text-sm"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 border border-white/10 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition z-10"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Image */}
              <div className="aspect-video relative overflow-hidden rounded-t-2xl bg-gray-900">
                <Image
                  src={selectedProject.image}
                  alt={`${selectedProject.title} screenshot`}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-white/10 text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 bg-white/5 hover:bg-white/10 rounded-lg transition font-medium"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
