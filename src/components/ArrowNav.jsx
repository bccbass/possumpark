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
  const activeButton =
    "w-12 opacity-90 inline-block mx-3 hover:opacity-50 transition-opacity";
  const inactiveButton = "w-12 opacity-0 inline-block mx-6";

  return (
    !isOpen && (
      <div className="flex flex-col items-center  mt-2 mb-8">
        <div className="flex flex-row w-full items-center justify-center ">
          <img
            label="toPreviousSection"
            onClick={activeID != 0 ? handleDecrementId : null}
            className={`${
              activeID != 0 ? activeButton : inactiveButton
            } md:fixed left-1 lg:left-12 xl:left-48 2xl:left-80 md:top-1/2`}
            src={leftArrow}
            alt="left arrow"
            draggable="false"
          />

          {/* Right Arrow */}
          <img
            label="toNextSection"
            onClick={activeID != contentLength ? handleIncrementId : null}
            className={`${
              activeID != contentLength ? activeButton : inactiveButton
            } md:fixed right-1 lg:right-12 xl:right-48 2xl:right-80 md:top-1/2`}
            src={rightArrow}
            alt="right arrow"
            draggable="false"
          />
        </div>
        {/* DOTS */}
        <div className="flex mt-2">
          {sectionContents.map((section, i) => (
            <img
              onClick={() => setActiveID(i)}
              className="w-4 opacity-90 mx-1 "
              draggable="false"
              src={activeID === i ? redDot : dot}
            ></img>
          ))}
        </div>
      </div>
    )
  );
};

export default ArrowNav;
