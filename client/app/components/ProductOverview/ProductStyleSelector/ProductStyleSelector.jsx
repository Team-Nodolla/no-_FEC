import React from 'react';
import './ProductStyleSelector.css';
const ProductStyleSelector = ({ currentPhoto, handleSelectedStyleClick, styles ,styleName}) => {
  if (styles !== undefined) {
    return (
      <div className="styles-thumbnail">
        <div className="style-name">
        <h2>Styles > </h2>
        <p style={{marginTop: '27px', marginLeft: '10px'}}>{styleName.name}</p>
        </div>
        <div className="styles-thumbnail-list">
        {styles.map((productStyle) => {
          return(
            <div className="style-image" key={productStyle.style_id}>
            <i className={`style-image-icon-${currentPhoto.style_id === productStyle.style_id ? 'selected' : 'disabled'} far fa-check-circle`}></i>
            <img  className="style-image-icon " onClick={() => handleSelectedStyleClick(productStyle, productStyle.original_price)} src={productStyle.photos[0].thumbnail_url} />
            </div>
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
