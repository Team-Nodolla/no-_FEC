import React from 'react';
import './SizeSelector.css';

const SizeSelector = ({ onSelectSize, arraySkus }) => {
  if (arraySkus !== undefined) {
    return (
      <div>
        <form>
          <label htmlFor="size"></label>
            <select name="size" className="product-dropdown-box" onChange={onSelectSize}>
              {arraySkus.map((skus) => {
                return (
                  <option key={arraySkus.indexOf(skus)} value={skus.size}>{skus.size}</option>
                )
              })}
            </select>
        </form>
      </div>
    );
  }
};

export default SizeSelector;
