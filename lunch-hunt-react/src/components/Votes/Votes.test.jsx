import * as React from 'react';
import { shallow } from 'enzyme';
import Votes from './index';

const testProps = {
  votes: []
}

describe('<Votes /', () => {
  it('renders without crashing', () => {
    shallow(<Votes {...testProps} />);
  });
});