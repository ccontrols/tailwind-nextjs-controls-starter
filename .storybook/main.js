module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  siteUrl: 'https://tailwind-gatsby-controls-starter.netlify.app',
  pages: {
    story: {
      tabs: [{ route: 'page' }, { route: 'test' }],
    },
  },
};
