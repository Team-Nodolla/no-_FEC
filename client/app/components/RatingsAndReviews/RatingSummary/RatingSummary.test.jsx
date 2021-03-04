import React from 'react';
import { shallow, mount } from 'enzyme';
import RatingSummary from './RatingSummary';

let metaData = {
  product_id: '13034',
  ratings: {
    3: '1',
    4: '1',
    5: '3',
  },
  recommended: {
    true: '5',
  },
  characteristics: {
    Quality: {
      id: 43655,
      value: '3.4000000000000000',
    },
  },
};

describe('rating summary: ', () => {
  test('it renders correctly', () => {
    const wrapper = shallow(<RatingSummary metaData={metaData} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('it contains a StarRating component: ', () => {
    const wrapper = mount(<RatingSummary metaData={metaData} />);

    expect(wrapper.find('StarRating').length).toBe(1);
  });

  test('it contains a recommendations component: ', () => {
    const wrapper = mount(<RatingSummary metaData={metaData} />);

    expect(wrapper.find('NaNCondition').length).toBe(1);
  });
});
