/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import RelatedProductsCarousel from './Carousels/RelatedProductsCarousel/RelatedProductsCarousel.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import CarouselCard from './Carousels/CarouselCard/CarouselCard.jsx';
import './App.css';

const App = () => {
  const [productID, setProductID] = useState(0);
  const [product, setProduct] = useState({});
  const [allProducts, setAllProducts] = useState([]);
  const [relatedProductIDs, setRelatedProductIDs] = useState([]);

  useEffect(() => {
    if (productID === 0) {
      axios.get('/products')
        .then((data) => {
          setProductID(data.data[0].id);
          setProduct(data.data[0]);
          setAllProducts([...allProducts, data.data]);
        });
    }
  }, []);

  useEffect(() => {
    if (productID !== 0) {
      axios.get(`/products/${productID}/related`)
        .then((response) => {
          setRelatedProductIDs(response.data);
        });
    }
  }, [productID]);

  // diff size image - keep in mind:
  // productImage: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  const dummyProps = {
    productImage: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
    category: 'Jackets',
    name: 'Camo Onesie',
    originalPrice: '140.00',
    salePrice: '125.00',
    stars: 3.5,
    buttonFunc: console.log.bind(null, 'click'),
  };

  return (
    <div className="app-container">
      <ProductOverview productID={productID} product={product} />
      <CarouselCard {...dummyProps} />
      <RelatedProductsCarousel relatedProductsIDs={relatedProductIDs} />
      <RatingsAndReviews productID={productID} product={product} />
    </div>
  );
};

export default App;
