import React from "react";
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
        <div className="flex  justify-between mx-2 items-center md:ml-8 lg:ml-16">
          <h3
            className="w-20 julius-sans-one-regular mx-3  flex flex-col text-center text-gray-700"
            style={{ fontSize: ".6rem" }}
          >
            Designed and coded by Possum Park
          </h3>
          <img
            className="w-12 md:w-20 opacity-90 grayscale"
            src={possum}
            alt=""
          />

          <div className="flex flex-col w-fit  items-end mx-3 mt-2 md:mr-3 lg:mr-10">
            <span className="font-semibold">sitemap </span>
            <ul className="flex flex-col items-end ">
              {sectionContents.map((section) => (
                <li
                  onClick={() => setActiveID(section.ID)}
                  key={section.ID}
                  className="list-none hover:underline hover:text-gray-800 transition-all cursor-default my-0.5"
                >
                  {section.menuTitle}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <div className="text-center w-full m-1 text-gray-700 julius-sans-one-regular">
        © possum park studio 2024
      </div>
    </footer>
  );
};

export default Footer;
