import React from 'react';
import { shallow } from 'enzyme';
import ProductOverview from './ProductOverview.jsx';

describe('Product Overview', () => {
  test('should render my component', () => {
    const wrapper = shallow(<ProductOverview />);

    expect(wrapper).toMatchSnapshot();
  });
});
