import React, { Component } from 'react';
import "./About.css";
import profile from "../assets/profile.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
             <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              img src = {profile}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Maya D'Souza</div>
            <div className="brief_description">
              I am currently studying Computer Science at Oregon State University. Some of my hobbies include hiking, reading, doing logic puzzles, and cooking.
            </div>
          </div>
        </div>
      </div> 
      </div>
    )
  }
}
