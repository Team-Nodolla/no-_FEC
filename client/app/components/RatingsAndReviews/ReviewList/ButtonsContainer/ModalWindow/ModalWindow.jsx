/* eslint-disable quotes */
import React from 'react';
import './ModalWindow.css';

const ModalWindow = ({ handleClose, modalView, productName }) => {
  const modalClassName = modalView ? "modal display-block" : "modal display-none";
  if (modalView) {
    return (
      <div className={modalClassName}>
        <div className="modalMain">
          <h2>Write your review</h2>
          <h3>About the {productName}</h3>
          {/* <form>

          </form> */}
          <button type="button" onClick={handleClose}>
            Close
          </button>
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
