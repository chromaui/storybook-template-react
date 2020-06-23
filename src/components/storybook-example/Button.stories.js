import React from 'react';

import { Button } from './Button';

export default {
  title: 'Storybook Example/Button',
  component: Button,
};

const ButtonStory = (args) => <Button {...args} />;

export const Primary = ButtonStory.bind({});
Primary.args = {
  primary: true,
  children: 'Primary',
};

export const Secondary = ButtonStory.bind({});
Secondary.args = {
  children: 'Secondary',
};

export const Large = ButtonStory.bind({});
Large.args = {
  size: 'large',
  children: 'Large',
};

export const Small = ButtonStory.bind({});
Small.args = {
  size: 'small',
  children: 'Small',
};
