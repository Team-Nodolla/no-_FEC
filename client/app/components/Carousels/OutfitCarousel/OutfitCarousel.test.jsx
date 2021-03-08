import React from 'react';
import { shallow } from 'enzyme';
import CarouselCard from '../CarouselCard/CarouselCard.jsx';
import OutfitCarousel from './OutfitCarousel.jsx';
import AddToOutfitButton from './AddToOutfitButton.jsx';

const dummyProduct = {
  id: 1234,
  productImage: 'https://bsaber.com/wp-content/uploads/2020/01/a2040f737cc603cf561c54624bde21715b7cbf52.jpg',
  category: 'meme',
  name: 'pretty cool bananas',
  originalPrice: '1234567',
  salePrice: '123',
  stars: '3.5',
};

const handleRedirect = () => { console.log('Redirect!'); };

describe('Outfit Carousel', () => {
  test('OutfitCarousel component renders correctly', () => {
    const wrapper = shallow(<OutfitCarousel productInfo={dummyProduct} handleRedirect={handleRedirect} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('AddToOutfitButton component renders correctly', () => {
    const wrapper = shallow(<AddToOutfitButton productInfo={dummyProduct} />);

    expect(wrapper).toMatchSnapshot();
  });

});
