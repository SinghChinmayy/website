import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Links {
  social: {
    github?: string;
    linkedin?: string;
    x?: string;
    youtube?: string;
    instagram?: string;
  };
  contact: {
    email?: string;
    instagram?: string;
  };
}

export function getLinks(): Links {
  try {
    const linksPath = path.join(process.cwd(), 'data/links/links.md');
    const fileContents = fs.readFileSync(linksPath, 'utf8');
    const { data } = matter(fileContents);
    
    return {
      social: data.social || {},
      contact: data.contact || {},
    } as Links;
  } catch (error) {
    console.error('Error reading links:', error);
    return {
      social: {},
      contact: {},
    };
  }
}
