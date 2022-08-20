/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['sopt-makers.s3.ap-northeast-2.amazonaws.com'],
  },
};

module.exports = nextConfig;
