import React from 'react';
import { shallow } from 'enzyme';
import ProductInfo from './ProductInfo.jsx';

const dummyProps = {
  product: {
    slogan: 'cool slogan',
    description: 'cool description',
    features: [],
  },
};

describe('Product Info', () => {
  test('should render my component', () => {
    const wrapper = shallow(<ProductInfo {...dummyProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
