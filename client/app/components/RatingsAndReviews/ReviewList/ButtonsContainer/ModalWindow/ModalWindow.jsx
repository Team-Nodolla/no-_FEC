/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable quotes */
import React, { useEffect, useState }from 'react';
import './ModalWindow.css';

const ModalWindow = ({ handleClose, modalView, productName }) => {
  const [selectedRecommend, setSelectedRecommend] = useState('');
  const [reviewSummary, setReviewSummary] = useState('');
  const modalClassName = modalView ? "modal display-block" : "modal display-none";

  const handleRecommendChange = (e) => {
    setSelectedRecommend(e.target.value);
  };

  const handleSummaryChange = (e) => {
    setReviewSummary(e.target.value);
  };

  if (modalView) {
    return (
      <div className={modalClassName}>
        <div className="modalMain">
          <div className="modalTitle">
            <h2>Write your review</h2>
            <h3>About the {productName}</h3>
          </div>
          <form>
            {/* on submit, do something */}
            <div>
              Overall Rating*: (placeholder)
            </div>
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
            </div>
            <div>
              <label>
                Review Summary:{' '}
                <textarea name="reviewSummary" maxlength="60" rows="3" cols="20" placeholder="Example: Best purchase ever" value={reviewSummary} onChange={handleSummaryChange} />
              </label>
            </div>
          </form>
          <div className="modalButtonContainer">
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
