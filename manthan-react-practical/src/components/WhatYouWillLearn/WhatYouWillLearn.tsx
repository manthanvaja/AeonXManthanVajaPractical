import "./WhatYouWillLearn.css";
import compassIcon from "../../assets/iconImages/compass.png";
import aiHandIcon from "../../assets/iconImages/ai-hand.png";
import gearsIcon from "../../assets/iconImages/gears.png";

function WhatYouWillLearn() {
  return (
    <div className="learning-section">
      <h1 className="section-title">What you will learn</h1>
      <p className="section-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="features-grid">
        <div className="feature-item">
          <div className="icon-container">
            <img
              src={compassIcon}
              alt="Discover RISE with SAP"
              className="feature-icon"
            />
          </div>
          <h2 className="feature-title">Discover RISE with SAP</h2>
          <p className="feature-description">
            Discover howLorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim.
          </p>
        </div>
        <div className="feature-item">
          <div className="icon-container">
            <img src={aiHandIcon} alt="AI use-cases" className="feature-icon" />
          </div>
          <h2 className="feature-title">AI use-cases</h2>
          <p className="feature-description">
            Discover howLorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim.
          </p>
        </div>
        <div className="feature-item">
          <div className="icon-container">
            <img
              src={gearsIcon}
              alt="SAP Transformation"
              className="feature-icon"
            />
          </div>
          <h2 className="feature-title">SAP Transformation</h2>
          <p className="feature-description">
            Discover howLorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhatYouWillLearn;
