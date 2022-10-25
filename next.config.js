/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    TMDB_API_KEY: process.env.08b5dc7d8539d5f952232df490e5de4e,
  },
  images: {
    domains: ['image.tmdb.org'],
  },
};

module.exports = nextConfig;
