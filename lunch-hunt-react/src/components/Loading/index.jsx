import * as React from 'react';
import './style.css';
import circle from './circle.svg';

const Loading = () => (
  <div className="loading">
    <img src={circle} className="loading__svg" alt="loading content" />
  </div>
)

export default Loading;