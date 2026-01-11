'use client';

import { motion } from 'framer-motion';

export interface Log {
  title: string;
  date: string;
  content: string;
  youtube?: string;
  twitter?: string;
  blog?: string;
  project?: string;
  slug: string;
}

function formatLogDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  } catch {
    return dateString;
  }
}

interface LogEntryProps {
  log: Log;
  index: number;
}

export default function LogEntry({ log, index }: LogEntryProps) {
  const { title, date, content, youtube, twitter, blog, project } = log;
  const hasLinks = youtube || twitter || blog || project;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
      className="py-8 border-b border-gray-200 dark:border-gray-800 last:border-b-0"
      aria-labelledby={`log-title-${log.slug}`}
    >
      <div className="space-y-4">
        {/* Date */}
        <time 
          dateTime={date}
          className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium"
        >
          {formatLogDate(date)}
        </time>

        {/* Title */}
        <h3 
          id={`log-title-${log.slug}`}
          className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white leading-tight"
        >
          {title}
        </h3>

        {/* Content */}
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          {content}
        </p>

        {/* Optional Links */}
        {hasLinks && (
          <div className="flex flex-wrap gap-3 pt-2" aria-label="Related links">
            {youtube && (
              <a
                href={`https://youtube.com/watch?v=${youtube}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium text-sm hover:bg-gray-800 dark:hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 transition-all duration-200 motion-reduce:transition-none border-2 border-gray-900 dark:border-white"
                aria-label={`Watch video about ${title}`}
              >
                YouTube
              </a>
            )}
            {twitter && (
              <a
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium text-sm hover:bg-gray-800 dark:hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 transition-all duration-200 motion-reduce:transition-none border-2 border-gray-900 dark:border-white"
                aria-label={`View X/Twitter post about ${title}`}
              >
                X
              </a>
            )}
            {blog && (
              <a
                href={blog}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium text-sm hover:bg-gray-800 dark:hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 transition-all duration-200 motion-reduce:transition-none border-2 border-gray-900 dark:border-white"
                aria-label={`Read blog post about ${title}`}
              >
                Blog
              </a>
            )}
            {project && (
              <a
                href={project}
                className="px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium text-sm hover:bg-gray-800 dark:hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 transition-all duration-200 motion-reduce:transition-none border-2 border-gray-900 dark:border-white"
                aria-label={`View related project: ${title}`}
              >
                Project
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
