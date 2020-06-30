import React from 'react';
import PropTypes from 'prop-types';

import { Header } from './Header';

export const Page = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <article>
    <Header user={user} onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount} />

    <h2>Pages in Storybook</h2>

    <section>
      We recommend building UIs with a{' '}
      <a href="https://blog.hichroma.com/component-driven-development-ce1109d56c8e" target="_blank">
        component-driven
      </a>{' '}
      process starting with atomic components and edning with pages. <br />
      <br />
      Render pages with mock data. This makes it easy to review page states without needing to
      navigate to them in an app. Here are some handy patterns for managing page data in Storybook:
      <ul>
        <li>
          Use a higher-level connected component. Storybook helps you compose such data from the
          "args" of child component stories
        </li>
        <li>
          Assemble data in the page component from your services. You can mock these services out
          using Storybook.
        </li>
      </ul>
      Get a guided tutorial on component-driven development at{' '}
      <a href="https://www.learnstorybook.com" target="_blank">
        Learn Storybook
      </a>
      . Read more in the{' '}
      <a href="https://storybook.js.org/docs" target="_blank">
        docs
      </a>
      .
    </section>
    <section>
      <span class="tip">Tip</span> Adjust the width of the canvas with the <span />
      Viewports addon in the toolbar
    </section>
  </article>
);
Page.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Page.defaultProps = {
  user: null,
};
