import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import './App.css';

const App = () => {
  const [productID, setProductID] = useState(0);
  const [product, setProduct] = useState({});
  const [allProducts, setAllProducts] = useState([]);

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

  return (
    <div className="app-container">
      <ProductOverview productID={productID} product={product} />
    </div>
  );
};

export default App;
