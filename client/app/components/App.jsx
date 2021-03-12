/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import RelatedProductsCarousel from './Carousels/RelatedProductsCarousel/RelatedProductsCarousel.jsx';
import OutfitCarousel from './Carousels/OutfitCarousel/OutfitCarousel.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import { fetchNewProductDetails } from './helperFunctions/helperFunctions.js';
import './App.css';

const App = () => {
  const [currentProduct, setCurrentProduct] = useState({});
  const [currentProductReviews, setCurrentProductReviews] = useState({});
  const [userClick, setUserClick] = useState({});
  let userClicked = false;

  useEffect(() => {
    setUserClick({});
    userClicked = false;
  }, [userClicked === true]);

  useEffect(() => {
    fetchNewProductDetails(setCurrentProduct);
  }, []);

  const collectUserClickData = (event, name) => {
    event.preventDefault();
    const timeOfClick = new Date();
    setUserClick({
      element: event.target.tagName,
      time: timeOfClick.toString(),
      widget: name,
    });
    userClicked = true;
  };

  if (Object.entries(userClick).length !== 0) {
    axios.post('/interactions', {
      userClick,
    });
  }

  const handleRedirect = (id) => {
    fetchNewProductDetails(setCurrentProduct, id);
  };

  return (
    <div className="app-container">
      <header><h1 id="app-title">Nodolla</h1></header>
      <ProductOverview
        onUserClick={collectUserClickData}
        reviewNumber={currentProductReviews}
        product={currentProduct}
        defaultStyle={currentProduct.defaultStyle}
        styles={currentProduct.styles}
      />
      <RelatedProductsCarousel
        onUserClick={collectUserClickData}
        currentProductID={currentProduct.id ?? 0}
        currentProductName={currentProduct.name ?? ''}
        currentProductFeatures={currentProduct.features ?? []}
        relatedProductsIDs={currentProduct?.relatedProductIDs ?? []}
        handleRedirect={handleRedirect}
      />
      <OutfitCarousel
        onUserClick={collectUserClickData}
        productInfo={{
          id: currentProduct?.id ?? 0,
          name: currentProduct?.name ?? 'Product Name',
          category: currentProduct?.category ?? 'Category',
          productImage: currentProduct?.photos?.[0]?.thumbnail_url ?? null,
          originalPrice: currentProduct?.originalPrice ?? 0,
          salePrice: currentProduct?.salePrice ?? null,
          reviewScore: currentProduct?.averageRating ?? null,
        }}
        handleRedirect={handleRedirect}
      />
      <RatingsAndReviews
        onUserClick={collectUserClickData}
        productID={currentProduct.id}
        metaData={currentProduct.metaData}
        productName={currentProduct.name}
        setCurrentProductReviews={setCurrentProductReviews}
      />
    </div>
  );
};

export default App;
