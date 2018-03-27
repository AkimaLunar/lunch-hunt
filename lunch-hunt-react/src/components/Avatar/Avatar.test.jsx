import * as React from 'react';
import { shallow } from 'enzyme';
import Avatar from './index';

const testProps = {
    username: 'test',
};

describe('<Avatar /', () => {
  it('renders without crashing', () => {
    shallow(<Avatar {...testProps} />);
  });
});
