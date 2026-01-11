import { getLinks } from '@/lib/links';

export default function Footer() {
  const links = getLinks();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-center px-6 py-20 mt-20 border-t-2 border-gray-900 dark:border-white">
      <div className="max-w-4xl w-full">
        <div className="space-y-8">
          {/* Top Section: Identity + Navigation */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            {/* Identity */}
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                Chinmay Singh
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                Backend • Ops • AI/ML
              </p>
            </div>

            {/* Navigation Links */}
            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap gap-6">
                <li>
                  <a
                    href="/"
                    className="text-base font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 rounded-sm transition-colors duration-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/projects"
                    className="text-base font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 rounded-sm transition-colors duration-200"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-base font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 rounded-sm transition-colors duration-200"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Middle Section: Social Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            {links.social.github && (
              <a
                href={links.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 rounded-sm transition-colors duration-200"
                aria-label="GitHub profile"
              >
                GitHub
              </a>
            )}
            {links.social.linkedin && (
              <a
                href={links.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 rounded-sm transition-colors duration-200"
                aria-label="LinkedIn profile"
              >
                LinkedIn
              </a>
            )}
            {links.social.x && (
              <a
                href={links.social.x}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 rounded-sm transition-colors duration-200"
                aria-label="X (Twitter) profile"
              >
                X
              </a>
            )}
            {links.social.youtube && (
              <a
                href={links.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 rounded-sm transition-colors duration-200"
                aria-label="YouTube channel"
              >
                YouTube
              </a>
            )}
            {links.social.instagram && (
              <a
                href={links.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 rounded-sm transition-colors duration-200"
                aria-label="Instagram profile"
              >
                Instagram
              </a>
            )}
          </div>

          {/* Bottom Section: Copyright */}
          <div className="pt-4 text-center md:text-left">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Chinmay Singh
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
