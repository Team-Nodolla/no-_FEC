import React from 'react';
import { shallow } from 'enzyme';
import ExpandedView from './ExpandedView.jsx';

describe('Product Image Expanded View', () => {
  test('should render my component', () => {
    const wrapper = shallow(<ExpandedView />);

    expect(wrapper).toMatchSnapshot();
  });
});
