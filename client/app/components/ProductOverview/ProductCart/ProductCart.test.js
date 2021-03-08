import React from 'react';
import { shallow } from 'enzyme';
import ProductCart from './ProductCart.jsx';

describe('Product Cart', () => {
  test('should render my component', () => {
    const wrapper = shallow(<ProductCart />);

    expect(wrapper).toMatchSnapshot();
  });
});
