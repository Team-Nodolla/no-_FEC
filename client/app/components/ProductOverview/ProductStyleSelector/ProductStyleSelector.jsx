import React from 'react';
import './ProductStyleSelector.css';
const ProductStyleSelector = ({ handleSelectedStyleClick, styles ,styleName}) => {
  if (styles !== undefined) {
    return (
      <div className="styles-thumbnail">
        <h2>Styles > {styleName.name}</h2>
        <div className="styles-thumbnail-list">
        {styles.map((productStyle) => {
          return(
            <span className="style-image" key={productStyle.style_id}>
            {/* <i className="far fa-check-circle"></i> */}
            <img  className="style-image-icon" onClick={() => handleSelectedStyleClick(productStyle, productStyle.original_price)} src={productStyle.photos[0].thumbnail_url} />
            </span>
          )
        })}
        </div>
      </div>
    );
  }

  return (
    <div />
  );
};
export default ProductStyleSelector;
