import { Metadata } from 'next';
import { getLinks } from '@/lib/links';
import Button from '@/components/Button';
import { GitHubIcon, LinkedInIcon, XIcon, YouTubeIcon, InstagramIcon, EmailIcon } from '@/components/icons';

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
      <section className="flex items-center justify-center px-6 py-16">
        <div className="max-w-4xl w-full">
          <div className="space-y-12">
            {/* Social Links */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Social Profiles
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 w-full overflow-hidden">
                {links.social.github && (
                  <div className="min-w-0 overflow-hidden">
                    <Button
                      variant="primary"
                      href={links.social.github}
                      external
                      icon={<GitHubIcon />}
                      className="w-full whitespace-nowrap"
                      aria-label="Visit GitHub profile"
                    >
                      GitHub
                    </Button>
                  </div>
                )}
                {links.social.linkedin && (
                  <div className="min-w-0 overflow-hidden">
                    <Button
                      variant="primary"
                      href={links.social.linkedin}
                      external
                      icon={<LinkedInIcon />}
                      className="w-full whitespace-nowrap"
                      aria-label="Visit LinkedIn profile"
                    >
                      LinkedIn
                    </Button>
                  </div>
                )}
                {links.social.x && (
                  <div className="min-w-0 overflow-hidden">
                    <Button
                      variant="primary"
                      href={links.social.x}
                      external
                      icon={<XIcon />}
                      className="w-full whitespace-nowrap"
                      aria-label="Visit X (Twitter) profile"
                    >
                      X
                    </Button>
                  </div>
                )}
                {links.social.youtube && (
                  <div className="min-w-0 overflow-hidden">
                    <Button
                      variant="primary"
                      href={links.social.youtube}
                      external
                      icon={<YouTubeIcon />}
                      className="w-full whitespace-nowrap"
                      aria-label="Visit YouTube channel"
                    >
                      YouTube
                    </Button>
                  </div>
                )}
                {links.social.instagram && (
                  <div className="min-w-0 overflow-hidden">
                    <Button
                      variant="primary"
                      href={links.social.instagram}
                      external
                      icon={<InstagramIcon />}
                      className="w-full whitespace-nowrap"
                      aria-label="Visit Instagram profile"
                    >
                      Instagram
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Methods */}
            {(links.contact.email || links.contact.instagram) && (
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Direct Contact
                </h2>
                <div className="flex flex-wrap gap-4 w-full overflow-hidden">
                  {links.contact.email && (
                    <Button
                      variant="primary"
                      href={`mailto:${links.contact.email}`}
                      icon={<EmailIcon />}
                      className="whitespace-nowrap"
                      aria-label="Send email"
                    >
                      Email
                    </Button>
                  )}
                  {links.contact.instagram && !links.social.instagram && (
                    <Button
                      variant="primary"
                      href={links.contact.instagram}
                      external
                      icon={<InstagramIcon />}
                      className="whitespace-nowrap"
                      aria-label="Contact via Instagram"
                    >
                      Instagram DM
                    </Button>
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
