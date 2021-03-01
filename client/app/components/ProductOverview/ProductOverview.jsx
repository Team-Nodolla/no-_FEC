import React, { useState } from 'react';
import axios from 'axios';
import ProductCategoryAndTitle from './ProductCategoryAndTitle/ProductCategoryAndTitle.jsx';
import ProductImageGallery from './ProductImageGallery/ProductImageGallery.jsx';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import './ProductOverview.css';

const ProductOverview = ({ productID, product }) => {
  //const [styles, getStyles] = useState('');
    // getStyles(() => axios.get(`/products/:${product}/styles`)
    //   .then((data) => console.log(data)))
    //   .catch((err) => console.log('error'));
    return (
      <div>
        <ProductImageGallery className='imageContainer'/>
        <ProductCategoryAndTitle className='categoryAndTitleContainer' product={product} />
        <ProductInfo className='summaryContainer' product={product} />
      </div>
    );
};

export default ProductOverview;
