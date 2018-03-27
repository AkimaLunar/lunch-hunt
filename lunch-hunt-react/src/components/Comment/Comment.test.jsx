import * as React from 'react';
import { shallow } from 'enzyme';
import Comment from './index';

const testProps = {
    comment: {
      text: "test",
      postedBy: {
        username: "test",
      }
    }
};

describe('<Comment /', () => {
  it('renders without crashing', () => {
    shallow(<Comment {...testProps}/>);
  });
});