import React from 'react';
import { shallow } from 'enzyme';
import SizeSelector from './SizeSelector.jsx';

describe('Size Selectore', () => {
  test('should render my component', () => {
    const wrapper = shallow(<SizeSelector />);

    expect(wrapper).toMatchSnapshot();
  });
});
