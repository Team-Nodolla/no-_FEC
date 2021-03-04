import React from 'react';
import { shallow } from 'enzyme';
import MoreReviewsButton from './MoreReviewsButton.jsx';

describe('"more reviews" button: ', () => {
  test('it renders a button', () => {
    const wrapper = shallow(<MoreReviewsButton />);

    expect(wrapper).toMatchSnapshot();
  });

  // TODO - add functionality test to button
});
