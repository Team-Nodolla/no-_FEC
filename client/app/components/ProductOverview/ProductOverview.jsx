import React, { useState } from 'react';
import axios from 'axios';
import ProductCategoryAndTitle from './ProductCategoryAndTitle/ProductCategoryAndTitle.jsx';

const ProductOverview = ({ productID, product }) => {
  const [styles, getStyles] = useState('');
  getStyles(() => axios.get(`/products/${productID}`)
    .then((data) => console.log(data))
    .catch((err) => console.log('error')));

  console.log('hello');
  console.log(productID);
  return (
    <div>
      <ProductCategoryAndTitle product={product} />
    </div>
  );
};

export default ProductOverview;
