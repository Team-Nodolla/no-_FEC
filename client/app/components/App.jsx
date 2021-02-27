import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductOverview from './ProductOverview/ProductOverview.jsx';

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
  const [productID, getProductID] = useState('');
  const [allProducts, getAllProducts] = useState([]);

  useEffect(() => {
    axios.get('/products')
      .then((data) => {
        getProductID(data.data[0]);
        getAllProducts([...allProducts, data.data]);
      });
  }, []);

  return (
    <div>
      <ProductOverview product={productID} />
    </div>
  );
};

export default App;
