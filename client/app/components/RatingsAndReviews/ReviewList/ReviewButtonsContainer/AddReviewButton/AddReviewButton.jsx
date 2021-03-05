/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AddReviewButton.css';
import StarRating from '../../../../StarRating/StarRating.jsx';
import ModalWindow from '../ModalWindow/ModalWindow.jsx';

const AddReviewButton = ({ productName, productID, metaData }) => {
  const [modalView, setModalView] = useState(false);

  const handleButtonClick = (e) => {
    e.preventDefault();
    // show/hide modal component
    setModalView(!modalView);
  };

  const handleReviewSubmit = (
    e,
    productID,
    userRating,
    userRec,
    userChars,
    userSummary,
    userBody,
    userNickname,
    userEmail,
  ) => {
    e.preventDefault();
    axios.post('/reviews', {
      productID,
      userRating,
      userRec,
      userChars,
      userSummary,
      userBody,
      userNickname,
      userEmail,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log('error in review submission: ', err);
      });
    setModalView(!modalView);
  };

  return (
    <>
      <button onClick={handleButtonClick} type="button" className="addReviewButton">Add Review +</button>
      <ModalWindow
        handleClose={handleButtonClick}
        handleReviewSubmit={handleReviewSubmit}
        modalView={modalView}
        productName={productName}
        productID={productID}
        metaData={metaData}
      >
        <p>Modal</p>
      </ModalWindow>
    </>
  );
};

export default AddReviewButton;
