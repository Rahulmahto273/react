import React from "react";
import "./header.css"

function Header(){
  return(
    <div className="header">
      <div class="left">
        <h3>Rahul <span>Mahto</span></h3>
      </div>
      <div class="right">
        <a href="#">Download CV</a>
      </div>
    </div>
  )
};
export default Header;
