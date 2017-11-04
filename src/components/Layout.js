import React from 'react';

export const Layout = props => (
  <div className="app-container">
    <header>
    </header>
    <div className="app-content">{props.children}</div>
    <footer>
    </footer>
  </div>
);

export default Layout;
