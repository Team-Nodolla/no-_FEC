import React from 'react';
import { shallow } from 'enzyme';
import ReviewListItem from './ReviewListItem.jsx';
import StarRating from '../../../StarRating/StarRating.jsx';

let review = {
  "review_id": 111396,
  "rating": 4,
  "summary": "Doloribus aut rerum.",
  "recommend": true,
  "response": null,
  "body": "Voluptas dolor ea ut sed accusantium. Dicta magnam expedita. Ipsum reprehenderit qui blanditiis consectetur perspiciatis. Voluptatum commodi aut.",
  "date": "2020-03-23T00:00:00.000Z",
  "reviewer_name": "Tanner.Lemke",
  "helpfulness": 20,
  "photos": [
      {
          "id": 182303,
          "url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      },
      {
          "id": 182304,
          "url": "https://images.unsplash.com/photo-1562542119-19d015b93c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2057&q=80"
      }
  ]
};

describe('review list item: ', () => {
  test('it renders when given a review', () => {
    const wrapper = shallow(<ReviewListItem review={review} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('it renders a star rating component: ', () => {
    const wrapper = shallow(<ReviewListItem review={review} />);

    expect(wrapper.find(StarRating).length).toBe(1);
  });

  test('it renders correct number of divs: ', () => {
    const wrapper = shallow(<ReviewListItem review={review} />);
    // TODO - update this test as I complete review list item
    expect(wrapper.find('div').length).toBe(4);
  });
});
