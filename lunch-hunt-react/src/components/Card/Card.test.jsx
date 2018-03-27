import * as React from 'react';
import { shallow } from 'enzyme';
import Card from './index';

const testProps = {
  link: {
    title: 'test',
    url: 'test',
    postedBy: {
      username: 'test',
    },
    votes: [],
    comments: []
  }
};

describe('<Card /', () => {
  it('renders without crashing', () => {
    shallow(<Card {...testProps}/>);
  });
});