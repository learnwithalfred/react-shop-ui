import React from 'react';
import Navbar from '../nav/Navbar';
import { LOGO } from '../utils/constants';

const Container = ({ children }) => {
  const loggedIn = true,
    isAdmin = true;
  const items = [
    {
      title: 'Home',
      url: '/',
      icon: '🏠',
      access: 'all',
    },
    {
      title: 'About',
      url: '/about',
      icon: '⛹️‍♂️',
      access: 'all',
    },
    {
      title: 'My Profile',
      url: '/profile',
      icon: '⛹️‍♂️',
      access: 'loggedIn',
    },
    {
      title: 'Admin',
      url: '/admin',
      icon: '⛹️‍♂️',
      access: 'admin',
    },
  ];
  return (
    <div>
      <Navbar logo={LOGO} loggedIn={loggedIn} isAdmin={isAdmin} items={items} />
      {children}
      Footer
    </div>
  );
};

export default Container;
