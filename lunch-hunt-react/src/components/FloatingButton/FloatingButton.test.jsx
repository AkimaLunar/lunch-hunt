import * as React from 'react';
import { shallow } from 'enzyme';
import FloatingButton from './index';

describe('<FloatingButton /', () => {
  it('renders without crashing', () => {
    shallow(<FloatingButton />);
  });
});