/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // basePath: '/personal-portofolio',
  // assetPrefix: '/personal-portofolio/',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // disarankan untuk GitHub Pages
};

module.exports = nextConfig;
