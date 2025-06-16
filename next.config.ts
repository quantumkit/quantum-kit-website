import type { NextConfig } from 'next';
import { resolve } from 'path';

const isProd = process.env.NODE_ENV === 'production';
let basePath = isProd ? process.env.PAGES_BASE_PATH || '' : '';

/**
 * ✅ Ensure basePath starts with a slash
 * or is a full URL
 */
if (basePath && !basePath.startsWith('/') && !basePath.startsWith('http')) {
  basePath = `/${basePath}`;
}

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
  output: 'export',
  basePath,
  assetPrefix: basePath || '/',
};

export default nextConfig;
