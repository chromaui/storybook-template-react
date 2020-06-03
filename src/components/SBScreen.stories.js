import React from 'react';

import { SBScreen } from './SBScreen';

export default {
  title: 'Screen',
  component: SBScreen,
};

export const Typical = (args) => <SBScreen {...args} />;
Typical.args = {};
