// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   output: 'export',
//   basePath: process.env.PAGES_BASE_PATH,
// };

// export default nextConfig;

import type { NextConfig } from 'next';
import { resolve } from 'path';

const nextConfig: NextConfig = {
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: config => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      three: resolve(__dirname, 'node_modules/three'),
    };
    return config;
  },
  // Optional: You can include these if needed
  output: 'export',
  basePath: process.env.PAGES_BASE_PATH,
};

export default nextConfig;
