// CaseSelector.js
import React from 'react';

const CaseSelector = ({ cases, onSelectCase }) => {
  return (
    <div className="case-selector">
      {cases.map((caseItem) => (
        <div
          key={caseItem.id}
          className="case-item"
          onClick={() => onSelectCase(caseItem)}
        >
          <img src={caseItem.image} alt={caseItem.name} className="case-image" />
        </div>
      ))}
    </div>
  );
};

export default CaseSelector;
