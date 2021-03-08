import React from 'react';
import { shallow } from 'enzyme';
import QuantitySelector from './QuantitySelector.jsx';

describe('Quantity Selector', () => {
  test('should render my component', () => {
    const wrapper = shallow(<QuantitySelector />);

    expect(wrapper).toMatchSnapshot();
  });
});
