import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>Home</li>
            <li>Track</li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>Footer Content</footer>
    </div>
  );
};

export default MainLayout;
