import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import WhatYouWillLearn from "./components/WhatYouWillLearn/WhatYouWillLearn";
import AboutEvent from "./components/AboutEvent/AboutEvent";
import OurCollaborators from "./components/OurCollaborators/OurCollaborators";
import EventAgenda from "./components/EventAgenda/EventAgenda";
import LocationMap from "./components/LocationMap/LocationMap";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <HeroSection />
      <WhatYouWillLearn />
      <AboutEvent />
      <OurCollaborators />
      <EventAgenda />
      <LocationMap />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
