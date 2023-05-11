import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Shahnia</h2>
        <div className="prompt">
          <p>A software developer Intern with a passion for learning and creating.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h2> Skills</h2>
        <ol className="list">
          <li className="item">
            <h3> Front-End</h3>
            <span>
              ReactJS, HTML, CSS, SASS, MaterialUI
            </span>
          </li>
          
          <li className="item">
            <h3>Languages</h3>
            <span> Javascript, Java, C++</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
