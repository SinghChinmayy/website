import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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

const projectsDirectory = path.join(process.cwd(), 'data');

export function getAllProjects(): Project[] {
  const fullPath = path.join(projectsDirectory, 'projects.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  // Split by ---\n\n--- pattern (project separators)
  const projectStrings = fileContents.split(/\n---\n\n---\n/).map(str => str.trim());
  
  const projects: Project[] = [];
  
  for (let projectString of projectStrings) {
    // Ensure the string starts with --- for proper frontmatter parsing
    if (!projectString.startsWith('---')) {
      projectString = '---\n' + projectString;
    }
    // Ensure it ends with --- 
    if (!projectString.endsWith('---')) {
      projectString = projectString + '\n---';
    }
    
    try {
      const { data } = matter(projectString);
      
      if (data.title && data.description) {
        // Create slug from title
        const slug = data.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');
        
        projects.push({
          title: data.title,
          description: data.description,
          image: data.image,
          tech: data.tech,
          github: data.github,
          demo: data.demo,
          youtube: data.youtube,
          blog: data.blog,
          date: data.date,
          slug,
        });
      }
    } catch (error) {
      console.error('Error parsing project:', error);
    }
  }
  
  // Sort by date (newest first)
  projects.sort((a, b) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    return b.date.localeCompare(a.date);
  });
  
  return projects;
}

export function formatDate(dateString?: string): string {
  if (!dateString) return '';
  
  try {
    const [year, month] = dateString.split('-');
    const date = new Date(parseInt(year), month ? parseInt(month) - 1 : 0);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  } catch {
    return dateString;
  }
}
