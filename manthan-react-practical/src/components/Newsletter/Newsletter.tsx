import React, { useState } from "react";
import "./Newsletter.css";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    // Handle newsletter subscription
    setEmail("");
  };

  return (
    <div className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <h2 className="newsletter-title">Subscribe our newsletter</h2>
          <p className="newsletter-description">
            Subscribe to our newsletter for updates on events, announcements,
            and exclusive offers. Don't miss out!
          </p>
        </div>

        <div className="newsletter-form-wrapper">
          <form onSubmit={handleSubmit} className="newsletter-form">
            <div className="form-group">
              <label htmlFor="newsletter-email" className="form-label">
                Stay up to date
              </label>
              <div className="input-button-group">
                <input
                  type="email"
                  id="newsletter-email"
                  className="newsletter-input"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="newsletter-submit-btn">
                  Subscribe
                </button>
              </div>
            </div>
            <p className="privacy-policy-text">
              By submitting you agree to our{" "}
              <a href="#" className="privacy-link">
                Privacy Policy
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
