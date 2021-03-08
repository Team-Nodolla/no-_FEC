import React from 'react';
import { shallow } from 'enzyme';
import ProductCategoryAndTitle from './ProductCategoryAndTitle.jsx';

const dummyProps = {
  product: {
    id: 12345,
    productImage: 'img',
    category: 'shirt',
    name: 'cool shirt',
    originalPrice: '123',
    salePrice: '123',
    averageRating: 5,
  },
};

describe('Product Category and Title', () => {
  test('should render my component', () => {
    const wrapper = shallow(<ProductCategoryAndTitle {...dummyProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
