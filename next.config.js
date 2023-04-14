/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["animego.org", "ik.imagekit.io", "imagekit.io"]
  }
}

module.exports = nextConfig
