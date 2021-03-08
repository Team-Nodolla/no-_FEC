import React from 'react';
import { shallow } from 'enzyme';
import CarouselCard from './CarouselCard.jsx';

const dummyCard = {
  id: 1234,
  productImage: 'https://bsaber.com/wp-content/uploads/2020/01/a2040f737cc603cf561c54624bde21715b7cbf52.jpg',
  category: 'meme',
  name: 'pretty cool bananas',
  originalPrice: '1234567',
  salePrice: '123',
  stars: '3.5',
  handleActionButton: () => { console.log('Action!'); },
  handleRedirect: () => { console.log('Redirect!'); },
  carouselType: 'related',
  features: [{ feature: 'bananas', value: 'pretty cool' }],
};

describe('CarouselCard', () => {
  test('CarouselCard component renders correctly', () => {
    const wrapper = shallow(<CarouselCard { ...dummyCard } />);

    expect(wrapper).toMatchSnapshot();
  });
});
