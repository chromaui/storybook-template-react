import React from 'react';

import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
};

const Story = (args) => <Header {...args} />;

export const LoggedIn = Story.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Story.bind({});
LoggedOut.args = {};
