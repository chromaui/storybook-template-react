import React from 'react';

import { Header } from './Header';

export default {
  title: 'Storybook Example/Header',
  component: Header,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  // argTypes: {
  //   onLogin: { action: 'onLogin' },
  // },
};

export const LoggedIn = (args) => <Header {...args} />;
LoggedIn.args = {
  user: {},
};

export const LoggedOut = LoggedIn.bind();
LoggedOut.args = {};
