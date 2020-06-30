import React from 'react';

import { HomePage } from './HomePage';
import * as HeaderStories from './Header.stories';

export default {
  title: 'Storybook Example/HomePage',
  component: HomePage,
};

const Story = (args) => <HomePage {...args} />;

export const LoggedIn = Story.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Story.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
