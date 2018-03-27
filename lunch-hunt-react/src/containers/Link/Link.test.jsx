import * as React from 'react';
import { shallow } from 'enzyme';
import Link from './index';

describe('<Link /', () => {
  it('renders without crashing', () => {
    shallow(<Link />);
  });
});