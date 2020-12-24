const { defaultBuildConfig } = require('@component-controls/core');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  siteUrl: 'https://tailwind-gatsby-controls-starter.netlify.app',
  pages: {
    story: {
      tabs: [
        ...defaultBuildConfig.pages.story.tabs,
        {
          route: 'test',
          title: 'Testing',
          template: '@component-controls/pages/TestingPage',
        },
      ],
    },
  },
};
