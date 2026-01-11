import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Optional: Add trailing slashes for better static hosting
  trailingSlash: true,
};

export default nextConfig;