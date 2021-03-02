import React from 'react';

const ProductStyleSelector = ({ styles }) => {
  if (styles !== undefined) {
    return (
      <div>
        <h1>Style Selector</h1>
      </div>
    );
  }

  return (
    <div></div>
  );
};
export default ProductStyleSelector;
