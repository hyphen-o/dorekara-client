const withPWA = require('next-pwa')({ dest: 'public' })

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  webpack: (config) => {
    config.watchOptions = {
      poll: 800,
      aggregateTimeout: 300
    }
    return config
  }
}

module.exports = process.env.NODE_ENV === 'development' ? nextConfig : withPWA(nextConfig)