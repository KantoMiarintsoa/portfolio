'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Animated Wave Background */}
      <div className="absolute inset-0 opacity-20">
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,400 Q360,300 720,400 T1440,400 L1440,800 L0,800 Z"
            fill="url(#wave-gradient)"
            initial={{
              d: 'M0,400 Q360,300 720,400 T1440,400 L1440,800 L0,800 Z',
            }}
            animate={{
              d: [
                'M0,400 Q360,300 720,400 T1440,400 L1440,800 L0,800 Z',
                'M0,400 Q360,500 720,400 T1440,400 L1440,800 L0,800 Z',
                'M0,400 Q360,300 720,400 T1440,400 L1440,800 L0,800 Z',
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.path
            d="M0,500 Q360,400 720,500 T1440,500 L1440,800 L0,800 Z"
            fill="url(#wave-gradient2)"
            initial={{
              d: 'M0,500 Q360,400 720,500 T1440,500 L1440,800 L0,800 Z',
            }}
            animate={{
              d: [
                'M0,500 Q360,400 720,500 T1440,500 L1440,800 L0,800 Z',
                'M0,500 Q360,600 720,500 T1440,500 L1440,800 L0,800 Z',
                'M0,500 Q360,400 720,500 T1440,500 L1440,800 L0,800 Z',
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <defs>
            <linearGradient
              id="wave-gradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="wave-gradient2"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#6d28d9" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#6d28d9" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(124, 58, 237, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(124, 58, 237, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Bringing your ideas to life.
              </span>
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-purple-300 mb-6">
              Let&apos;s turn your vision into reality
            </h3>
            <p className="text-gray-400 text-lg">
              Have a project in mind or just want to chat? Let&apos;s connect!
            </p>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition text-white placeholder:text-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="contact@example.com"
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition text-white placeholder:text-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition resize-none text-white placeholder:text-gray-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-white text-black hover:bg-gray-200 rounded-lg font-semibold transition"
              >
                Send
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
