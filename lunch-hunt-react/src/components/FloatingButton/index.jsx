import * as React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const FloatingButton = ({ onClick, text }) => (
  <button
    className="floatingButton"
    onClick={(e) => {
      e.preventDefault();
      if (onClick) { onClick(e) }
    }}>
      {text}
  </button>
)

FloatingButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};

export default FloatingButton;