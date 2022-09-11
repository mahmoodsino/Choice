/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  reactStrictMode: true,
  images: {
      domains: ["192.168.1.12"],
      formats: ["image/webp"],
  },
};