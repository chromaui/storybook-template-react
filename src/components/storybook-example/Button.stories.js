import React from 'react';

import { Button } from './Button';

export default {
  title: 'Storybook Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Story = (args) => <Button {...args} />;

export const Primary = Story.bind({});
Primary.args = {
  primary: true,
  children: 'Primary',
};

export const Secondary = Story.bind({});
Secondary.args = {
  children: 'Secondary',
};

export const Large = Story.bind({});
Large.args = {
  size: 'large',
  children: 'Large',
};

export const Small = Story.bind({});
Small.args = {
  size: 'small',
  children: 'Small',
};
