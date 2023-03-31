import React from 'react';
import PropTypes from 'prop-types';
import NavItem from './NavItem';
import './nav.css';
import { useDispatch } from 'react-redux';
import { logOutUser } from '../../features/auth/authSlice';

const Navbar = ({ logo, items, loggedIn, isAdmin }) => {
  const dispatch = useDispatch();
  const filteredItems = items.filter((item) => {
    if (item.access === 'all') {
      return true;
    }
    if (item.access === 'loggedOut' && !loggedIn) {
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

  const handleLogout = () => {
    dispatch(logOutUser);
  };

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar__items">
        {filteredItems.map((item) => (
          <NavItem key={item.title} item={item} />
        ))}
        {loggedIn && (
          <button className="navitem" onClick={handleLogout}>
            <span className="navitem__title">Logout</span>
          </button>
        )}
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
