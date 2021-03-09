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
  stars: 3.5,
  handleActionButton: () => { console.log('Action!'); },
  handleRedirect: () => { console.log('Redirect!'); },
  carouselType: 'related',
  features: [{ feature: 'bananas', value: 'pretty cool' }],
};

describe('CarouselCard', () => {
  describe('Render', () => {
    it('should render properly', () => {
      const wrapper = shallow(<CarouselCard {...dummyCard} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Category', () => {
    it('should display the category', () => {
      const wrapper = shallow(<CarouselCard {...dummyCard} />);
      const category = wrapper.find('span#category');
      expect(category.text()).toEqual(dummyCard.category);
    });

    it('should have a default value "Category" if no category is provided', () => {
      dummyCard.category = null;
      const wrapper = shallow(<CarouselCard {...dummyCard} />);
      const category = wrapper.find('span#category');
      expect(category.text()).toEqual('Category');
    });
  });

  describe('Name', () => {
    it('should display the name', () => {
      const wrapper = shallow(<CarouselCard {...dummyCard} />);
      const name = wrapper.find('h3#product-name');
      expect(name.text()).toEqual(dummyCard.name);
    });

    it('should have a default value "Product Name" if no name is provided', () => {
      dummyCard.name = null;
      const wrapper = shallow(<CarouselCard {...dummyCard} />);
      const name = wrapper.find('h3#product-name');
      expect(name.text()).toEqual('Product Name');
    });
  });

  describe('Price', () => {
    it('should display original price with "old-price" id if sale price is provided', () => {
      const wrapper = shallow(<CarouselCard {...dummyCard} />);
      const oldPrice = wrapper.find('span#old-price');
      expect(oldPrice.text()).toBe(`$${dummyCard.originalPrice}`);
    });

    it('should display sale price with "display-price" id if sale price is provided', () => {
      const wrapper = shallow(<CarouselCard {...dummyCard} />);
      const displayPrice = wrapper.find('span#display-price');
      expect(displayPrice.text()).toBe(`$${dummyCard.salePrice}`);
    });

    it('should not have an element with the id "old-price" if a sale price is not provided', () => {
      dummyCard.salePrice = null;
      const wrapper = shallow(<CarouselCard {...dummyCard} />);
      const oldPrice = wrapper.find('old-price');
      expect(oldPrice).toEqual({});
    });

    it('should display original price with "display-price" id if sale price is not provided', () => {
      dummyCard.salePrice = null;
      const wrapper = shallow(<CarouselCard {...dummyCard} />);
      const displayPrice = wrapper.find('span#display-price');
      expect(displayPrice.text()).toBe(`$${dummyCard.originalPrice}`);
    });
  });

  describe('Product Image', () => {
    it('should display the provided image', () => {
      const wrapper = shallow(<CarouselCard {...dummyCard} />);
      const productImage = wrapper.find('img');
      const src = productImage.prop('src');
      expect(src).toEqual(dummyCard.productImage);
    });

    it('should display a "no image" image if no image is provided', () => {
      dummyCard.productImage = null;
      const wrapper = shallow(<CarouselCard {...dummyCard} />);
      const productImage = wrapper.find('img');
      const src = productImage.prop('src');
      expect(src).toEqual('https://watertownbusinesscoalition.com/assets/images/no_image_available.jpeg');
    });
  });

  // https://watertownbusinesscoalition.com/assets/images/no_image_available.jpeg
});
