import React from 'react';
import { SBLinks } from './SBLinks';

export const SBHeader = ({ links }) => (
  <header>
    <h1>Storybook</h1>
    <SBLinks links={links} size="large" />
  </header>
);

SBHeader.propTypes = {
  links: SBLinks.propTypes.links,
};
