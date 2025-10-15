import "./OurCollaborators.css";
import awsLogo from "../../assets/logoImages/aws-partner.png";
import sapLogo from "../../assets/logoImages/sap-gold-partner.png";
import amazonLogo from "../../assets/logoImages/amazon-smile.png";

function OurCollaborators() {
  return (
    <div className="collaborators-section">
      <div className="collaborators-container">
        <div className="collaborators-content">
          <h2 className="collaborators-title">
            <span className="title-gray">Our</span>{" "}
            <span className="title-orange">Collaborators</span>
          </h2>
          <p className="collaborators-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="collaborators-btn">Become a Member</button>
        </div>
        <div className="collaborators-logos">
          <div className="logo-item">
            <img src={awsLogo} alt="AWS Partner" className="logo-image" />
          </div>
          <div className="logo-item">
            <img src={sapLogo} alt="SAP Gold Partner" className="logo-image" />
          </div>
          <div className="logo-item">
            <img src={amazonLogo} alt="Amazon" className="logo-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurCollaborators;
