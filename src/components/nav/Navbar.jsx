import React from 'react';
import PropTypes from 'prop-types';
import NavItem from './NavItem';
import './nav.css';

const Navbar = ({ logo, items, loggedIn, isAdmin }) => {
  const filteredItems = items.filter((item) => {
    if (item.access === 'all') {
      return true;
    }
    if (item.access === 'loggedIn' && loggedIn) {
      return true;
    }
    if (item.access === 'admin' && isAdmin) {
      return true;
    }
    return false;
  });

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar__items">
        {filteredItems.map((item) => (
          <NavItem key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
};

Navbar.propTypes = {
  items: PropTypes.array.isRequired,
  logo: PropTypes.string.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired,
};

export default Navbar;
