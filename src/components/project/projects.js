import React from "react";
import Project from "./project.js"
import "./project.css";

import project_arrays from "./project-array.js"
function createCard(project_array){
  return <Project name={project_array.name}
  img={project_array.img}
  desc={project_array.desc} />
}

function Projects(){
  return(
    <div className="outt">
      <h2>My Projects</h2>
      <div className="inn">
        {project_arrays.map(createCard)}
      </div>
    </div>
  )
};
export default Projects;
