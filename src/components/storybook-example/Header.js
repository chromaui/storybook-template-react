import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './Button';

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) =>
  console.log({ onLogin }) || (
    <header style={{ borderBottom: '1px solid #eee', paddingBottom: '12px' }}>
      <span className="icon" />
      <h1>Acme</h1>
      {user ? (
        <Button size="medium" onClick={onLogout}>
          Log out
        </Button>
      ) : (
        <div>
          <Button size="medium" onClick={onLogin}>
            Log in
          </Button>
          <Button primary size="medium" onClick={onCreateAccount}>
            Sign up
          </Button>
        </div>
      )}
    </header>
  );

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
