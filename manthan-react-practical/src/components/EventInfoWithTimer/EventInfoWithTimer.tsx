import React, { useState, useEffect } from "react";
import "./EventInfoWithTimer.css";

function EventInfoWithTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-06-12T00:00:00").getTime(); // Changed to 2026 for demo since 2025 is past; revert if needed

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="event-info-with-timer">
      <p className="event-details">
        <span>📅 June 12, 2025</span> | <span>📍 Mumbai, India</span>
      </p>
      <h1 className="event-title">Intelligent Enterprise Roundtable</h1>
      <p className="event-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris.
      </p>
      <div className="action-buttons">
        <button className="register-button">Register Now →</button>
        <button className="contact-button">Contact Us</button>
      </div>
      <div className="countdown-timer">
        <div className="timer-values">
          <div className="timer-block">
            <span className="timer-value">
              {timeLeft.days.toString().padStart(2, "0")}
            </span>
          </div>
          <span className="timer-separator">:</span>
          <div className="timer-block">
            <span className="timer-value">
              {timeLeft.hours.toString().padStart(2, "0")}
            </span>
          </div>
          <span className="timer-separator">:</span>
          <div className="timer-block">
            <span className="timer-value">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </span>
          </div>
          <span className="timer-separator">:</span>
          <div className="timer-block">
            <span className="timer-value">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </span>
          </div>
        </div>
        <div className="timer-labels">
          <span className="timer-label">Days</span>
          <span className="timer-label">Hours</span>
          <span className="timer-label">Minutes</span>
          <span className="timer-label">Seconds</span>
        </div>
      </div>
    </div>
  );
}

export default EventInfoWithTimer;
