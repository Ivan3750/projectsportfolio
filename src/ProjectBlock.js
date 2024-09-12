import React, { useState } from "react";

const ProjectBlock = ({ project }) => {
  const [imgSrc, setImgSrc] = useState(project.img || "#")



  return (
    <div className="project-block">
      <img
        src={imgSrc}
        alt={project.name || "Project Image"}
      />
      <div className="project-block__controls">
        <div className="project-name">{project.name}</div>
        <a className="project-link" href={project.url}>Open</a>
      </div>
    </div>
  );
};

export default ProjectBlock;
