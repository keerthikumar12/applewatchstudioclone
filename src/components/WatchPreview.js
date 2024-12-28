// WatchPreview.js
import React from 'react';

const WatchPreview = ({ selectedCase, selectedSize, selectedBand }) => {
  // Assuming we have a mapping of cases, sizes, and bands to images or 3D models
  const caseImage = selectedCase ? selectedCase.image : 'default-case.jpg';
  const sizeImage = selectedSize ? selectedSize.image : 'default-size.jpg';
  const bandImage = selectedBand ? selectedBand.image : 'default-band.jpg';

  return (
    <div className="watch-preview">
      <img
        src={`${caseImage}-${sizeImage}-${bandImage}`}
        alt="Watch Preview"
        className="watch-image"
      />
    </div>
  );
};

export default WatchPreview;
