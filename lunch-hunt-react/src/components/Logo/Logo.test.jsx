import * as React from 'react';
import { shallow } from 'enzyme';
import Logo from './index';

describe('<Logo /', () => {
  it('renders without crashing', () => {
    shallow(<Logo />);
  });
});