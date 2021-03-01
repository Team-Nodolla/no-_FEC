import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RatingsAndReviews = ({ productID }) => {
  // set up state
  // track current productID as well as the reviews for that product
  const [reviewList, setReviewList] = useState([]);

  // on component mount, use the productID to fetch reviews from the server
  // TODO: set up server router to send request to the API
  useEffect(() => {
    if (productID !== 0) {
      axios.get(`/reviews/product/${productID}`)
        .then((response) => {
          setReviewList(response.data.results);
          console.log('response from API: ', response.data.results);
        })
        .catch((err) => {
          console.log('error fetching data on mount: ', err);
        });
    }
  }, [productID]);

  // render container divs
  // breakdown container: avg rating, rating breakdown, product breakdown, % recommended
  // review list container: sort form, review list, more reviews button, add review button

  return (
    <>
      <div className="breakdownContainer"></div>
      <div className="reviewListContainer"></div>
    </>
  );
};

export default RatingsAndReviews;
