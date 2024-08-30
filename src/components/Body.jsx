import React from "react";
import Section from "./Section";
import Welcome from "./Welcome.jsx";
import Work from "./Work.jsx";
import Contact from "./Contact.jsx";
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
                {section.ID == 2 && <Work />}
                {section.ID == 4 && <Contact />}
              </Section>
            )
        )}
    </>
  );
};

export default Body;
