'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import LogEntry, { Log } from './LogEntry';

interface LatestLogsProps {
  logs: Log[];
}

export default function LatestLogs({ logs }: LatestLogsProps) {
  if (logs.length === 0) {
    return null;
  }

  return (
    <section className="flex items-center justify-center px-6 py-20" aria-labelledby="latest-logs-heading">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Section Title and Description */}
          <div className="space-y-6">
            <h2 
              id="latest-logs-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight"
            >
              My Logbook
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
              A chronological record of projects, learnings, and random technical stuffs I learn.
            </p>
          </div>

          {/* Logs List */}
          <div className="flex flex-col space-y-8">
            {logs.map((log, index) => (
              <LogEntry key={log.slug} log={log} index={index} />
            ))}
          </div>

          {/* View All Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            className="pt-4"
          >
            <Link
              href="/logs"
              className="inline-flex items-center gap-2 text-lg font-medium text-gray-900 dark:text-white hover:gap-4 transition-all duration-200 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 rounded-sm"
              aria-label="View all engineering logs"
            >
              View All Logs
              <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
