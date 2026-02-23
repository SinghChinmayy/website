/**
 * Page Metadata Configuration
 * 
 * Centralized SEO metadata for all static pages. Single source of truth
 * for titles and descriptions to ensure consistency across the site.
 * 
 * Usage:
 * ```astro
 * ---
 * import BaseLayout from '../layouts/BaseLayout.astro';
 * import SEO from '../components/SEO.astro';
 * import { pagesConfig } from '../pages.config';
 * ---
 * 
 * <BaseLayout>
 *   <SEO 
 *     slot="head"
 *     title={pagesConfig.projects.title}
 *     description={pagesConfig.projects.description}
 *   />
 *   <!-- Page content -->
 * </BaseLayout>
 * ```
 * 
 * @module pages.config
 */



/**
 * Pages configuration object
 * 
 * Contains metadata for all static pages. Dynamic pages (like individual
 * project or article pages) generate their own metadata from content.
 */
export const pagesConfig = {
  /**
   * Home page (/)
   * Note: Home page uses siteConfig for title/description as it represents the site itself
   */
  home: {
    title: 'Home',
    description: 'CS undergrad exploring systems engineering, cloud infrastructure, and backend development. Projects, writing, and things I\'m learning along the way.',
  },

  /**
   * Projects listing page (/projects)
   */
  projects: {
    title: 'Projects',
    description: 'Projects and case studies showing how I approach problems, make technical decisions, and build working systems.',
    heading: 'Projects',
    intro: 'Things I\'ve built and worked on. Each project covers the problem, the approach, the tools I used, and what I learned.',
  },

  /**
   * Decisions listing page (/decisions)
   */
  decisions: {
    title: 'Decisions',
    description: 'A log of technical decisions I\'ve made — the context, alternatives I considered, and why I chose what I did.',
    heading: 'Decisions',
    intro: 'A transparent log of architectural and technical decisions I\'ve made across my projects. Each entry documents the context, alternatives considered, and the reasoning behind the choice.',
  },

  /**
   * Journey timeline page (/journey)
   */
  journey: {
    title: 'Resume & Journey',
    description: 'My resume, technical skills, and a timeline of what I\'ve been learning and building.',
    heading: 'Resume & Journey',
    intro: 'My resume, the tools and technologies I work with, and a timeline of my learning and growth so far.',
  },

  /**
   * Writing/blog listing page (/writing)
   */
  writing: {
    title: 'Writing',
    description: 'Technical articles, notes, and things I\'ve learned from building software and studying computer science.',
    heading: 'Writing',
    intro: 'Technical articles, notes, and lessons learned from building software systems. I write about architecture decisions, engineering practices, and things I find interesting.',
  },

  /**
   * Uses/tools page (/uses)
   */
  uses: {
    title: 'Uses - Tools, Stack & Environment',
    description: 'A comprehensive list of the tools, technologies, and environment I use for development work.',
    heading: 'Uses',
    intro: 'A transparent look at the tools, technologies, and environment that power my development workflow. This page documents what I use and why, helping other engineers discover useful tools and understand my technical context.',
  },

  /**
   * Contact page (/contact)
   */
  contact: {
    title: 'Contact',
    description: 'Get in touch — happy to chat about projects, opportunities, or anything engineering.',
    heading: 'Say Hello',
  },
} as const;


