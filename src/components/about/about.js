import React from "react";
import dp from "../../images/dp.jpg"
import "./about.css";

function About(){
  return(
    <div className="main-about">
    <div className="wrapper-about">
    <div className="image">
      <img src={dp} />
    </div>
    <div className="describe">
      <p>Hello, I am Rahul Mahto, currently pursuing B.E. in Electronics and Communication from Panjab University Chandigarh.
        I am a quick learner and a self-taught programmer, enjoy learning new technologies. Seeking a platform to expand my knowledge and test my skills.
      </p>
      </div>
      </div>
    </div>
  )
};
export default About;
