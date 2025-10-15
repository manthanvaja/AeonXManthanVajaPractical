import "./Footer.css";
import youtubeIcon from "../../assets/iconImages/youtube.png";
import linkedinIcon from "../../assets/iconImages/linkedin.png";
import facebookIcon from "../../assets/iconImages/facebook.png";
import instagramIcon from "../../assets/iconImages/instagram.png";
import twitterIcon from "../../assets/iconImages/x.png";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-circle">
                <span className="logo-text">U</span>
              </div>
            </div>
            <p className="footer-tagline">Your Workplace for all Needs</p>
          </div>

          <div className="footer-contact">
            <p className="contact-detail">manthanvaja33@gmail.com</p>
            <p className="contact-detail">+91 9328600122</p>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-links">
            <a href="#" className="footer-link">
              Terms of Service
            </a>
            <a href="#" className="footer-link">
              Privacy Policy
            </a>
            <a href="#" className="footer-link">
              Manage Cookies
            </a>
          </div>

          <div className="footer-social">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src={youtubeIcon}
                alt="YouTube"
                className="social-icon-img"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="social-icon-img"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src={facebookIcon}
                alt="Facebook"
                className="social-icon-img"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src={instagramIcon}
                alt="Instagram"
                className="social-icon-img"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src={twitterIcon}
                alt="X/Twitter"
                className="social-icon-img"
              />
            </a>
          </div>

          <div className="footer-copyright">
            <p>
              © 2025 Developed & Practical Assessment by{" "}
              <a
                href="https://linkedin.com/in/manthan-vaja"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#ff6600", textDecoration: "underline" }}
              >
                Manthan Vaja
              </a>
              . All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
