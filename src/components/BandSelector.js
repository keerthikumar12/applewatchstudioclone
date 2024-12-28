// BandSelector.js
import React from 'react';

const BandSelector = ({ bands, onSelectBand }) => {
  return (
    <div className="band-selector">
      {bands.map((band) => (
        <div
          key={band.id}
          className="band-item"
          onClick={() => onSelectBand(band)}
        >
          <img src={band.image} alt={band.name} className="band-image" />
        </div>
      ))}
    </div>
  );
};

export default BandSelector;
