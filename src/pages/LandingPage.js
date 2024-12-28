import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => (
  <div className="landing-container">
    <header>
      <h1>Welcome to Apple Watch Studio</h1>
    </header>
    <div className="cta-container">
      <Link to="/customize">
        <button className="cta-button">Start Customizing</button>
      </Link>
    </div>
  </div>
);

export default LandingPage;
