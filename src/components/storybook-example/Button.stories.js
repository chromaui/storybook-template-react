import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Story = (args) => <Button {...args} />;

export const Primary = Story.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Story.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Story.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Story.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
