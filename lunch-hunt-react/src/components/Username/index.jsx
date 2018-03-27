import * as React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Username = ({ username, color }) => {
  const usernameStyle = (props) => (
    classNames([
      "username", {
        "username__light": !color || color === 'light',
        "username__dark": color === 'dark',
      }
  ]))

  return (
    <p className={usernameStyle(color)}>&#160;&#64;{username}</p>
)}

Username.propTypes = {
  username: PropTypes.string,
  color: PropTypes.string
};

export default Username;