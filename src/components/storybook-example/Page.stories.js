import React from 'react';

import { Page } from './Page';
import * as HeaderStories from './Header.stories';

export default {
  title: 'Example/Page',
  component: Page,
};

const Story = (args) => <Page {...args} />;

export const LoggedIn = Story.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Story.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
