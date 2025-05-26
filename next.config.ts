
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
  webpack(config, { isServer }) {
    // Find the default SVG rule and modify it to exclude SVGs imported from .tsx files
    // This allows @svgr/webpack to handle those imports as React components
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule.test?.test?.('.svg')
    );

    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i; // Exclude all SVGs from the default loader initially
    }
    
    // Add a rule for @svgr/webpack to handle direct SVG imports as React components.
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/, // Only apply to SVGs imported from JS/TSX files.
      use: ['@svgr/webpack'],
    });

    // Re-add a rule for SVGs to be handled as static assets if not handled by SVGR
    // This is for cases like CSS background images or direct img src.
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { not: /\.[jt]sx?$/ }, // Apply if not imported from JS/TSX
      type: 'asset/resource',
    });

    return config;
  },
};

export default nextConfig;
