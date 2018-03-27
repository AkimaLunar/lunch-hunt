import * as React from 'react';
import PropTypes from 'prop-types';
import './triangle.css';

const Triangle = ({ color }) => (
  <svg
    className="triangle"
    xmlns="http://www.w3.org/2000/svg"
    width="120"
    height="120"
    fill={`${color}`}
    viewBox="0 0 120 120">
    <polygon points="20,100 100,100 60,20" />
  </svg>
);

Triangle.propTypes = {
  color: PropTypes.string,
};

Triangle.defaultProps = {
  color: "#5e05b7"
}

export default Triangle;
