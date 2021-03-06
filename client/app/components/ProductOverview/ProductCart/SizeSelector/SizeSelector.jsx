import React from 'react';

const SizeSelector = ({ onSelectSize, arraySkus }) => {
  if (arraySkus !== undefined) {
    return (
      <div>
        <select onChange={onSelectSize}>
          <option>Select A Size</option>
          {arraySkus.map((skus) => {
            return (
              <option key={arraySkus.indexOf(skus)} value={skus.size}>{skus.size}</option>
            )
          })}
        </select>
      </div>
    );
  }
};

export default SizeSelector;
