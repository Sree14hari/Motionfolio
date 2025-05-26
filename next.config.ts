
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  webpack(config) {
    // Add a rule for @svgr/webpack to handle direct SVG imports as React components.
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/, // Only apply to SVGs imported from JS/TSX files.
      // Note: We are not using resourceQuery here to keep it simple.
      // This means direct SVG imports in JS/TSX will be components.
      // For SVGs as URLs (e.g., for next/image), you'd typically import them differently
      // or ensure they are not caught by this rule (e.g. by naming convention or folder structure if this rule is too greedy).
      // However, for the current Logo component usage, this should be sufficient.
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
