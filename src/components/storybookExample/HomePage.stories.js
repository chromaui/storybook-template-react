import React from 'react';

import { HomePage } from './HomePage';
import * as HeaderStories from './Header.stories';

export default {
  title: 'Storybook Example/HomePage',
  component: HomePage,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const LoggedIn = (args) => <HomePage {...args} />;
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = LoggedIn.bind();
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
