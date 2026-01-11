import { Metadata } from 'next';
import { getAllProjects } from '@/lib/projects';
import ProjectList from '@/components/ProjectList';

export const metadata: Metadata = {
  title: 'Projects | Chinmay Singh',
  description: 'A collection of projects I\'ve worked on, showcasing my skills in backend development, operations, and AI/ML.',
  keywords: ['Projects', 'Portfolio', 'Backend', 'Ops', 'AI/ML', 'Development'],
  openGraph: {
    title: 'Projects | Chinmay Singh',
    description: 'A collection of projects I\'ve worked on, showcasing my skills in backend development, operations, and AI/ML.',
    type: 'website',
  },
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main className="min-h-screen flex flex-col items-center">
      {/* Hero Section - Centered with max-width */}
      <section className="w-full flex justify-center px-4 sm:px-6 py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-3xl">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
              My Projects
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
              A collection of projects I&apos;ve worked on, showcasing my skills in backend development, operations, and AI/ML.
            </p>
          </div>
        </div>
      </section>

      {/* Projects List - Already centered in ProjectList component */}
      <ProjectList projects={projects} />
    </main>
  );
}
