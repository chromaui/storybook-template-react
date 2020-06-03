import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const sizeToFontSize = {
  small: '12px',
  medium: '14px',
  large: '16px',
};

export const SBLinks = ({ links, size }) => (
  <Fragment>
    {links.map(({ href, title = href }, index) => (
      <Fragment key={index}>
        {index !== 0 ? ' | ' : ''}
        <a href={href} style={{ fontSize: sizeToFontSize[size] }}>
          {title}
        </a>
      </Fragment>
    ))}
  </Fragment>
);

SBLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      href: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  size: PropTypes.oneOf(Object.keys(sizeToFontSize)),
};

SBLinks.defaultProps = {
  size: 'medium',
};
