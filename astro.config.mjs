/**
 * Astro Configuration
 * 
 * Main configuration file for the Astro site. Defines build settings, integrations,
 * environment variables schema, image optimization, and markdown processing.
 * 
 * Configuration Sections:
 * - Output mode: Static site generation (SSG)
 * - Integrations: MDX for rich content, Sitemap for SEO
 * - Environment variables: Type-safe schema with defaults
 * - Image optimization: Sharp-based processing with responsive sizes
 * - Markdown: Syntax highlighting with Shiki
 * 
 * Setup:
 * 1. Copy .env.example to .env
 * 2. Set SITE_URL and other environment variables
 * 3. Run `npm run dev` for development or `npm run build` for production
 * 
 * @see https://astro.build/config
 */

import { defineConfig, envField } from 'astro/config';
import { loadEnv } from 'vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import cloudflare from '@astrojs/cloudflare';

/**
 * Load environment variables from .env file
 * 
 * Uses Vite's loadEnv to read environment variables at build time.
 * Falls back to 'production' if NODE_ENV is not set.
 */
const { SITE_URL } = loadEnv(process.env.NODE_ENV || 'production', process.cwd(), '');

/**
 * Astro configuration object
 * 
 * Defines all build-time settings, integrations, and optimizations for the site.
 * 
 * @see https://astro.build/config
 */
export default defineConfig({
  /**
   * Output mode: Static Site Generation with server routes support
   * 
   * In Astro v5+, 'static' mode supports both static generation and
   * server-side rendering for specific routes (e.g., Keystatic CMS).
   * Most pages are pre-rendered at build time for optimal performance.
   */
  output: 'static',

  /**
   * Cloudflare adapter
   * 
   * Enables deployment to Cloudflare Pages with support for server-side
   * rendering where needed (e.g., Keystatic CMS routes).
   */
  adapter: cloudflare(),

  /**
   * Astro integrations
   * 
   * - MDX: Enables MDX support for rich content authoring with JSX components
   * - Sitemap: Automatically generates sitemap.xml for search engines
   * - React: Enables React components in Astro
   * - Keystatic: Headless CMS for content management
   */
  integrations: [
    mdx(),
    sitemap(),
    react(),
    keystatic(),
  ],

  /**
   * Site URL
   * 
   * Base URL for the site, loaded from SITE_URL environment variable.
   * Required for:
   * - Sitemap generation
   * - Canonical URLs
   * - Open Graph tags
   * - RSS feeds
   * 
   * Set SITE_URL in your .env file (e.g., https://example.com)
   */
  site: SITE_URL || 'https://example.com',

  /**
   * Environment variables schema (Astro v5+)
   * 
   * Defines type-safe environment variables with validation and defaults.
   * All variables are client-side accessible and public.
   * 
   * Categories:
   * - Build-time: SITE_URL
   */
  env: {
    schema: {
      // Build-time configuration
      SITE_URL: envField.string({ context: 'client', access: 'public', default: 'https://example.com' }),
    },
  },

  /**
   * Image optimization configuration
   * 
   * Uses Astro's built-in Sharp-based image service for automatic optimization.
   * 
   * Features:
   * - Automatic format conversion (AVIF, WebP, PNG, JPEG)
   * - Responsive image generation with srcset
   * - Build-time optimization for static images
   * - Memory-safe processing with pixel limits
   * 
   * The limitInputPixels setting prevents memory issues when processing
   * very large images (~16K x 16K pixels maximum).
   */
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        // Limit concurrent image processing to avoid memory issues
        limitInputPixels: 268402689, // ~16K x 16K pixels
      }
    },
    // Remote image patterns (currently empty - add patterns as needed)
    remotePatterns: [],
  },

  /**
   * Markdown configuration
   * 
   * Configures markdown processing and syntax highlighting.
   * 
   * Shiki Configuration:
   * - Theme: GitHub Dark for consistent code highlighting
   * - Wrap: Enables line wrapping for long code lines
   */
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});
