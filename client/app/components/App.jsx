/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import RelatedProductsCarousel from './Carousels/RelatedProductsCarousel/RelatedProductsCarousel.jsx';
import OutfitCarousel from './Carousels/OutfitCarousel/OutfitCarousel.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import getAverageRating from './helperFunctions/getAverageRating.jsx';
import './App.css';

const App = () => {
  const [currentProduct, setCurrentProduct] = useState({});
  // const [productID, setProductID] = useState(0);
  // const [product, setProduct] = useState({});
  // const [allProducts, setAllProducts] = useState({});
  // const [relatedProductIDs, setRelatedProductIDs] = useState([]);
  // const [styles, getStyles] = useState({});
  // const [metaData, setMetaData] = useState({});
  // const [averageRating, setAverageRating] = useState(null);

  useEffect(() => {
    let putInState = {};
    axios.get('/products')
      .then((response) => {
        const [id, name, category, description, slogan] = response.data[0];
        putInState = {
          id,
          name,
          category,
          description,
          slogan,
        };
        setCurrentProduct(putInState);
      })
      .catch((err) => {
        setCurrentProduct(putInState);
        console.error('error fetching on mount: ', err);
      });
  }, []);

  useEffect(({ id }) => {
    if (id !== 0) {
      let putInState = {};
      axios.get(`/products/${id}/default-style`)
        .then((defaultStyleResponse) => {
          putInState.originalPrice = defaultStyleResponse.data.original_price;
          putInState.salePrice = defaultStyleResponse.data.sale_price;
          putInState.photos = defaultStyleResponse.data.photos;
          return axios.get(`/products/${id}/related`);
        })
        .then((relatedProductsResponse) => {
          putInState.relatedProductIDs = relatedProductsResponse.data;
          return axios.get(`/reviews/meta/${id}`);
        })
        .then((metaDataResponse) => {
          putInState.metaData = metaDataResponse.data;
          putInState.averageRating = getAverageRating(metaDataResponse.data.ratings);
          setCurrentProduct(putInState);
        })
        .catch((err) => {
          setCurrentProduct(putInState);
          console.error('error fetching product info: ', err);
        });
      // axios.get(`/products/${productID}/related`)
      //   .then((response) => {
      //     setRelatedProductIDs(response.data);
      //   });
      // axios.get(`/reviews/meta/${productID}`)
      //   .then((response) => {
      //     setMetaData(response.data);
      //     setAverageRating(getAverageRating(response.data.ratings));
      //   })
      //   .catch((err) => {
      //     console.log('error fetching data on mount: ', err);
      //   });
    }
  }, [currentProduct]);

  const handleRedirect = (id) => {
    if (allProducts[id]) {
      setProductID(id);
      setProduct(allProducts[id]);
    } else {
      axios.get(`/products/${id}`)
        .then((response) => {
          const newProduct = response.data;
          setProduct(newProduct);
          setProductID(newProduct.id);
          setAllProducts(...allProducts, { [newProduct.id]: newProduct });
        })
        .catch((err) => { console.error(err); });
    }
  };

  // const productInfo = {
  //   id: productID,
  //   name: product.name ?? 'Product Name',
  //   category: product.category ?? 'Category',
  //   productImage: styles?.photos?.[0]?.thumbnail_url ?? null,
  //   originalPrice: styles.original_price ?? 0,
  //   salePrice: styles.sale_price ?? null,
  //   stars: averageRating ?? null,
  //   handleRedirect,
  // };

  // console.log(productInfo)

  return (
    <div className="app-container">
      <ProductOverview
        styles={currentProduct.photos}
        productID={currentProduct.id}
        product={currentProduct}
      />
      <RelatedProductsCarousel
        relatedProductsIDs={currentProduct.relatedProductIDs}
        handleRedirect={handleRedirect}
      />
      <OutfitCarousel
        productInfo={currentProduct}
      />
      <RatingsAndReviews productID={currentProduct.id} metaData={currentProduct.metaData} />
    </div>
  );
};

export default App;
