// CollectionSwitcher.js
import React, { useState } from 'react';

const CollectionSwitcher = ({ collections, onSelectCollection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="collection-switcher">
      <button onClick={toggleDropdown}>Switch Collection</button>
      {isOpen && (
        <div className="dropdown">
          {collections.map((collection) => (
            <button
              key={collection.id}
              onClick={() => onSelectCollection(collection)}
              className="collection-item"
            >
              {collection.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CollectionSwitcher;
