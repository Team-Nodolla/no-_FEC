import React from 'react';
import { shallow } from 'enzyme';
import QuantitySelector from './QuantitySelector.jsx';

describe('Quantity Selector', () => {
  const dummyProps = {
    selectedSize: 'L',
    sizeQuantity: [],
    arrayOfSkus: [],
  };

  test('should render my component', () => {
    const wrapper = shallow(<QuantitySelector {...dummyProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
