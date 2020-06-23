import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './Button';

export const Header = ({ user, onLogin, onLogout }) => (
  <header>
    <h1>Storybook</h1>
    {user ? (
      <Button primary size="large" onClick={onLogout}>
        Logout
      </Button>
    ) : (
      <Button primary size="large" onClick={onLogin}>
        Login
      </Button>
    )}
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
