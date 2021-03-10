import React from 'react';
import './SizeSelector.css';

const SizeSelector = ({ onSelectSize, arraySkus }) => {
  if (arraySkus !== undefined) {
    return (
      <div>
        <form>
          <label>
            <select className="product-dropdown-box" onChange={onSelectSize}>
              {arraySkus.map((skus) => {
                return (
                  <option key={arraySkus.indexOf(skus)} value={skus.size}>{skus.size}</option>
                )
              })}
          </select>
          </label>
        </form>
      </div>
    );
  }
};

export default SizeSelector;
