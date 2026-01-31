'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

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

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

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

        <div ref={containerRef} className="relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-[19px] md:left-8 top-0 bottom-0 w-[2px] bg-white/10">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-white"
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.2 + 0.3 }}
                  className="absolute left-[11px] md:left-[23px] top-2 w-5 h-5 rounded-full bg-white border-4 border-black"
                />

                {/* Content */}
                <div className="pb-8">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.2 + 0.4 }}
                    className="mb-2"
                  >
                    <span className="inline-block px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm mb-3">
                      {exp.period}
                    </span>
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.2 + 0.5 }}
                    className="text-2xl md:text-3xl font-bold mb-2"
                  >
                    {exp.role}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.2 + 0.6 }}
                    className="text-gray-400 font-medium mb-3 text-lg"
                  >
                    {exp.company}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.2 + 0.7 }}
                    className="text-gray-400 leading-relaxed"
                  >
                    {exp.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
