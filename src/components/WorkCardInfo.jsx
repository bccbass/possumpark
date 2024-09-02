import React from "react";
import Tags from "./Tags";

const WorkCardInfo = ({ project }) => {
  return (
    <div className={`w-full h-auto  flex-col space-y-2 transition-all flex`}>
      <article className="font-light px-1.5">
        <span className="font-semibold"> Description: </span>
        {project.description}
      </article>
      <h2 className="font-light px-1.5">
        <span className="font-semibold"> Role: </span>
        {project.role}
      </h2>
      {/* <Tags tags={project.tags} /> */}
    </div>
  );
};

export default WorkCardInfo;
