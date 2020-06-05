import React from 'react';

import { Button } from './Button';

export default {
  title: 'Storybook Example/Button',
  component: Button,
};

export const Primary = (args) => <Button {...args} />;
Primary.args = {
  primary: true,
  children: 'Primary',
};

export const Secondary = Primary.bind();
Secondary.args = {
  children: 'Secondary',
};

export const Large = Primary.bind();
Large.args = {
  size: 'large',
  children: 'Large',
};

export const Small = Primary.bind();
Small.args = {
  size: 'small',
  children: 'Small',
};
