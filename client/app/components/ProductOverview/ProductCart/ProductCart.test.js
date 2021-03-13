import React from 'react';
import { shallow } from 'enzyme';
import ProductCart from './ProductCart.jsx';

describe('Product Cart', () => {
  test('should render my component', () => {
    const wrapper = shallow(<ProductCart />);
    expect(wrapper).toMatchSnapshot();
  });

  test('render a button with text of `Add to Cart`', () => {
    const wrapper = shallow(<ProductCart />);
    expect(wrapper.find('#add-to-cart-button').text()).toBe('Add To Cart');
  });
});
