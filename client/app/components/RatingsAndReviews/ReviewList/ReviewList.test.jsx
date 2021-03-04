import React from 'react';
import { shallow } from 'enzyme';
import ReviewList from './ReviewList';

let emptyReviewList = [];
let populatedReviewList = [
  {
      'review_id': 111396,
      'rating': 4,
      'summary': 'Doloribus aut rerum.',
      'recommend': true,
      'response': null,
      'body': 'Voluptas dolor ea ut sed accusantium. Dicta magnam expedita. Ipsum reprehenderit qui blanditiis consectetur perspiciatis. Voluptatum commodi aut.',
      'date': '2020-03-23T00:00:00.000Z',
      'reviewer_name': 'Tanner.Lemke',
      'helpfulness': 20,
      'photos': [
          {
              'id': 182303,
              'url': 'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
          },
          {
              'id': 182304,
              'url': 'https://images.unsplash.com/photo-1562542119-19d015b93c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2057&q=80'
          }
      ]
  },
  {
      'review_id': 111397,
      'rating': 3,
      'summary': 'At in sed facere.',
      'recommend': true,
      'response': null,
      'body': 'Molestias saepe sunt optio quas. Perspiciatis veritatis quod necessitatibus quod consequatur enim. Rerum rerum similique aut. Amet exercitationem eligendi dolore impedit expedita repellat id facere. Culpa sapiente voluptatem nobis aliquam deserunt porro quibusdam ut. Quia in quas neque.',
      'date': '2020-03-27T00:00:00.000Z',
      'reviewer_name': 'Nelson.Klocko66',
      'helpfulness': 2,
      'photos': [
          {
              'id': 182302,
              'url': 'https://images.unsplash.com/11/converse-fields.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1570&q=80'
          }
      ]
  },
  {
      'review_id': 111395,
      'rating': 5,
      'summary': 'Neque voluptas soluta cupiditate ea eveniet quidem fugiat officia dolorem.',
      'recommend': true,
      'response': null,
      'body': 'Harum sint voluptas. Provident quae magni illo. Est rerum aut doloremque minima quia qui tempore cumque. Quaerat consequatur earum eos earum.',
      'date': '2020-06-17T00:00:00.000Z',
      'reviewer_name': 'Sienna56',
      'helpfulness': 1,
      'photos': [
          {
              'id': 182305,
              'url': 'https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
          }
      ]
  },
  {
    'review_id': 111393,
    'rating': 5,
    'summary': 'Placeat voluptates dolores.',
    'recommend': true,
    'response': null,
    'body': 'Temporibus vero et qui porro deserunt. Commodi nobis placeat culpa et ut debitis voluptatem ut. Distinctio et voluptas. Aut ducimus voluptas. Voluptatem vero ut nobis beatae aliquid. Ab est commodi nemo perspiciatis corrupti ea.',
    'date': '2020-05-14T00:00:00.000Z',
    'reviewer_name': 'Amie_Stroman',
    'helpfulness': 0,
    'photos': [
        {
            'id': 182307,
            'url': 'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
        },
        {
            'id': 182308,
            'url': 'https://images.unsplash.com/photo-1516199707327-5399434d0aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1083&q=80'
        },
        {
            'id': 182309,
            'url': 'https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80'
        }
    ]
  },
];

describe('review list', () => {
  test('it renders when list is empty', () => {
    const wrapper = shallow(<ReviewList reviewList={emptyReviewList} visibleReviews={2} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('it renders when list is populated', () => {
    const wrapper = shallow(<ReviewList reviewList={populatedReviewList} visibleReviews={2} />);

    expect(wrapper).toMatchSnapshot();
  });
});
