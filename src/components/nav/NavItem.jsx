import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './nav.css';

const NavItem = ({ item }) => {
  return (
    <Link to={item.url} className="navitem">
      <div className="navitem__icon">{item.icon && item.icon}</div>
      <div className="navitem__title">{item.title}</div>
    </Link>
  );
};

NavItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default NavItem;
