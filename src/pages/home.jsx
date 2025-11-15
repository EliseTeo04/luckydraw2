import React from 'react';
import {
  Page,
  Navbar,
  NavTitle,
  NavTitleLarge,
  Link,
  Toolbar,
  Block,
} from 'framework7-react';

const HomePage = () => (
  <Page name="home-page">
    <div className="page-content">
      <div className="animation-block">
         <iframe src="/images/test.mp4" />
      </div>
    </div>
  </Page>
);
export default HomePage;