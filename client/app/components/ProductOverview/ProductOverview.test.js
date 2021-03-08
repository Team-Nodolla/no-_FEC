import React from 'react';
import { shallow } from 'enzyme';
import ProductOverview from './ProductOverview.jsx';

describe('Product Overview', () => {
  it('should render my component', () => {
    const wrapper = shallow(<ProductOverview />);
  });
});