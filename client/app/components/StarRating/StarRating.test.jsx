import React from 'react';
import { shallow } from 'enzyme';
import StarRating from './StarRating.jsx';

describe('StarRating', () => {
  test('it renders correctly', () => {
    const wrapper = shallow(<StarRating />);

    expect(wrapper).toMatchSnapshot();
  });
});
