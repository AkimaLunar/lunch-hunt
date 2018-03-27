import * as React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const buttonStyle = (props) => (
  classNames([
    "button", {
      "button__light": props.light,
      "button__dark": props.dark,
      "button__alt": props.alt,
      "button__transparent": props.transparent,
      "button__disabled": props.disabled,
    }
]))

const SimpleButton = (props) => (
  <button
    className={buttonStyle(props)}
    onClick={(e) => {
      e.preventDefault();
      if (props.onClick) { props.onClick(e) }
    }}>
      {props.text}
  </button>
)

SimpleButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  alt: PropTypes.bool,
  transparent: PropTypes.bool,
  disabled: PropTypes.bool,
};

SimpleButton.defaultProps = {
  text: 'click'
}

export default SimpleButton;