import React from 'react';

import { SBLinks } from './SBLinks';

export default {
  title: 'Links',
  component: SBLinks,
};

export const SingleLink = (args) => <SBLinks {...args} />;
SingleLink.args = { links: [{ href: 'https://google.com' }] };

export const StorybookDocumentation = SingleLink.bind();
StorybookDocumentation.args = {
  links: [
    { title: 'Docs', href: 'https://docs.storybook.js.com' },
    { title: 'Learn Storybook', href: 'https://learnstorybook.com' },
  ],
  size: 'large',
};

export const Empty = StorybookDocumentation.bind();
Empty.args = { links: [] };
