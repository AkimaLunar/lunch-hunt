import * as React from 'react';
import { shallow } from 'enzyme';
import Loading from './index';

describe('<Loading /', () => {
  it('renders without crashing', () => {
    shallow(<Loading />);
  });
});