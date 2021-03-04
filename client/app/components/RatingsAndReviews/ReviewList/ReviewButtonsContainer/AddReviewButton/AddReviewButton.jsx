/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import './AddReviewButton.css';
import StarRating from '../../../../StarRating/StarRating.jsx';
import ModalWindow from '../ModalWindow/ModalWindow.jsx';

const AddReviewButton = ({ productName }) => {
  const [modalView, setModalView] = useState(false);

  const handleButtonClick = (e) => {
    e.preventDefault();
    // show/hide modal component
    setModalView(!modalView);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    console.log('poggers in the chat');
  };

  return (
    <>
      <button onClick={handleButtonClick} type="button" className="addReviewButton">Add Review +</button>
      <ModalWindow
        handleClose={handleButtonClick}
        handleReviewSubmit={handleReviewSubmit}
        modalView={modalView}
        productName={productName}
      >
        <p>Modal</p>
      </ModalWindow>
    </>
  );
};

export default AddReviewButton;
