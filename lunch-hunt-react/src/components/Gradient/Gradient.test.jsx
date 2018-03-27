import * as React from 'react';
import { shallow } from 'enzyme';
import Gradient from './index';

describe('<Gradient /', () => {
  it('renders without crashing', () => {
    shallow(<Gradient />);
  });
});