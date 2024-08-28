import React from "react";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";
import dot from "../assets/dot.png";
import redDot from "../assets/redDot.png";
import { sectionContents } from "../assets/sectionContents";

const ArrowNav = ({ setActiveID, activeID, isOpen }) => {
  const contentLength = sectionContents.length - 1;
  const handleIncrementId = () =>
    activeID >= contentLength ? setActiveID(0) : setActiveID(activeID + 1);
  const handleDecrementId = () =>
    activeID == 0 ? setActiveID(contentLength) : setActiveID(activeID - 1);
  const activeButton = "w-12 opacity-90 inline-block mx-6 hover:opacity-50 transition-opacity"
  const inactiveButton = "w-12 opacity-0 inline-block mx-6"


  return (
    !isOpen && (
      <div className="flex flex-col items-center mt-12 pb-8">
        <div className="flex flex-row w-full items-center justify-center ">
            <img
              label="toPreviousSection"
              onClick={activeID != 0 ? handleDecrementId : null}
              className={activeID != 0 ? activeButton : inactiveButton}
              src={leftArrow}
              alt=""
            />

          {/* Right Arrow */}
            <img
              label="toNextSection"
              onClick={activeID != contentLength ? handleIncrementId : null}
              className={activeID != contentLength ? activeButton : inactiveButton}
              src={rightArrow}
              alt=""
            />
        </div>
        {/* DOTS */}
        <div className="flex mt-2">
          {sectionContents.map((section, i) => (
            <img
              className="w-4 opacity-90 mx-1 "
              src={activeID === i ? redDot : dot}
            ></img>
          ))}
        </div>
      </div>
    )
  );
};

export default ArrowNav;
