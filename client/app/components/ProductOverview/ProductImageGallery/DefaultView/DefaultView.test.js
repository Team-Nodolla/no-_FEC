import React from 'react';
import { shallow } from 'enzyme';
import DefaultView from './DefaultView.jsx';

const dummyProps = {
  onClickImage: () => { console.log('click the image'); },
  defaultPhoto: {},
};

describe('Product Image Default View', () => {
  test('should render my component', () => {
    const wrapper = shallow(<DefaultView {...dummyProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
