// PriceDisplay.js
import React from 'react';

const PriceDisplay = ({ selectedCase, selectedSize, selectedBand }) => {
  // Assuming we have pricing data for cases, sizes, and bands
  const basePrice = 399; // Example base price for the watch
  const casePrice = selectedCase ? selectedCase.price : 0;
  const sizePrice = selectedSize ? selectedSize.price : 0;
  const bandPrice = selectedBand ? selectedBand.price : 0;

  const totalPrice = basePrice + casePrice + sizePrice + bandPrice;

  return (
    <div className="price-display">
      <h3>Total Price: ${totalPrice}</h3>
    </div>
  );
};

export default PriceDisplay;
