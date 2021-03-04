/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import RelatedProductsCarousel from './Carousels/RelatedProductsCarousel/RelatedProductsCarousel.jsx';
import OutfitCarousel from './Carousels/OutfitCarousel/OutfitCarousel.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import getAverageRating from './helperFunctions/getAverageRating.jsx';
import getDefaultStyle from './helperFunctions/getDefaultStyle.jsx';
import './App.css';

const App = () => {
  const [currentProduct, setCurrentProduct] = useState({});

  const fetchNewProductDetails = () => {
    const putInState = {};
    axios.get('/products')
      .then((productsResponse) => {
        putInState.id = productsResponse.data[0].id;
        putInState.name = productsResponse.data[0].name;
        putInState.category = productsResponse.data[0].category;
        putInState.description = productsResponse.data[0].description;
        putInState.slogan = productsResponse.data[0].slogan;
        return axios.get(`/products/${putInState.id}/styles`);
      })
      .then((stylesResponse) => {
        putInState.styles = stylesResponse.data.results;
        putInState.defaultStyle = getDefaultStyle(putInState.styles);
        putInState.originalPrice = putInState.defaultStyle.original_price;
        putInState.salePrice = putInState.defaultStyle.sale_price;
        putInState.photos = putInState.defaultStyle.photos;
        return axios.get(`/products/${putInState.id}/related`);
      })
      .then((relatedProductsResponse) => {
        putInState.relatedProductIDs = relatedProductsResponse.data;
        return axios.get(`/reviews/meta/${putInState.id}`);
      })
      .then((metaDataResponse) => {
        putInState.metaData = metaDataResponse.data;
        putInState.averageRating = getAverageRating(metaDataResponse.data.ratings);
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
    console.log(id);
    // if (allProducts[id]) {
    //   setProductID(id);
    //   setProduct(allProducts[id]);
    // } else {
    //   axios.get(`/products/${id}`)
    //     .then((response) => {
    //       const newProduct = response.data;
    //       setProduct(newProduct);
    //       setProductID(newProduct.id);
    //       setAllProducts(...allProducts, { [newProduct.id]: newProduct });
    //     })
    //     .catch((err) => { console.error(err); });
    // }
  };

  return (
    <div className="app-container">
      <ProductOverview
        styles={currentProduct}
        productID={currentProduct.id}
        product={currentProduct}
      />
      <RelatedProductsCarousel
        relatedProductsIDs={currentProduct.relatedProductIDs}
        handleRedirect={handleRedirect}
      />
      <OutfitCarousel
        productInfo={{
          id: currentProduct?.id ?? 0,
          name: currentProduct?.name ?? 'Product Name',
          category: currentProduct?.category ?? 'Category',
          productImage: currentProduct?.photos?.[0]?.thumbnail_url ?? null,
          originalPrice: currentProduct?.originalPrice ?? 0,
          salePrice: currentProduct?.salePrice ?? null,
          stars: currentProduct?.averageRating ?? null,
        }}
        handleRedirect={handleRedirect}
      />
      <RatingsAndReviews
        productID={currentProduct.id}
        metaData={currentProduct.metaData}
        productName={currentProduct.name}
      />
    </div>
  );
};

export default App;
