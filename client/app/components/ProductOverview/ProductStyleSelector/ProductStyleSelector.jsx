import React from 'react';

const ProductStyleSelector = ({ styles }) => {
  if (styles !== undefined) {
    return (
      <div className="styles-thumbnail">
        {/* {styles.results.map(style => {
          <div className="single-style-thumbnail">
          </div>
        })} */}
      </div>
    );
  }

  return (
    <div />
  );
};
export default ProductStyleSelector;
