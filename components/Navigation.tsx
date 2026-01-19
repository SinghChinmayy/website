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
        <div className="absolute inset-0 backdrop-blur-lg bg-white/95 dark:bg-black/95 border-b border-gray-200/80 dark:border-gray-800/80 shadow-sm" />
        
        {/* Content */}
        <div className="relative w-full py-5 sm:py-6 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            {/* Logo/Name - Enhanced styling */}
            <a
              href="/"
              className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 rounded-lg px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 ease-out"
              aria-label="Home"
            >
              CS
            </a>

            {/* Navigation Links - Elegant active state with underline */}
            <div className="flex gap-6 sm:gap-8 items-center">
              <a
                href="/"
                className={`relative px-3 py-2 text-sm sm:text-base font-medium whitespace-nowrap flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 transition-all duration-200 ease-out motion-reduce:transition-none ${
                  isActive('/')
                    ? 'text-gray-900 dark:text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gray-900 dark:after:bg-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gray-300 dark:after:bg-gray-700 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:ease-out'
                }`}
              >
                Home
              </a>
              <a
                href="/contact"
                className={`relative px-3 py-2 text-sm sm:text-base font-medium whitespace-nowrap flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 transition-all duration-200 ease-out motion-reduce:transition-none ${
                  isActive('/contact')
                    ? 'text-gray-900 dark:text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gray-900 dark:after:bg-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gray-300 dark:after:bg-gray-700 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:ease-out'
                }`}
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
