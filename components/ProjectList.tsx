'use client';

import { motion } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <section className="flex items-center justify-center px-6 py-12" aria-label="Projects list">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl w-full"
      >
        <div className="flex flex-col space-y-8">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                No projects found
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
