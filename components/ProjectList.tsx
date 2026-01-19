'use client';

import { motion } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <section className="flex items-center justify-center px-6 py-16 sm:py-20" aria-label="Projects list">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl w-full"
      >
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              No projects found
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Check back soon for new projects
            </p>
          </div>
        )}
      </motion.div>
    </section>
  );
}
