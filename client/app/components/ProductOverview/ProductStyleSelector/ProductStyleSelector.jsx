import React from 'react';

const ProductStyleSelector = ({ styles }) => {
  if (styles !== undefined) {
    console.log(styles);
    return (
      <div>
        <h1>Style selectors</h1>
      </div>
    );
  }

  return (
    <div></div>
  );
};
export default ProductStyleSelector;
