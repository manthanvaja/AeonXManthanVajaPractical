import "./HeroSection.css";
import Navbar from "../Navbar/Navbar";
import EventInfoWithTimer from "../EventInfoWithTimer/EventInfoWithTimer";

function HeroSection() {
  return (
    <div className="hero-section">
      <Navbar />
      <EventInfoWithTimer />
    </div>
  );
}

export default HeroSection;
