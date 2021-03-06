import React from 'react';

const SizeSelector = ({ onSelectSize, arraySkus }) => {
  if (arraySkus !== undefined) {
    return (
      <div>
        <select onChange={onSelectSize}>
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
