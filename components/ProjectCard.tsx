'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Button from './Button';

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
  
  const hasLinks = github || demo || blog;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
      className="w-full bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6 sm:p-8 hover:shadow-md hover:-translate-y-1 focus-within:ring-2 focus-within:ring-gray-900 dark:focus-within:ring-white focus-within:ring-offset-2 transition-all duration-200 ease-out motion-reduce:transition-none h-full flex flex-col"
    >
      {/* Single column layout */}
      <div className="space-y-4 sm:space-y-6 flex-1 flex flex-col">
        {/* Image Section (Optional) */}
        {image && (
          <div className="w-full -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-4 sm:mb-6">
            <div className="relative w-full aspect-video rounded-t-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
              <Image
                src={image}
                alt={`Screenshot of ${title} project`}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        )}

        {/* Content Section */}
        <div className="space-y-3 sm:space-y-4 flex-1 flex flex-col">
          {/* Title */}
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
            {description}
          </p>

          {/* Tech Stack (Optional) */}
          {tech && tech.length > 0 && (
            <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
              {tech.map((technology) => (
                <span
                  key={technology}
                  role="listitem"
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
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
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setShowYouTube(true)}
                  aria-label={`Watch video about ${title}`}
                >
                  ▶ Watch Video
                </Button>
              ) : (
                <div className="relative w-full aspect-video -mx-6 sm:-mx-8 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
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
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4 w-full overflow-hidden">
              {github && (
                <Button
                  variant="primary"
                  size="sm"
                  href={github}
                  external
                  className="flex-shrink min-w-0"
                >
                  GitHub
                </Button>
              )}
              {demo && (
                <Button
                  variant="primary"
                  size="sm"
                  href={demo}
                  external
                  className="flex-shrink min-w-0"
                >
                  Demo
                </Button>
              )}
              {blog && (
                <Button
                  variant="primary"
                  size="sm"
                  href={blog}
                  external
                  className="flex-shrink min-w-0"
                >
                  Article
                </Button>
              )}
            </div>
          )}

          {/* Date (Optional) */}
          {date && (
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 font-medium pt-2 mt-auto">
              <time dateTime={date}>{formatDate(date)}</time>
            </p>
          )}
        </div>
      </div>
    </motion.article>
  );
}
