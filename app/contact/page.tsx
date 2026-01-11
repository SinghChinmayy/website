import { Metadata } from 'next';
import { getLinks } from '@/lib/links';

export const metadata: Metadata = {
  title: 'Contact | Chinmay Singh',
  description: 'Get in touch with Chinmay Singh through various social platforms and contact methods.',
  keywords: ['Contact', 'Social Media', 'GitHub', 'LinkedIn', 'Backend Developer'],
  openGraph: {
    title: 'Contact | Chinmay Singh',
    description: 'Get in touch with Chinmay Singh through various social platforms and contact methods.',
    type: 'website',
  },
};

export default function ContactPage() {
  const links = getLinks();

  return (
    <main id="main-content" className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="flex items-center justify-center px-6 py-20 min-h-[40vh]">
        <div className="max-w-4xl w-full">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
              Feel free to reach out through any of these platforms. I&apos;m always open to interesting conversations and opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Links Section */}
      <section className="flex items-center justify-center px-6 py-12">
        <div className="max-w-4xl w-full">
          <div className="space-y-8">
            {/* Social Links */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Social Profiles
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {links.social.github && (
                  <a
                    href={links.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium text-base text-center hover:bg-gray-800 dark:hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 transition-all duration-200 motion-reduce:transition-none border-2 border-gray-900 dark:border-white whitespace-nowrap"
                    aria-label="Visit GitHub profile"
                  >
                    GitHub
                  </a>
                )}
                {links.social.linkedin && (
                  <a
                    href={links.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium text-base text-center hover:bg-gray-800 dark:hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 transition-all duration-200 motion-reduce:transition-none border-2 border-gray-900 dark:border-white whitespace-nowrap"
                    aria-label="Visit LinkedIn profile"
                  >
                    LinkedIn
                  </a>
                )}
                {links.social.x && (
                  <a
                    href={links.social.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium text-base text-center hover:bg-gray-800 dark:hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 transition-all duration-200 motion-reduce:transition-none border-2 border-gray-900 dark:border-white whitespace-nowrap"
                    aria-label="Visit X (Twitter) profile"
                  >
                    X
                  </a>
                )}
                {links.social.youtube && (
                  <a
                    href={links.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium text-base text-center hover:bg-gray-800 dark:hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 transition-all duration-200 motion-reduce:transition-none border-2 border-gray-900 dark:border-white whitespace-nowrap"
                    aria-label="Visit YouTube channel"
                  >
                    YouTube
                  </a>
                )}
                {links.social.instagram && (
                  <a
                    href={links.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium text-base text-center hover:bg-gray-800 dark:hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 transition-all duration-200 motion-reduce:transition-none border-2 border-gray-900 dark:border-white whitespace-nowrap"
                    aria-label="Visit Instagram profile"
                  >
                    Instagram
                  </a>
                )}
              </div>
            </div>

            {/* Contact Methods */}
            {(links.contact.email || links.contact.instagram) && (
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Direct Contact
                </h2>
                <div className="flex flex-wrap gap-4">
                  {links.contact.email && (
                    <a
                      href={`mailto:${links.contact.email}`}
                      className="px-6 py-4 bg-transparent text-gray-900 dark:text-white rounded-lg font-medium text-base text-center hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 transition-all duration-200 motion-reduce:transition-none border-2 border-gray-900 dark:border-white whitespace-nowrap min-w-[120px]"
                      aria-label="Send email"
                    >
                      Email
                    </a>
                  )}
                  {links.contact.instagram && !links.social.instagram && (
                    <a
                      href={links.contact.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-4 bg-transparent text-gray-900 dark:text-white rounded-lg font-medium text-base text-center hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 transition-all duration-200 motion-reduce:transition-none border-2 border-gray-900 dark:border-white whitespace-nowrap min-w-[120px]"
                      aria-label="Contact via Instagram"
                    >
                      Instagram DM
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
