import React from 'react';
import axios from 'axios';
import ProductOverview from './ProductOverview/ProductOverview.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: '',
      allProducts: [],
    };
  }

  componentDidMount() {
    axios.get('/products')
      .then((data) => {
        this.setState({
          productId: data.data[0],
          allProducts: this.state.allProducts.concat(data.data),
        });
      });
  }

  render() {
    return (
      <div>
        <ProductOverview product={this.state.productId} />
      </div>
    );
  }
}

export default App;
