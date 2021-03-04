import React from 'react';
import { shallow } from 'enzyme';
import RatingsAndReviews from './RatingsAndReviews';

describe('Ratings and reviews parent component', () => {
  test('it renders correctly', () => {
    const wrapper = shallow(<RatingsAndReviews />);

    expect(wrapper).toMatchSnapshot();
  }),

})
