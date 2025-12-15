import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/joselawrence',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
