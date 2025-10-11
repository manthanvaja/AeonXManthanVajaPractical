import "./AboutEvent.css";
import eventImage from "../../assets/bgImages/AbtTopImg.jpg";

function AboutEvent() {
  return (
    <div className="about-event-section">
      <div className="about-event-image-container">
        <img src={eventImage} alt="Event venue" className="about-event-image" />
      </div>
      <div className="about-event-content">
        <h2 className="about-event-title">
          <span className="title-gray">About</span>{" "}
          <span className="title-blue">Event</span>
        </h2>
        <p className="about-event-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}

export default AboutEvent;
