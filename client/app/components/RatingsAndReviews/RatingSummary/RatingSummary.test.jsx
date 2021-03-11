import React from 'react';
import { shallow } from 'enzyme';
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

const RemoveAllFiltersRender = () => {
  if (listIsFiltered) {
    return (
      <button type="button" className="remove-review-filters-button" onClick={handleRemoveFilterClick}>Remove all filters</button>
    );
  }
  return (<></>);
};

describe('rating summary: ', () => {
  test('it renders correctly', () => {
    const wrapper = shallow(<RatingSummary metaData={metaData} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('it contains a StarRating component: ', () => {
    const wrapper = shallow(<RatingSummary metaData={metaData} />);

    expect(wrapper.find('StarRating').length).toBe(1);
  });

  test('it contains a recommendations component: ', () => {
    const wrapper = shallow(<RatingSummary metaData={metaData} />);

    expect(wrapper.find('NaNCondition').length).toBe(1);
  });

  test('it contains a RatingBreakdown component: ', () => {
    const wrapper = shallow(<RatingSummary metaData={metaData} />);

    expect(wrapper.find('RatingBreakdown').length).toBe(1);
  });

  test('it contains a RemoveAllFilters component: ', () => {
    const wrapper = shallow(<RatingSummary metaData={metaData} RemoveAllFiltersRender={RemoveAllFiltersRender} />);

    expect(wrapper.find('RemoveAllFiltersRender').length).toBe(1);
  });

  test('it contains a ProductBreakdown component: ', () => {
    const wrapper = shallow(<RatingSummary metaData={metaData} />);

    expect(wrapper.find('ProductBreakdown').length).toBe(1);
  });

});
