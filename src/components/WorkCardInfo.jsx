import React from "react";
import Tags from "./Tags";

const WorkCardInfo = ({ project }) => {
  return (
    <article className={`w-full h-auto py-2  flex-col space-y-1 transition-all flex`}>
      <h2 className="px-1">
        <span className="font-semibold"> Project: </span>
        {project.title}
      </h2>
      <h2 className="px-1">
        <span className="font-semibold"> Description: </span>
        {project.description}
      </h2>
      <h2 className="px-1">
        <span className="font-semibold" > Role: </span>
        {project.role}
      </h2>
      {/* <Tags tags={project.tags} /> */}
    </article>
  );
};

export default WorkCardInfo;
