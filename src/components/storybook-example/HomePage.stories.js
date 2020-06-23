import React from 'react';

import { HomePage } from './HomePage';
import * as HeaderStories from './Header.stories';

export default {
  title: 'Storybook Example/HomePage',
  component: HomePage,
};

const HomePageStory = (args) => <HomePage {...args} />;

export const LoggedIn = HomePageStory.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = HomePageStory.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
