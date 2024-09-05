import React from "react";
import Section from "./Section";
import About from "./About.jsx";
import Welcome from "./Welcome.jsx";
import Work from "./Work.jsx";
import Contact from "./Contact.jsx";
import ServicesMosaic from "./ServicesMosaic.jsx";
import { sectionContents } from "../assets/sectionContents.js";

const Body = ({ activeID }) => {
  return (
    <>
      {activeID == 0 && <Welcome />}

      {activeID != 0 &&
        sectionContents.map(
          (section) =>
            section.ID == activeID && (
              <Section key={section.ID} section={section}>
                {section.menuTitle == "work" && <Work />}
                {section.menuTitle == "what we do" && <ServicesMosaic />}
                {section.menuTitle == "what we do" && <About />}
                {section.menuTitle == "contact" && <Contact />}
                
              </Section>
            )
        )}
    </>
  );
};

export default Body;
