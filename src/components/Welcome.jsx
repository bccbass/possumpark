import React from "react";
import possum from "../assets/madpossum.jpg";

function Welcome() {
  return (
    <div className="my-8 flex flex-col justify-center items-center julius-sans-one-regular">
      <h1 className="m-2 mt-6 font-thin text-2xl ">possum park studio</h1>
      <img className="my-4" src={possum} alt="" />
      <h2 className="font-thin">single stop song shop.</h2>
    </div>
  );
}

export default Welcome;
