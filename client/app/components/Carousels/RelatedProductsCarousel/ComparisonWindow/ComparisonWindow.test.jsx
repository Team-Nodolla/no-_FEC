import React from 'react';
import { shallow } from 'enzyme';
import ComparisonWindow from './ComparisonWindow.jsx';
import ComparisonWindowRow from './ComparisonWindowRow.jsx';

const dummyModal = {
  displayModal: true,
  currentProductName: 'pretty cool bananas',
  currentProductFeatures: [{ feature: 'bananas', value: 'pretty cool' }, { feature: 'color', value: 'yellow' }],
  relatedProductName: 'donkey kong',
  relatedProductFeatures: [{ feature: 'swirl', value: 'part of his head' }, { feature: 'color', value: 'brown' }],
};

const dummyModalRow = {
  comparedFeature: 'color',
  currentProductValue: 'yellow',
  relatedProductValue: 'brown',
};

describe('ComparisonWindow component', () => {
  test('ComparisonWindow component renders correctly', () => {
    const wrapper = shallow(<ComparisonWindow { ...dummyModal } />);

    expect(wrapper).toMatchSnapshot();
  });

  test('ComparisonWindowRow component renders correctly', () => {
    const wrapper = shallow(<ComparisonWindowRow { ...dummyModalRow } />);

    expect(wrapper).toMatchSnapshot();
  });
});
