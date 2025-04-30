// next.config.js
const isGithubPages = process.env.GITHUB_PAGES === 'true';

module.exports = {
  output: 'export', // penting: generate static export
  basePath: isGithubPages ? '/personal-portofolio' : '',
  assetPrefix: isGithubPages ? '/personal-portofolio/' : '',
};
