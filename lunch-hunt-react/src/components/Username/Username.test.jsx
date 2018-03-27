import * as React from 'react';
import { shallow } from 'enzyme';
import Username from './index';

describe('<Username /', () => {
  it('renders without crashing', () => {
    shallow(<Username />);
  });
});