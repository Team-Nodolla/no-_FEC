import React from 'react';

const ProductStyleSelector = ({ styles }) => {
  if (styles !== undefined) {
    return (
      <div className="styles-thumbnail">
        {styles.map((productStyle) => {
          return(
          <div>
            <img style={{width: '20%'}} src={productStyle.photos[0].thumbnail_url} />
          </div>
          )
        })}
      </div>
    );
  }

  return (
    <div />
  );
};
export default ProductStyleSelector;
