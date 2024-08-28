import React from "react";
import Menu from "./Menu";
import { Cross as Hamburger } from "hamburger-react";

function Nav({ isOpen, setOpen, activeID, setActiveID }) {
  // const handleNavToggle = () => setOpen(!isOpen);

  return (
    <div className="w-full flex flex-row justify-between z-20 border-b">
      {activeID > 0 && !isOpen && (
        <h2 className="m-3 ml-6 text-xl font-thin julius-sans-one-regular cursor-default z-20"
        onClick={() => setActiveID(0)}>
          possum park studio
        </h2>
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
      {isOpen && <Menu setOpen={ setOpen } setActiveID={setActiveID} />}
    </div>
  );
}

export default Nav;
