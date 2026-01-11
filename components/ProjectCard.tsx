'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export interface Project {
  title: string;
  description: string;
  image?: string;
  tech?: string[];
  github?: string;
  demo?: string;
  youtube?: string;
  blog?: string;
  date?: string;
  slug: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function formatDate(dateString?: string): string {
  if (!dateString) return '';
  
  try {
    const [year, month] = dateString.split('-');
    const date = new Date(parseInt(year), month ? parseInt(month) - 1 : 0);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  } catch {
    return dateString;
  }
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { title, description, image, tech, github, demo, youtube, blog, date } = project;
  const [showYouTube, setShowYouTube] = useState(false);
  
  const hasLinks = github || demo || blog || youtube;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="w-full border-2 border-gray-900 dark:border-white rounded-lg p-6 md:p-8 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-200"
    >
      {/* Single column layout - everything stacked vertically */}
      <div className="flex flex-col gap-6">
        {/* Image Section (Optional) - Full width on mobile */}
        {image && (
          <div className="w-full">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </div>
        )}

        {/* Content Section - Full width */}
        <div className="flex flex-col gap-4">
          {/* Title */}
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
            {title}
          </h3>

          {/* Description */}
          <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            {description}
          </p>

          {/* Tech Stack (Optional) */}
          {tech && tech.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tech.map((technology) => (
                <span
                  key={technology}
                  className="px-3 py-1.5 md:px-4 md:py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg text-sm font-medium"
                >
                  {technology}
                </span>
              ))}
            </div>
          )}

          {/* YouTube Embed (Optional, Expandable) */}
          {youtube && (
            <div className="mt-2">
              {!showYouTube ? (
                <button
                  onClick={() => setShowYouTube(true)}
                  className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium text-base hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 border-2 border-gray-900 dark:border-white"
                >
                  ▶ Watch Video
                </button>
              ) : (
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <iframe
                    src={`https://www.youtube.com/embed/${youtube}`}
                    title={`${title} - Video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              )}
            </div>
          )}

          {/* Links Section (Optional) */}
          {hasLinks && (
            <div className="flex flex-wrap gap-3 pt-2">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 md:px-6 md:py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium text-sm md:text-base hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 border-2 border-gray-900 dark:border-white"
                >
                  GitHub
                </a>
              )}
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 md:px-6 md:py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium text-sm md:text-base hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 border-2 border-gray-900 dark:border-white"
                >
                  Live Demo
                </a>
              )}
              {blog && (
                <a
                  href={blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 md:px-6 md:py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium text-sm md:text-base hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 border-2 border-gray-900 dark:border-white"
                >
                  Read More
                </a>
              )}
            </div>
          )}

          {/* Date (Optional) */}
          {date && (
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium mt-2">
              {formatDate(date)}
            </p>
          )}
        </div>
      </div>
    </motion.article>
  );
}
