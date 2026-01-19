import { getLinks } from '@/lib/links';

export default function Footer() {
  const links = getLinks();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Name */}
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Chinmay Singh
            </p>
          </div>

          {/* Social Links */}
          <nav aria-label="Social links">
            <ul className="flex flex-wrap items-center justify-center gap-6">
              {links.social.github && (
                <li>
                  <a
                    href={links.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    aria-label="GitHub profile"
                  >
                    GitHub
                  </a>
                </li>
              )}
              {links.social.linkedin && (
                <li>
                  <a
                    href={links.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    aria-label="LinkedIn profile"
                  >
                    LinkedIn
                  </a>
                </li>
              )}
              {links.social.x && (
                <li>
                  <a
                    href={links.social.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    aria-label="X (Twitter) profile"
                  >
                    X
                  </a>
                </li>
              )}
              {links.social.youtube && (
                <li>
                  <a
                    href={links.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    aria-label="YouTube channel"
                  >
                    YouTube
                  </a>
                </li>
              )}
              {links.social.instagram && (
                <li>
                  <a
                    href={links.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    aria-label="Instagram profile"
                  >
                    Instagram
                  </a>
                </li>
              )}
            </ul>
          </nav>

          {/* Copyright */}
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              © {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
