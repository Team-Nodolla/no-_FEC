import React from 'react';
import { shallow } from 'enzyme';
import CarouselBackButton from './CarouselBackButton.jsx';
import CarouselNextButton from './CarouselNextButton.jsx';

const dummyBack = {
  atStart: false,
  handleBack: () => { console.log('click back!'); },
};

const dummyNext = {
  atEnd: false,
  handleNext: () => { console.log('click next!'); },
};

describe('Carousel Buttons', () => {
  test('back button renders correctly', () => {
    const wrapper = shallow(<CarouselBackButton { ...dummyBack } />);

    expect(wrapper).toMatchSnapshot();
  });

  test('next button renders correctly', () => {
    const wrapper = shallow(<CarouselNextButton { ...dummyNext } />);

    expect(wrapper).toMatchSnapshot();
  });
});
