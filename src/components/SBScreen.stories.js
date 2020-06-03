import React from 'react';

import { SBScreen } from './SBScreen';
import { Documentation } from './SBHeader.stories';

export default {
  title: 'Screen',
  component: SBScreen,
};

export const Typical = (args) => <SBScreen {...args} />;
Documentation.args = {};
