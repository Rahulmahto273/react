import React from "react";
import "./contact.css";

function Contact(){
  return(
    <div className="wrap">
      <div className="contact">
        <div className="contact-info">
          <h2>Contact</h2>
          <hr />
          <div className="info">
            <label for="">
              <i class="fas fa-map-marker-alt"></i>
            </label>
            <ul>
              <li>Ward no. 12 Road</li>
              <li>Raja Tola Harlakhi </li>
              <li>Madhubani Bihar-847240</li>
            </ul>
            </div>
          <div className="info">
            <label for="">
              <i class="fas fa-phone"></i>
            </label>
            <span><a href="#">+91-8264997957</a></span>
          </div>
          <div className="info">
            <label for="">
              <i class="fas fa-envelope"></i>
            </label>
            <span><a href="#">rahulmahto273@gmail.com</a></span>
          </div>
          <hr />
          <div className="social-icons">
            <p>Let's Connect</p>
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div className="contact-form">
          <h2>Fill-out Form</h2>
          <hr />
          <form>
            <input type="text" placeholder="Your Name"/>
            <input type="text" placeholder="Your Email"/>
            <textarea placeholder="Message"/>
            <input type="submit" value="Send Message"/>
          </form>
        </div>
      </div>
    </div>
)};
export default Contact;
