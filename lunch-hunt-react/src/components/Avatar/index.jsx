import * as React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Avatar = ({ username, size, color }) => {
  const radius = (size) => {
    switch (size) {
      case ('S'):
        return 1.75;
      case ('M'):
        return 2.25;
      case ('L'):
        return 3.75;
      default:
        return 2.25
    }
  }
  const fontSize = (size) => {
    switch (size) {
      case ('S'):
        return .75;
      case ('M'):
        return .85;
      case ('L'):
        return 1;
      default:
        return .85
    }
  }
  const r = radius(size);
  const f = fontSize(size);
  const str = username.substr(0, 2);
  const h = Math.floor(200 + Math.random() * 160);
  const c = color ? color : `hsl(${h}, 100%, 67%)`;
  return (
    <div className="avatar" style={{
      backgroundColor: c,
      fontSize: `${f}rem`,
      height: `${r}rem`,
      width: `${r}rem`
    }}>{str}</div>
  )
}

Avatar.propTypes = {
  username: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string
};
Avatar.defaultProps = {
  username: '....',
  size: '2.25rem',
  color: '#77abff'
};

export default Avatar;
