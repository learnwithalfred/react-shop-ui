import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = ({ logo, companyName }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer__logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="footer__info">
        &copy; {currentYear} {companyName}. All rights reserved.
      </div>
    </div>
  );
};
Footer.propTypes = {
  logo: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
};
export default Footer;
