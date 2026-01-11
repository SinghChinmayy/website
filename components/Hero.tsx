'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium mb-4"
          >
            Hi, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight mb-6"
          >
            Chinmay Singh
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-600 dark:text-gray-400 mb-8 leading-tight"
          >
            Backend • Ops • AI/ML
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed mb-10"
          >
            I am a backend dev with interst in scalable and high performance infrastructure.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 pt-8 pb-4 px-4 sm:px-0"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium text-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 text-center border-2 border-gray-900 dark:border-white"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium text-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 text-center border-2 border-gray-900 dark:border-white"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
