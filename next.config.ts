/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
    domains: ['miro.medium.com'], // Add domains for Medium images
  },
  basePath: process.env.NODE_ENV === 'production' ? '/nishankster-portfolio' : '',
}

module.exports = {
  output: 'export',
  images: { unoptimized: true },
  // No basePath needed for root domains
}