/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import RelatedProductsCarousel from './Carousels/RelatedProductsCarousel/RelatedProductsCarousel.jsx';
import OutfitCarousel from './Carousels/OutfitCarousel/OutfitCarousel.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import { getAverageRating, getDefaultStyle } from './helperFunctions/helperFunctions.js';
import './App.css';

const App = () => {
  const [currentProduct, setCurrentProduct] = useState({});
  const [currentProductReviews, setCurrentProductReviews] = useState({});
  const [userClick, setUserClick] = useState({});
  let userClicked = false;

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

  useEffect(() => {
    setUserClick({});
    userClicked = false;
  }, [userClicked === true]);

  const fetchProductInfoByID = (productIDResponse, putInState) => {
    const { id, name, category, description, slogan, features } = productIDResponse.data;
    const allOtherPromises = [
      axios.get(`/products/${id}/styles`),
      axios.get(`/products/${id}/related`),
      axios.get(`/reviews/meta/${id}`)
    ];
    putInState.id = id;
    putInState.name = name;
    putInState.category = category;
    putInState.description = description;
    putInState.slogan = slogan;
    putInState.features = features;

    return Promise.all(allOtherPromises);
  };

  const fetchFirstProductInfo = (productsResponse, putInState = {}) => {
    const { id, name, category, description, slogan } = productsResponse.data[0];
    const allOtherPromises = [
      axios.get(`/products/${id}/styles`),
      axios.get(`/products/${id}/related`),
      axios.get(`/reviews/meta/${id}`),
      axios.get(`/products/${id}`)
    ];
    putInState.id = id;
    putInState.name = name;
    putInState.category = category;
    putInState.description = description;
    putInState.slogan = slogan;
    return Promise.all(allOtherPromises);
  };

  const fetchNewProductDetails = (id) => {
    const putInState = {};
    const serverEndpoint = id ? `/products/${id}` : '/products';
    axios.get(serverEndpoint)
      .then((productsResponse) => (
        id
          ? fetchProductInfoByID(productsResponse, putInState)
          : fetchFirstProductInfo(productsResponse, putInState)
      ))
      .then((allResponses) => {
        const [
          stylesResponse,
          relatedIDsResponse,
          metaDataResponse,
          currentIDResponse
        ] = allResponses;

        putInState.styles = stylesResponse.data.results;
        putInState.defaultStyle = getDefaultStyle(putInState.styles);
        putInState.originalPrice = putInState.defaultStyle.original_price;
        putInState.salePrice = putInState.defaultStyle.sale_price;
        putInState.photos = putInState.defaultStyle.photos;

        putInState.relatedProductIDs = relatedIDsResponse.data;

        putInState.metaData = metaDataResponse.data;
        putInState.averageRating = getAverageRating(metaDataResponse.data.ratings);

        !id ? putInState.features = currentIDResponse.data.features : 0;

        setCurrentProduct({ ...putInState });
      })
      .catch((err) => {
        console.error('error fetching on mount: ', err);
      });
  };

  useEffect(() => {
    fetchNewProductDetails();
  }, []);

  const handleRedirect = (id) => {
    fetchNewProductDetails(id);
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
