import React from 'react';

function Project(props){
  return(
    <div className="out">
      <img src={props.img} alt="project" />
      <div className="in">
        <p className="p">{props.desc}</p>
      </div>
    </div>
  )
};
export default Project;
