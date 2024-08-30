import React from "react";
import { useState } from "react";
import VidPlayer from "./VidPlayer";
import Tags from "./Tags";

const WorkCard = ({ project}) => {
  const [ activeProject, setActiveProject ] = useState(null)
  return (
    <div className="border border-gray-200 flex flex-col items-center p-3.5 rounded-lg shadow-lg bg-neutral-100 w-full">
      <div onClick={() => setActiveProject(project.videoID)}>
      < VidPlayer project={project} activeProject={activeProject} />
      </div>      

      <div className="w-full flex flex-col space-y-2 my-2">
        <h2 className="font-light">
          <span className="font-semibold"> project: </span>
          {project.title}
        </h2>
        <h2 className="font-light">
          <span className="font-semibold"> role: </span>
          {project.role}
        </h2>
        <Tags tags={project.tags} />
      </div>
    </div>
  );
};

export default WorkCard;
