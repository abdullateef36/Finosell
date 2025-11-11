// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Modern, secure way (Next.js 13+ App Router)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;