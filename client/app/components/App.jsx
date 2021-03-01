import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       productId: '',
//       allProducts: [],
//     };
//   }

//   componentDidMount() {
//     const { allProducts } = this.state;
//     axios.get('/products')
//       .then((data) => {
//         this.setState({
//           productId: data.data[0],
//           allProducts: [...allProducts, data.data],
//         });
//       });
//   }

//   render() {
//     const { productId } = this.state;
//     return (
//       <div>
//         <ProductOverview product={productId} />
//       </div>
//     );
//   }
// }

const App = () => {
  const [productID, setProductID] = useState(0);
  const [product, setProduct] = useState({});
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    if (productID === 0 || allProducts.length === 0) {
      axios.get('/products')
        .then((data) => {
          setProductID(data.data[0].id);
          setProduct(data.data[0]);
          setAllProducts([...allProducts, data.data]);
        });
    }
  }, []);

  return (
    <div>
      <ProductOverview productID={productID} product={product} />
      <RatingsAndReviews productID={productID} product={product} />
    </div>
  );
};

export default App;
