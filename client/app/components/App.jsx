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
  const [productID, setProductID] = useState(0);
  const [product, setProduct] = useState({});
  const [allProducts, setAllProducts] = useState({});
  const [relatedProductIDs, setRelatedProductIDs] = useState([]);
  const [styles, getStyles] = useState({});
  const [metaData, setMetaData] = useState({});
  const [averageRating, setAverageRating] = useState(null);

  useEffect(() => {
    if (productID !== 0) {
      axios.get(`/products/${productID}/default-style`)
        .then((response) => {
          getStyles(response.data);
        })
        .catch((err) => console.error('error', err));
      axios.get(`/products/${productID}/related`)
        .then((response) => {
          setRelatedProductIDs(response.data);
        });
      axios.get(`/reviews/meta/${productID}`)
        .then((response) => {
          setMetaData(response.data);
          setAverageRating(getAverageRating(response.data.ratings));
        })
        .catch((err) => {
          console.log('error fetching data on mount: ', err);
        });
    }
  }, [productID]);

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
      <ProductOverview styles={styles} productID={productID} product={product} />
      <RelatedProductsCarousel
        relatedProductsIDs={relatedProductIDs}
        handleRedirect={handleRedirect}
      />
      <OutfitCarousel
        productInfo={{
          id: productID,
          name: product.name ?? 'Product Name',
          category: product.category ?? 'Category',
          productImage: styles?.photos?.[0]?.thumbnail_url ?? null,
          originalPrice: styles.original_price ?? 0,
          salePrice: styles.sale_price ?? null,
          stars: averageRating ?? null,
          handleRedirect,
        }}
      />
      <RatingsAndReviews productID={productID} product={product} metaData={metaData} />
    </div>
  );
};

export default App;
