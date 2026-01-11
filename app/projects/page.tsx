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
    <main id="main-content" className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="flex items-center justify-center px-6 py-20 min-h-[40vh]">
        <div className="max-w-4xl w-full">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
              My Projects
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
              A collection of projects I&apos;ve worked on, showcasing my skills in backend development, operations, and AI/ML.
            </p>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <ProjectList projects={projects} />
    </main>
  );
}
