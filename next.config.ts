/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/personal-portofolio',
  assetPrefix: '/personal-portofolio/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // disarankan untuk GitHub Pages
};

module.exports = nextConfig;
