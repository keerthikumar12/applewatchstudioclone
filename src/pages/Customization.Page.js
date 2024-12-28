import React, { useState } from "react";
import CaseSelector from "../components/CaseSelector";
import SizeSelector from "../components/SizeSelector";
import BandSelector from "../components/BandSelector";
import CollectionSwitcher from "../components/CollectionSwitcher";
import PriceDisplay from "../components/PriceDisplay";
import WatchPreview from "../components/WatchPreview";

const CustomizationPage = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedBand, setSelectedBand] = useState(null);

  return (
    <div className="customization-container">
      <WatchPreview case={selectedCase} size={selectedSize} band={selectedBand} />
      <CaseSelector onSelectCase={setSelectedCase} />
      <SizeSelector onSelectSize={setSelectedSize} />
      <BandSelector onSelectBand={setSelectedBand} />
      <CollectionSwitcher />
      <PriceDisplay case={selectedCase} size={selectedSize} band={selectedBand} />
    </div>
  );
};

export default CustomizationPage;
