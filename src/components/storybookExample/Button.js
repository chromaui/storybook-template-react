import React from 'react';
import PropTypes from 'prop-types';

const sizeToFontSize = {
  small: '12px',
  medium: '14px',
  large: '18px',
};

export const Button = ({ primary, size, children }) => (
  <button
    style={{
      color: primary ? 'white' : 'black',
      backgroundColor: primary ? 'red' : 'grey',
      fontSize: sizeToFontSize[size],
    }}
  >
    {children}
  </button>
);

Button.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(sizeToFontSize)),
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  primary: false,
  size: 'medium',
};
