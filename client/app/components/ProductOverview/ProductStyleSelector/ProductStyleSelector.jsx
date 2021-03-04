import React from 'react';

const ProductStyleSelector = ({ handleSelectedStyleClick, styles }) => {
  if (styles !== undefined) {
    return (
      <div className="styles-thumbnail">
        <h2>Styles > {styles[0].name}</h2>
        {styles.map((productStyle) => {
          return(
          <div className="styles-thumbnail-list">
            <img onClick={handleSelectedStyleClick} value={productStyle} style={{borderRadius: '50%', width: '50px', height: '50px'}} src={productStyle.photos[0].thumbnail_url} />
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
