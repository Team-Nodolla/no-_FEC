import React from 'react';

const ProductCart = ({ skus }) => {
  if (skus !== undefined) {
    console.log(skus.skus);
    return (
      <div>
        <p>Hellooooo cart</p>
      </div>
    );
  }

  return (
    <div />
  );
};

export default ProductCart;
