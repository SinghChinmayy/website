/**
 * Site Configuration
 * 
 * Centralized configuration for the entire site, loaded from environment variables.
 * This approach keeps sensitive data and site-specific values out of the codebase
 * while providing type-safe access throughout the application.
 * 
 * Setup:
 * 1. Copy .env.example to .env
 * 2. Customize values for your site
 * 3. Import and use siteConfig throughout the application
 * 
 * Configuration Sections:
 * - Site metadata (URL, language, title, description)
 * - Author information (name, title, bio, email, location)
 * - Social links (GitHub, LinkedIn, Twitter, Mastodon, Bluesky)
 * - Navigation structure
 * 
 * @module config
 */

import settings from './content/settings.json';

/**
 * Site configuration object
 * 
 * Centralized configuration loaded from src/content/settings.json (managed by Keystatic).
 * All values are loaded at build time and are type-safe throughout the application.
 * 
 * @constant
 */
export const siteConfig = {
  /**
   * Site URL (required for sitemap, canonical URLs, OG tags)
   */
  url: settings.site.url,

  /**
   * Site language (ISO 639-1 code)
   */
  language: settings.site.language,

  /**
   * Site title
   */
  title: settings.site.title,

  /**
   * Site description
   */
  description: settings.site.description,

  /**
   * Site logo
   */
  logo: settings.site.logo,

  /**
   * Site favicon
   */
  favicon: 'favicon' in settings.site ? settings.site.favicon : undefined,

  /**
   * Author information
   */
  author: settings.author,

  /**
   * CMS configuration
   */
  cms: settings.cms,

  /**
   * Social media links
   */
  social: settings.social,

  /**
   * Newsletter configuration
   */
  newsletter: settings.newsletter,

  /**
   * Navigation links
   */
  nav: settings.nav,
} as const;

/**
 * Type export for the entire site configuration
 */
export type SiteConfig = typeof siteConfig;

/**
 * Type export for social links object
 */
export type SocialLinks = typeof siteConfig.social;

/**
 * Type export for a single navigation item
 */
export type NavItem = typeof siteConfig.nav[number];
