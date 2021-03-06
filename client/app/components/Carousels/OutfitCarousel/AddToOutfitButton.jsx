import React from 'react';
import store from './storeAPI';

const AddToOutfit = ({ productInfo }) => (
  <button
    type="button"
    id="add-to-outfit-btn"
    className="card"
    onClick={() => {
      console.log('in button productInfo:', productInfo);
      if (productInfo.id !== 0 && !store.has(productInfo.id)) {
        store.save(productInfo.id, productInfo);
      }
    }}
  >
    <i className="fas fa-plus-square" />
    <br />
    Add To Outfit
  </button>
);

export default AddToOutfit;
