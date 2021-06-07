import React from "react";
import "./layout.css";

import Home from "../home/home.js";
import About from "../about/about.js";
import Skills from "../skills/skills.js";
import Projects from "../project/projects.js";
import Contact from "../contact/contact.js";

import rahul from "../../images/rahul.jpg";
import Header from "./header.js";

import {NavLink} from "react-router-dom";
import {BrowserRouter, Switch, Route} from "react-router-dom";

function Homepage(){
  return(
  <BrowserRouter>
  <div>
    <Header />
    <div className="container">
      <div className="sidebar">
        <img className="profile-img" src={rahul}></img>
        <h4>Rahul Mahto</h4>
        <hr />
        <ul>
          <li><NavLink exact to="/" activeClassName="selected">Home</NavLink></li>
          <li><NavLink exact to="/about" activeClassName="selected">About</NavLink></li>
          <li><NavLink exact to="/skills" activeClassName="selected">Skills</NavLink></li>
          <li><NavLink exact to="/projects" activeClassName="selected">Projects</NavLink></li>
          <li><NavLink exact to="contact" activeClassName="selected">Contact</NavLink></li>
        </ul>
      </div>
      <div className="main-content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </div>
  </div>
  </BrowserRouter>
  )
};

export default Homepage;
