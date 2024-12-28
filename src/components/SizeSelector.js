// SizeSelector.js
import React from 'react';

const SizeSelector = ({ sizes, onSelectSize }) => {
  return (
    <div className="size-selector">
      {sizes.map((size) => (
        <button
          key={size.id}
          onClick={() => onSelectSize(size)}
          className="size-button"
        >
          {size.name}
        </button>
      ))}
    </div>
  );
};

export default SizeSelector;
