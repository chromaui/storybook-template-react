import React from 'react';

import { Header } from './Header';

export default {
  title: 'Storybook Example/Header',
  component: Header,
};

const HeaderStory = (args) => <Header {...args} />;

export const LoggedIn = HeaderStory.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = HeaderStory.bind({});
LoggedOut.args = {};
