import React from "react";
import possum from "../assets/madpossumv2.png";

function Welcome() {
  return (
    <div className="my-8 flex flex-col justify-center items-center julius-sans-one-regular h-fit">
      <h1 className=" mt-6 font-thin text-2xl translate-y-16">possum park studio</h1>
            
            <img className="w-4/5 max-w-md cover" src={possum} alt="mad possum illustration" draggable="false"/>
      <h2 className="font-thin -translate-y-12">single stop song shop.</h2>
    </div>
  );
}

export default Welcome;
