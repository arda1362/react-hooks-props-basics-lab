import React from "react";
import Links from "./Links"; // Import the Links component

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* Conditionally render the bio */}
      {props.bio && <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* Pass GitHub and LinkedIn links as props to the Links component */}
      <Links github={props.github} linkedin={props.linkedin} />
    </div>
  );
}

export default About;

