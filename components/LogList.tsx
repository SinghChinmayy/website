'use client';

import { motion } from 'framer-motion';
import LogEntry, { Log } from './LogEntry';

interface LogListProps {
  logs: Log[];
}

export default function LogList({ logs }: LogListProps) {
  return (
    <section className="w-full px-6 py-12" aria-label="Engineering logs">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex flex-col">
          {logs.length > 0 ? (
            logs.map((log, index) => (
              <LogEntry key={log.slug} log={log} index={index} />
            ))
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                No logs found
              </p>
              <p className="text-base text-gray-600 dark:text-gray-400">
                Check back soon for engineering updates and learning notes.
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
