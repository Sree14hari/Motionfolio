
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
    // Find the existing default rule for SVG files.
    // This rule is usually responsible for handling SVGs as static assets.
    const defaultSvgLoaderRule = config.module.rules.find(
      (rule: any) => rule.test && typeof rule.test.test === 'function' && rule.test.test('.svg')
    );

    if (defaultSvgLoaderRule) {
      // Modify the default SVG loader rule to only process SVGs imported with "?url".
      // This ensures that direct imports (without "?url") are not handled by this rule
      // and can be picked up by the @svgr/webpack rule below.
      defaultSvgLoaderRule.resourceQuery = /url/;
      // We DO NOT remove the issuer condition, as the original issuer might be important
      // for the default loader's intended scope. Our SVGR rule has its own issuer.
      // delete defaultSvgLoaderRule.issuer; 
    }

    // Add a new rule for @svgr/webpack to handle direct SVG imports as React components.
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/, // Only apply to SVGs imported from JS/TSX files.
      resourceQuery: { not: /url/ }, // Exclude SVGs imported with "?url".
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
