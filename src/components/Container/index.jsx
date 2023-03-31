import React from 'react';
import Footer from '../footer/footer';
import Navbar from '../nav/Navbar';
import './container.css';
import { COMPANY_NAME, LOGO } from '../utils/constants';

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
    <div className="container">
      <Navbar items={items} logo={LOGO} loggedIn={loggedIn} isAdmin={isAdmin} />
      <div className="content">{children}</div>
      <Footer logo={LOGO} companyName={COMPANY_NAME} />
    </div>
  );
};

export default Container;
