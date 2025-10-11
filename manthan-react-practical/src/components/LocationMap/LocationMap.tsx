import React from "react";
import "./LocationMap.css";

function LocationMap() {
  return (
    <div className="location-map-section">
      <div className="location-map-container">
        {/* Left Side - Content */}
        <div className="location-content">
          <div className="location-content-card">
            <div className="location-info">
              <div className="location-marker">
                <svg
                  width="24"
                  height="32"
                  viewBox="0 0 24 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0C5.37 0 0 5.37 0 12C0 21 12 32 12 32C12 32 24 21 24 12C24 5.37 18.63 0 12 0ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z"
                    fill="#FF3B30"
                  />
                </svg>
              </div>
              <h3 className="location-venue">Novotel, Ahmedabad</h3>
              <p className="location-time">6pm to 8pm</p>
            </div>

            <div className="location-address">
              <p>Iscon Cross Roads, Sarkhej -</p>
              <p>Gandhinagar Hwy, next to Wide Angle</p>
              <p>Cinema, Ahmedabad, Gujarat 380015</p>
            </div>

            <div className="location-contact">
              <p className="contact-item">
                <span className="contact-label">E-Mail:</span>{" "}
                info@loremipsum.in
              </p>
              <p className="contact-item">
                <span className="contact-label">Mob No:</span> 022-66221640
              </p>
            </div>

            <button className="reserve-spot-btn">Reserve your Spot Now</button>

            <p className="limited-seats">
              Seats are Limited Secure your spot today
            </p>
          </div>
        </div>

        {/* Right Side - Map */}
        <div className="location-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9876543210123!2d72.5198765!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAxJzIxLjAiTiA3MsKwMzEnMTEuNiJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Event Location Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default LocationMap;
