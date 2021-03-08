import React from 'react';
import { shallow } from 'enzyme';
import ProductStyleSelector from './ProductStyleSelector.jsx';

describe('Product Style Selector', () => {
  it('should render my component', () => {
    const wrapper = shallow(<ProductStyleSelector />);

    expect(wrapper).toMatchSnapshot();
  });
});
