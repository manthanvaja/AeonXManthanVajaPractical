import "./Navbar.css";
import youtubeIcon from "../../assets/iconImages/youtube.png";
import linkedinIcon from "../../assets/iconImages/linkedin.png";
import facebookIcon from "../../assets/iconImages/facebook.png";
import instagramIcon from "../../assets/iconImages/instagram.png";
import twitterIcon from "../../assets/iconImages/x.png";

function Navbar() {
  return (
    <nav className="top-nav">
      <div className="logo-container">
        <div className="logo">U</div>
      </div>
      <div className="social-icons">
        <img src={youtubeIcon} alt="YouTube" className="icon" />
        <img src={linkedinIcon} alt="LinkedIn" className="icon" />
        <img src={facebookIcon} alt="Facebook" className="icon" />
        <img src={instagramIcon} alt="Instagram" className="icon" />
        <img src={twitterIcon} alt="X/Twitter" className="icon" />
      </div>
      <button className="register-button">Register Now</button>
    </nav>
  );
}

export default Navbar;
