import React from 'react';
import Footer from '../footer/footer';
import Navbar from '../nav/Navbar';
import { useAuth, useAdmin } from '../utils/constants';
import './container.css';
import { COMPANY_NAME, LOGO } from '../utils/constants';

const Container = ({ children }) => {
  const loggedIn = useAuth();
  const isAdmin = useAdmin();

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
      title: 'Add Product',
      url: '/products/new',
      icon: '⛹️‍♂️',
      access: 'admin',
    },
    {
      title: 'Admin',
      url: '/admin',
      icon: '⛹️‍♂️',
      access: 'admin',
    },
    {
      title: 'Login',
      url: '/auth/login',
      icon: '⛹️‍♂️',
      access: 'loggedOut',
    },
    {
      title: 'Signup',
      url: '/auth/signup',
      icon: '⛹️‍♂️',
      access: 'loggedOut',
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
