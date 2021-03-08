import React from 'react';
import { shallow } from 'enzyme';
import ProductThumbnailScroll from './ProductThumbnailScroll.jsx';

describe('Product Thumbnail Bar', () => {
  test('should render my component', () => {
    const wrapper = shallow(<ProductThumbnailScroll />);

    expect(wrapper).toMatchSnapshot();
  });
});
