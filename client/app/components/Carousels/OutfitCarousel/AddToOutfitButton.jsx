import React from 'react';
import store from './storeAPI';

const AddToOutfit = ({ productInfo }) => (
  <button
    type="button"
    id="add-to-outfit-btn"
    onClick={() => {
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
