import React from 'react';
import { SBHeader } from './SBHeader';

export const SBScreen = () => (
  <article>
    <SBHeader
      links={[
        { title: 'Docs', href: 'https://docs.storybook.js.com' },
        { title: 'Learn Storybook', href: 'https://learnstorybook.com' },
      ]}
    />

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
