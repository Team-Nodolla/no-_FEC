/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable quotes */
import React, { useEffect, useState }from 'react';
import './ModalWindow.css';

const ModalWindow = ({ handleClose, modalView, productName }) => {
  const [selectedRecommend, setSelectedRecommend] = useState('');
  const [reviewSummary, setReviewSummary] = useState('');
  const [reviewBody, setReviewBody] = useState('');

  const modalClassName = modalView ? "review-modal review-modal-display" : "review-modal review-modal-hide";

  const handleRecommendChange = (e) => {
    setSelectedRecommend(e.target.value);
  };

  const handleSummaryChange = (e) => {
    setReviewSummary(e.target.value);
  };

  const handleBodyChange = (e) => {
    setReviewBody(e.target.value);
  };

  const MinimumRequiredBodyCharacters = () => {
    if (reviewBody.length >= 50) {
      return (
        <div>
          Minimum Reached
        </div>
      )
    }
    return (
      <div>
        Minimum required characters left: {50 - reviewBody.length}
      </div>
    )
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
              Overall Rating*: (placeholder)
            </div><br></br>
            <div className="radio">
              <label>
                Do you recommend this product?*:{' '}
                <label>
                  Yes
                  <input type="radio" name="recommendRadio" value="recommendYes" checked={selectedRecommend === "recommendYes"} onChange={handleRecommendChange} required />
                </label>
                <label>
                  No
                  <input type="radio" name="recommendRadio" value="recommendNo" checked={selectedRecommend === "recommendNo"} onChange={handleRecommendChange} />
                </label>
              </label>
            </div><br></br>
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
          </form>
          <div className="reviewModalButtonContainer">
            <button type="button" className="modalButton" onClick={handleClose}>
              Close
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
