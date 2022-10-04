import React from "react";
import ReactDom from "react-dom";
import "./style.css"
function Hi() {
  return <div className="stuff"> 
  <br/><br/>
  <h1>Resume</h1>
  <h2>Ahmed Raza</h2>
  <hr/>
  <br/>
  <p className="head">Interests</p>
  <ul>
    <li>Drawing</li>
    <li>Photography</li>
    <li>Design</li>
    <li>Programming</li>
    <li>Computer Science</li>
  </ul>
  <p className="head">Skills</p>
  <ul>
    
    <li>Web Design with HTML and  CSS and Js</li>
    <li>Graphic Designing From GFX Mentor</li>
  </ul>

  </div>
}

ReactDom.render(<Hi />, document.querySelector("#root"));
