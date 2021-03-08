import React from 'react';
import { shallow } from 'enzyme';
import ProductImageGallery from './ProductImageGallery.jsx';

describe('Product Image Gallery', () => {
  const dummyProps = {
    expandView: false,
    currentPhoto: 0,
    onClickZoom: () => { console.log('zoom'); },
    onClickChangeThumbnail: () => { console.log('thumbnail'); },
    onClickRightChange: () => { console.log('right click'); },
    style: {
      photos: [{}, {}, {}],
    },
  };
  test('should render my component', () => {
    const wrapper = shallow(<ProductImageGallery {...dummyProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
