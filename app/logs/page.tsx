import { Metadata } from 'next';
import { getAllLogs } from '@/lib/logs';
import LogList from '@/components/LogList';

export const metadata: Metadata = {
  title: 'Logbook | Chinmay Singh',
  description: 'A chronological log of engineering projects, learnings, and technical notes.',
  keywords: ['Engineering Log', 'Learning', 'Development', 'Backend', 'Technical Notes'],
  openGraph: {
    title: 'Engineering Log | Chinmay Singh',
    description: 'A chronological log of engineering projects, learnings, and technical notes.',
    type: 'website',
  },
};

export default function LogsPage() {
  const logs = getAllLogs();

  return (
    <main id="main-content" className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="flex items-center justify-center px-6 py-20 min-h-[40vh]">
        <div className="max-w-4xl w-full">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
              My Logbook
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
              A chronological record of projects, learnings, and random technical stuffs I learn.
            </p>
          </div>
        </div>
      </section>

      {/* Logs List */}
      <LogList logs={logs} />
    </main>
  );
}
