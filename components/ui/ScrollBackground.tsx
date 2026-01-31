'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Particles from './Particles';

export default function ScrollBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  // Create multiple parallax layers
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const opacity1 = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3]);
  const opacity2 = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.2, 0.5, 0.5, 0.2]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div
      ref={ref}
      className="fixed inset-0 pointer-events-none overflow-hidden"
    >
      {/* WebGL Particles */}
      <div className="absolute inset-0">
        <Particles
          particleCount={250}
          particleSpread={15}
          speed={0.05}
          particleColors={['#ffffff', '#e0e0e0', '#c0c0c0']}
          alphaParticles={true}
          particleBaseSize={120}
          sizeRandomness={1.5}
          cameraDistance={25}
          disableRotation={false}
        />
      </div>

      {/* Gradient Orbs */}
      <motion.div
        style={{ y: y1, opacity: opacity1, scale }}
        className="absolute top-20 -right-40 w-96 h-96 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-transparent rounded-full blur-3xl"
      />

      <motion.div
        style={{ y: y2, opacity: opacity2 }}
        className="absolute top-1/4 -left-32 w-80 h-80 bg-gradient-to-tr from-blue-500/15 via-cyan-500/15 to-transparent rounded-full blur-3xl"
      />

      <motion.div
        style={{ y: y3, opacity: opacity1 }}
        className="absolute bottom-1/4 right-20 w-72 h-72 bg-gradient-to-bl from-pink-500/15 via-purple-500/15 to-transparent rounded-full blur-3xl"
      />

      <motion.div
        style={{ y: y1, opacity: opacity2 }}
        className="absolute bottom-40 -left-20 w-96 h-96 bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-transparent rounded-full blur-3xl"
      />

      {/* Animated Grid */}
      <motion.div
        style={{ opacity: opacity2 }}
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:100px_100px]"
      />

      {/* Rotating Rings */}
      <motion.div
        style={{ rotate, opacity: opacity2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full"
      />

      <motion.div
        style={{
          rotate: useTransform(rotate, (r) => -r * 0.5),
          opacity: opacity2,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full"
      />
    </div>
  );
}
