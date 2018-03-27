import * as React from 'react';
import { shallow } from 'enzyme';
import PostLink from './index';

describe('<PostLink /', () => {
  it('renders without crashing', () => {
    shallow(<PostLink />);
  });
});