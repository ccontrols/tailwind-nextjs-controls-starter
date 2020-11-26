import React from 'react';
import { RunConfiguration, defaultRunConfig } from "@component-controls/core";
import { TestingPage } from "./testing-page";

const config: RunConfiguration = {
  analytics: 'UA-XXXXXXXXX-X',
  title: `Tailwind component-controls`,
  description: `Tailwind project with typescript, react testing library and component-controls`,
  author: `@component-controls`,
  pages: {
    story: {
      tabs: [
        ...defaultRunConfig.pages.story.tabs,
        { title: 'Testing', render: () => <TestingPage /> },
      ],
    },
  }  
};
export default config;