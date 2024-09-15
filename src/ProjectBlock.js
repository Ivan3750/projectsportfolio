import React from 'react';
import reactJSXImg from './images/projects-img/react-jsx.png';
import ComponentsImg from './images/projects-img/components.png';
import ComponentsJSImg from './images/projects-img/components.png';
import CssModulesImg from './images/projects-img/css-modules.png';
import CssInJsImg from './images/projects-img/css-in-js.png';
 import StylingImg from './images/projects-img/styling.png';
import ClassComponentsEventsImg from './images/projects-img/class-components-eventsImg.png';

const images = {
  reactJSXImg,
  ComponentsImg,
  ComponentsJSImg,
  CssModulesImg,
  CssInJsImg,
  StylingImg,
  ClassComponentsEventsImg
};

const ProjectBlock = ({ project }) => {
  const imageUrl = images[project.img]; 

  return (
    <div className="project-block">
      <img className='project-block-img'
        src={imageUrl}
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
