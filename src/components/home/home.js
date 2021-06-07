import React from "react";
import "./home.css";

function Home(){
  return(
    <div className="main-div">
    <div className="wrapper">
    <div className="desc">
      <h1>Hi! I am <span> Rahul Mahto </span></h1>
      <h4>I am a <span>Front-end Developer</span> </h4>
    </div>
    <div className="icons">
      <a href="https://www.facebook.com/profile.php?id=100042175279933"><i class="fab fa-facebook"></i></a>
      <a href="https://www.linkedin.com/in/rahul-mahto-53240517"><i class="fab fa-linkedin"></i></a>
      <a href="https://github.com/Rahulmahto273"><i class="fab fa-github"></i></a>
      <a href="https://wa.me/8264997957"><i class="fab fa-whatsapp"></i></a>
    </div>
    </div>
    </div>
  )
};
export default Home;
