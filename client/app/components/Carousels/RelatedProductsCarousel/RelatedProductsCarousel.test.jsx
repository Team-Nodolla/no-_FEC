import React from 'react';
import { shallow } from 'enzyme';
import RelatedProductsCarousel from './RelatedProductsCarousel.jsx';

const dummyData = {
  currentProductID: 13023,
  currentProductName: 'Camo Onesie',
  currentProductFeatures: [{ fabric: 'Canvas', buttons: 'Brass' }],
  relatedProductsIDs: [13024, 13025, 13028, 13029],
  handleRedirect: () => { console.log('Redirect!'); },
};

describe('RelatedProductsCarousel', () => {
  test('RelatedProductsCarousel component renders correctly', () => {
    const wrapper = shallow(<RelatedProductsCarousel { ...dummyData } />);

    expect(wrapper).toMatchSnapshot();
  });
});
