import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Log {
  title: string;
  date: string;
  content: string;
  youtube?: string;
  twitter?: string;
  blog?: string;
  project?: string;
  slug: string;
  fileName: string;
}

const logsDirectory = path.join(process.cwd(), 'data/logs');

export function getAllLogs(): Log[] {
  try {
    // Check if logs directory exists
    if (!fs.existsSync(logsDirectory)) {
      console.warn('Logs directory does not exist');
      return [];
    }

    const fileNames = fs.readdirSync(logsDirectory);
    const logs: Log[] = [];

    for (const fileName of fileNames) {
      if (!fileName.endsWith('.md')) continue;

      try {
        const fullPath = path.join(logsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        if (data.title && data.date && data.content) {
          const slug = fileName.replace(/\.md$/, '');

          logs.push({
            title: data.title,
            date: data.date,
            content: data.content,
            youtube: data.youtube,
            twitter: data.twitter,
            blog: data.blog,
            project: data.project,
            slug,
            fileName,
          });
        }
      } catch (error) {
        console.error(`Error parsing log file ${fileName}:`, error);
      }
    }

    // Sort by date (newest first)
    logs.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });

    return logs;
  } catch (error) {
    console.error('Error reading logs directory:', error);
    return [];
  }
}

export function getLatestLogs(count: number = 5): Log[] {
  const allLogs = getAllLogs();
  return allLogs.slice(0, count);
}

export function formatLogDate(dateString: string): string {
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
