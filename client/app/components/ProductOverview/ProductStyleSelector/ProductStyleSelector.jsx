import React from 'react';

const ProductStyleSelector = ({ handleSelectedStyleClick, styles ,styleName}) => {
  if (styles !== undefined) {
    return (
      <div className="styles-thumbnail">
        <h2>Styles > {styleName.name}</h2>
        {styles.map((productStyle) => {
          return(
          <div key={productStyle.style_id} className="styles-thumbnail-list">
            <i className="far fa-check-circle"></i>
            <img onClick={() => handleSelectedStyleClick(productStyle, productStyle.original_price)} style={{borderRadius: '50%', width: '50px', height: '50px'}} src={productStyle.photos[0].thumbnail_url} />
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
