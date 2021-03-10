import React, { useState, useEffect } from 'react';
import propTypes from 'proptypes';
import ProductCategoryAndTitle from './ProductCategoryAndTitle/ProductCategoryAndTitle.jsx';
import ProductImageGallery from './ProductImageGallery/ProductImageGallery.jsx';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import ProductStyleSelector from './ProductStyleSelector/ProductStyleSelector.jsx';
import ProductCart from './ProductCart/ProductCart.jsx';
import ProductThumbnailScroll from './ProductThumbnailScroll/ProductThumbnailScroll.jsx';
import './ProductOverview.css';

const ProductOverview = ({ onUserClick, product, styles }) => {
  if (styles !== undefined) {
    const toggle = false;
    const [priceOfProduct, setPriceOfProduct] = useState(product.originalPrice);
    const [selectedStyle, setSelectedStyle] = useState(styles[0]);
    const [currentPhoto, setCurrentPhoto] = useState(0);
    const [expandView, setExpandView] = useState(toggle);

    useEffect(() => {
      setPriceOfProduct(() => product.originalPrice);
      setSelectedStyle(() => styles[0]);
    }, [product, styles]);

    const onClickRightChange = () => {
      if (currentPhoto !== styles[currentPhoto].photos.length - 1) {
        setCurrentPhoto(currentPhoto + 1);
      }
    };

    const onClickLeftChange = () => {
      if (currentPhoto > 0) {
        setCurrentPhoto(currentPhoto - 1);
      }
    };

    const onClickZoom = () => {
      if (styles[currentPhoto].photos[currentPhoto].url !== null) {
        setExpandView((view) => !view);
      }
    };

    const onClickChangeThumbnail = (photo) => {
      setCurrentPhoto(photo);
    };

    const handleSelectedStyle = (style, price) => {
      if (currentPhoto > style.photos.length - 1) {
        setCurrentPhoto(style.photos.length - 1);
      }
      setSelectedStyle(style);
      setPriceOfProduct(price);
    };

    return (
      <div
      onClick={(e) => onUserClick(e, 'Product Overview')}
      className="product-overview-container">
        <div className="product-thumbnail">
          <ProductThumbnailScroll
            onClickChangeThumbnail={onClickChangeThumbnail}
            currentPhoto={currentPhoto}
            arrayOfPhoto={selectedStyle}
          />
        </div>
        <div className="product-image-container">
          <ProductImageGallery
            expandView={expandView}
            currentPhoto={currentPhoto}
            onClickZoom={onClickZoom}
            onClickChangeThumbnail={onClickChangeThumbnail}
            onClickLeftChange={onClickLeftChange}
            onClickRightChange={onClickRightChange}
            style={selectedStyle}
          />
          <i alt="Left Button" onClick={onClickLeftChange} className={`image-left-btn-${currentPhoto !== 0 ? `active` : `disabled`} fas fa-chevron-left`}></i>
          <i alt="Right Button" onClick={onClickRightChange} className={`image-right-btn-${currentPhoto !== (selectedStyle.photos.length - 1) ? `active` : `disabled`} fas fa-chevron-right`}></i>
        </div>
        <div className="product-info-container">
          <div className="product-description-container">
            <ProductCategoryAndTitle price={priceOfProduct} product={product} />
          </div>
          <div className="product-style-container">
            <ProductStyleSelector
              currentPhoto={selectedStyle}
              handleSelectedStyleClick={handleSelectedStyle}
              styles={styles}
              styleName={selectedStyle}
            />
          </div>
          <div className="product-cart-container">
            <ProductCart product={product} selectedStyle={selectedStyle} />
          </div>
        </div>
        <div className="product-summary-container">
          <ProductInfo product={product} />
        </div>
      </div>
    );
  }

  return (
    <div className="product-overview-container">
      <div className="product-image-container" />
      <div className="product-info-container">
        <div className="product-description-container" />
        <div className="product-style-container" />
        <div className="product-cart-container" />
      </div>
      <div className="product-summary-container" />
    </div>
  );
};

ProductOverview.propTypes = {
  onUserClick: propTypes.func,
  product: propTypes.object,
  styles: propTypes.array,
};

export default ProductOverview;
