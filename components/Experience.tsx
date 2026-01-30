'use client';

import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      role: 'Fullstack Developer',
      company: 'Vowen (Freelance)',
      period: 'September 2025 - Present',
      description:
        'Development of fullstack web applications. Frontend with Next.js (React), Backend with NestJS (REST API). API integration, data management and business logic. Collaboration with designers and product teams.',
    },
    {
      role: 'Fullstack Developer Intern',
      company: 'HasinReziga',
      period: 'July - September 2024',
      description:
        'Development of an online library platform. Created REST API with Spring Boot for managing users, books, and loans. Developed reactive user interface with React. Implemented communication between frontend and backend via API calls. Deployed with Docker.',
    },
    {
      role: 'Student',
      company: 'Université Adventiste Zurcher',
      period: 'November 2022 - June 2025',
      description:
        "Bachelor's degree in Computer Science, Software Engineering and Information Systems. Learning software development, database design, algorithms, and modern web technologies.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 mb-12 max-w-2xl"
        >
          My professional journey and key milestones
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                  <p className="text-gray-400 font-medium">{exp.company}</p>
                </div>
                <span className="text-gray-400 text-sm md:text-base">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-400">{exp.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
