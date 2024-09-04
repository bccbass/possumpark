import React from "react";
import Badge from "./Badge";
import { sectionContents } from "../assets/sectionContents";
import possum from "../assets/madpossumv2.png";

const Footer = ({ activeID, setActiveID }) => {
  const homepageClasses = "bg-neutral-100 border-none";
  const expandedFooterClasses = "bg-white= border-top";

  return (
    <footer
      className={`${
        activeID == 0 ? homepageClasses : expandedFooterClasses
      }font-light  text-xs text-gray-500 flex flex-col justify-end bg-white h-fit`}
    >
      {activeID !== 0 && (
        <div className="flex  justify-between mx-2 mt-1 items-center">
          {/* <Badge /> */}
          <div className="w-20  mx-3 flex flex-col text-center translate-y-2"
          style={{fontSize: '.5rem'}}>
            Designed and coded by Possum Park
          </div>
          <img className="size-12 opacity-30 grayscale" src={possum} alt="" />

          <div className="flex flex-col w-fit  items-end mx-3 mt-1">
            <span className="font-semibold">sitemap </span>
            {sectionContents.map((section) => (
              <li
                key={section.ID}
                className="list-none hover:underline hover:text-gray-800 transition-all"
              >
                {section.menuTitle}
              </li>
            ))}
          </div>
        </div>
      )}
      <div className="text-center w-full m-1 text-gray-400" >© possum park studio 2024</div>
    </footer>
  );
};

export default Footer;
