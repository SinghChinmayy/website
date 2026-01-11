'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-gray-900 dark:focus:bg-white focus:text-white dark:focus:text-gray-900 focus:rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white focus-visible:ring-offset-2"
      >
        Skip to main content
      </a>

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Backdrop with blur effect */}
        <div className="absolute inset-0 backdrop-blur-md bg-white/80 dark:bg-black/80 border-b border-gray-200/50 dark:border-gray-800/50" />
        
        {/* Content */}
        <div className="relative w-full py-6 px-6">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            {/* Logo/Name */}
            <a
              href="/"
              className="text-xl font-bold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 rounded-sm transition-colors duration-200"
              aria-label="Home"
            >
              CS
            </a>

            {/* Navigation Links */}
            <div className="flex gap-6 items-center">
              <a
                href="/"
                className={`px-4 py-2 rounded-lg text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 transition-all duration-200 motion-reduce:transition-none ${
                  isActive('/')
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                    : 'text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400'
                }`}
              >
                Home
              </a>
              <a
                href="/projects"
                className={`px-4 py-2 rounded-lg text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 transition-all duration-200 motion-reduce:transition-none ${
                  isActive('/projects')
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                    : 'text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400'
                }`}
              >
                Projects
              </a>
              
              <a
                href="#contact"
                className="px-4 py-2 rounded-lg text-base font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 transition-all duration-200 motion-reduce:transition-none"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
