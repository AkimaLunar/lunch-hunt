import * as React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const Footer = ({ user, logout }) => (
  <footer className="footer">
    {user.isLoggedIn
      ? (<p><a
          onClick={logout}>
          Log out, @{user.username}!
        </a></p>)
      : ''
    }
    <p>LunchHunt</p>
  </footer>
)

Footer.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
  }),
  logout: PropTypes.func,
};

export default Footer;