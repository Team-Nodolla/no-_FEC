import React from 'react';

const ProductStyleSelector = ({ handleSelectedStyleClick, styles ,styleName}) => {
  if (styles !== undefined) {
    return (
      <div className="styles-thumbnail">
        <h2>Styles > {styleName.name}</h2>
        <div className="styles-thumbnail-list">
        {styles.map((productStyle) => {
          return(
            <span key={productStyle.style_id}>
            {/* <i className="far fa-check-circle"></i> */}
            <img className="style-image" onClick={() => handleSelectedStyleClick(productStyle, productStyle.original_price)} style={{marginLeft: '15px', borderRadius: '50%', width: '70px', height: '70px'}} src={productStyle.photos[0].thumbnail_url} />
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
