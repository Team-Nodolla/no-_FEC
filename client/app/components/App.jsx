/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import RelatedProductsCarousel from './Carousels/RelatedProductsCarousel/RelatedProductsCarousel.jsx';
import OutfitCarousel from './Carousels/OutfitCarousel/OutfitCarousel.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import './App.css';

const App = () => {
  const [productID, setProductID] = useState(0);
  const [product, setProduct] = useState({});
  const [allProducts, setAllProducts] = useState({});
  const [relatedProductIDs, setRelatedProductIDs] = useState([]);

  useEffect(() => {
    if (productID === 0) {
      axios.get('/products')
        .then((response) => {
          setProductID(response.data[0].id);
          setProduct(response.data[0]);
          const mapped = response.data.map((datum) => (
            { [datum.id]: datum }
          ));
          const insert = Object.assign({}, ...mapped);
          setAllProducts(insert);
        });
    }
  }, []);

  useEffect(() => {
    if (productID !== 0) {
      axios.get(`/products/${productID}/related`)
        .then((response) => {
          // console.log(response.data);
          setRelatedProductIDs(response.data);
        });
    }
  }, [productID]);

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

  return (
    <div className="app-container">
      <ProductOverview productID={productID} product={product} />
      <RelatedProductsCarousel
        relatedProductsIDs={relatedProductIDs}
        handleRedirect={handleRedirect}
      />
      <OutfitCarousel />
      <RatingsAndReviews productID={productID} product={product} />
    </div>
  );
};

export default App;
