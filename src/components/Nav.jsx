import React from "react";
import Menu from "./Menu";
import { Cross as Hamburger } from "hamburger-react";
import possum from "../assets/madpossumv2.png";

function Nav({ isOpen, setOpen, activeID, setActiveID }) {
  // const handleNavToggle = () => setOpen(!isOpen);

  return (
    <div className="w-screen flex flex-row justify-between z-20 border-b bg-white">
      {activeID > 0 && !isOpen && (
        <div
          onClick={() => setActiveID(0)}
          className="flex items-center ml-6 py-3"
        >
          <img
            draggable="false"
            src={possum}
            alt=""
            className="w-16 hidden sm:block"
            style={{ transform: "rotateY(180deg)" }}
          />
          <h2 className="ml-1 text-xl sm:text-2xl font-thin julius-sans-one-regular cursor-default z-20">
            possum park studio
          </h2>
        </div>
      )}

      <div className={`top-0 right-2 z-50 ${isOpen ? "fixed" : "absolute"}`}>
        <Hamburger
          className=""
          // onClick={handleNavToggle}
          toggled={isOpen}
          toggle={setOpen}
          direction="left"
          distance="lg"
          rounded
          size="28"
          color={isOpen ? "white" : "#A9A9A9"}
        />
      </div>
      {isOpen && (
        <Menu setOpen={setOpen} setActiveID={setActiveID} activeID={activeID} />
      )}
    </div>
  );
}

export default Nav;
