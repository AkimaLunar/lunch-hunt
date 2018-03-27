import * as React from 'react';
import { shallow } from 'enzyme';
import SimpleButton from './index';

describe('<SimpleButton /', () => {
  it('renders without crashing', () => {
    shallow(<SimpleButton />);
  });
});