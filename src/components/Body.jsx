import React from "react";
import Section from "./Section";
import WhatWeDo from "./WhatWeDo.jsx";
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
                {section.menuTitle == "work" && <Work/>}
                {section.menuTitle == "who we are" && <WhatWeDo section={section}/>}
                {/* {section.menuTitle == "who we are" && <ServicesMosaic />} */}

                {section.menuTitle == "contact" && <Contact />}
                
              </Section>
            )
        )}
    </>
  );
};

export default Body;
