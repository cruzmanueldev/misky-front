/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.miskyreposteria.es',
        port: '3001',
        pathname: '/uploads/**',
      },
    ],
    domains: ['api.miskyreposteria.es'],
  },
  experimental: {
    allowedDevOrigins: ['api.miskyreposteria.es'],
  },
};

export default nextConfig;
