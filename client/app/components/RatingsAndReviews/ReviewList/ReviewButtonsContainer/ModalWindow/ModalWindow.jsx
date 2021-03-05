/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable quotes */
import React, { useEffect, useState } from 'react';
import './ModalWindow.css';
import ReviewModalStarRating from './ReviewModalStarRating/ReviewModalStarRating.jsx';
import ReviewCharacteristics from '../AddReviewButton/ReviewCharacteristics/ReviewCharacteristics.jsx';

const ModalWindow = ({ handleClose, handleReviewSubmit, modalView, productName, productID, metaData }) => {
  const [reviewRating, setReviewRating] = useState(0);
  const [selectedRecommend, setSelectedRecommend] = useState('');
  const [reviewCharsObj, setReviewCharsObj] = useState({});
  const [reviewSummary, setReviewSummary] = useState('');
  const [reviewBody, setReviewBody] = useState('');
  const [reviewUsername, setReviewUsername] = useState('');
  const [reviewEmail, setReviewEmail] = useState('');

  const modalClassName = modalView ? "review-modal review-modal-display" : "review-modal review-modal-hide";

  const ratingExplanationArray = [
    '1 star - “Poor”',
    '2 stars - “Fair”',
    '3 stars - “Average”',
    '4 stars - “Good”',
    '5 stars - “Great”',
  ];

  const MinimumRequiredBodyCharacters = () => {
    if (reviewBody.length >= 50) {
      return (
        <div>
          Minimum Reached
        </div>
      );
    }
    return (
      <div>
        Minimum required characters left: {50 - reviewBody.length}
      </div>
    );
  };

  const handleRecommendChange = (e) => {
    if (e.target.value === "recommendYes") {
      setSelectedRecommend(true);
    }
    if (e.target.value === "recommendNo") {
      setSelectedRecommend(false);
    }
  };

  const handleSummaryChange = (e) => {
    setReviewSummary(e.target.value);
  };

  const handleBodyChange = (e) => {
    setReviewBody(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setReviewUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setReviewEmail(e.target.value);
  };

  const handleStarRatingClick = (e) => {
    setReviewRating(e.target.id);
  };

  const OverallRatingStarRating = () => {
    if (reviewRating > 0) {
      return (
        <>
          <ReviewModalStarRating reviewScore={reviewRating} setMargin="0 0 0 0" handleStarRatingClick={handleStarRatingClick} />
          <div className="review-rating-explanation">
            {ratingExplanationArray[reviewRating - 1]}
          </div>
        </>
      );
    }
    return (
      <ReviewModalStarRating reviewScore={reviewRating} setMargin="0 0 0 0" handleStarRatingClick={handleStarRatingClick} />
    );
  };

  if (modalView) {
    return (
      <div className={modalClassName}>
        <div className="review-modal-main">
          <div className="review-modal-title">
            <h2>Write your review</h2>
            <h3>About the {productName}</h3>
          </div>
          <form>
            {/* on submit, do something */}
            <div>
              Overall Rating*:{' '}
              <OverallRatingStarRating />
            </div><br></br>
            <div className="radio">
              <label>
                Do you recommend this product?*:{' '}
                <label>
                  Yes
                  <input type="radio" name="recommendRadio" value="recommendYes" checked={selectedRecommend === true} onChange={handleRecommendChange} required />
                </label>
                <label>
                  No
                  <input type="radio" name="recommendRadio" value="recommendNo" checked={selectedRecommend === false} onChange={handleRecommendChange} />
                </label>
              </label>
            </div><br></br>
            <div className="review-characteristics">
              <ReviewCharacteristics
                metaData={metaData}
                setReviewCharsObj={setReviewCharsObj}
                reviewCharsObj={reviewCharsObj}
              />
            </div>
            <div>
              <label>
                Review Summary:{' '}<br></br>
                <textarea name="reviewSummary" maxLength="60" rows="3" cols="20" placeholder="Example: Best purchase ever" value={reviewSummary} onChange={handleSummaryChange} />
              </label>
            </div><br></br>
            <div>
              <label>
                Review Body*:{' '}<br></br>
                <textarea name="reviewBody" maxLength="1000" minLength="50" rows="4" cols="40" placeholder="Why did you like the product or not?" value={reviewBody} onChange={handleBodyChange} required />
              </label><br></br>
              <MinimumRequiredBodyCharacters />
            </div><br></br>
            <div className="review-modal-username">
              <label>
                Username*:{' '}<br></br>
                <input type="text" name="reviewUsername" maxLength="60" rows="2" cols="20" placeholder="Example: jackson11!" value={reviewUsername} onChange={handleUsernameChange} required /><br></br>
                <div className="review-username-warning">
                  For privacy reasons, please do not use your full name or email address
                </div>
              </label>
            </div><br></br>
            <div className="review-modal-email">
              <label>
                Username*:{' '}<br></br>
                <input type="email" name="reviewEmail" maxLength="60" rows="2" cols="20" placeholder="Example: jackson11@email.com" value={reviewEmail} onChange={handleEmailChange} required /><br></br>
                <div className="review-email-warning">
                  For authentication reasons, you will not be emailed
                </div>
              </label>
            </div><br></br>
          </form>

          <div className="reviewModalButtonContainer">
            <button type="button" className="modalButton" onClick={handleClose}>
              Close
            </button>
            <button type="button" className="review-modal-submit-button" onClick={handleReviewSubmit}>
              Submit Review
            </button>
          </div>

        </div>
      </div>
    );
  }
  return (
    <>
    </>
  );
};

export default ModalWindow;
