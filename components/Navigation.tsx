'use client';

import { motion } from 'framer-motion';

export default function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo/Name */}
        <a
          href="#"
          className="text-xl font-bold text-gray-900 dark:text-white hover:opacity-70 transition-opacity"
        >
          YN
        </a>

        {/* Navigation Links */}
        <div className="flex gap-8">
          <a
            href="#projects"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
