import * as React from 'react';
import { shallow } from 'enzyme';
import Shell from './index';

describe('<Shell /', () => {
  it('renders without crashing', () => {
    shallow(<Shell />);
  });
});