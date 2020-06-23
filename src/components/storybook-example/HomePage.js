import React from 'react';
import PropTypes from 'prop-types';

import { Header } from './Header';

export const HomePage = ({ user, onLogin, onLogout }) => (
  <article>
    <Header user={user} onLogin={onLogin} onLogout={onLogout} />

    <section>
      This page demonstrates that you can build full application screens using Storybook. Although
      this page is simple and doesn't have any input data, screens typically either take data
      gathered by a higher-level connected component (in stories you can compose such data from the
      args of sub-component stories), or assemble data themselves using services which you can mock
      out using Storybook. <br />
      Read more in the docs and in Learn Storybook, a tutorial for building components with
      Storybook (see links above).
    </section>
  </article>
);
HomePage.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};

HomePage.defaultProps = {
  user: null,
};
