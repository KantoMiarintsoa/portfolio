'use client';

import { motion } from 'framer-motion';

export default function Services() {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
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
          Building Digital Experiences
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 mb-12 max-w-2xl"
        >
          I specialize in creating stunning user interfaces and developing
          high-quality applications that stand out.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {/* What I Can Do */}
          <motion.div
            variants={itemVariants}
            className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 overflow-hidden"
          >
            {/* Swirl Pattern Background on Hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
              style={{
                backgroundImage: `url('/swirl.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">What I can do</h3>
              <p className="text-gray-400 mb-6">
                I can help develop solutions that will help you grow your
                business:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span>Fullstack Web Development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span>Mobile App Development (React Native)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span>API Design & Integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span>Database Design & Management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span>Real-time Communication (Socket.io)</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Tools I Use */}
          <motion.div
            variants={itemVariants}
            className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 overflow-hidden"
          >
            {/* Swirl Pattern Background on Hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
              style={{
                backgroundImage: `url('/swirl.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Tools I Use</h3>
              <p className="text-gray-400 mb-6">
                I use the latest tools and technologies to build functional and
                scalable products:
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-2">• Frontend</p>
                  <p className="text-gray-300">
                    React, Next.js, React Native, TypeScript
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">• Backend</p>
                  <p className="text-gray-300">
                    NestJS, Spring Boot, MongoDB, PostgreSQL
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">• DevOps & Tools</p>
                  <p className="text-gray-300">
                    Docker, Git/GitHub, Tailwind CSS, Socket.io
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* UI/UX Design */}
          <motion.div
            variants={itemVariants}
            className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 overflow-hidden"
          >
            {/* Swirl Pattern Background on Hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
              style={{
                backgroundImage: `url('/swirl.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">UI/UX Design</h3>
              <p className="text-gray-400 mb-6">
                I am a designer first, developer second. I can help design clean
                and modern interfaces:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span>User-Centered Design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span>Modern & Clean UI</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span>Responsive Layouts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span>Wireframes & Prototypes</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
