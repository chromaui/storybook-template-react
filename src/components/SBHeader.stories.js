import React from 'react';

import { SBHeader } from './SBHeader';
import { StorybookDocumentation } from './SBLinks.stories';

export default {
  title: 'Header',
  component: SBHeader,
};

export const Documentation = (args) => <SBHeader {...args} />;
Documentation.args = {
  links: StorybookDocumentation.args.links,
};
