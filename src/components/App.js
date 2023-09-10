import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links"; // Import the Links component

// Import the user data
import user from "../data/user";

function App() {
  return (
    <div>
      <NavBar />
      {/* Pass data as props to Home and About components */}
      <Home name={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} github={user.links.github} linkedin={user.links.linkedin} />
    </div>
  );
}

export default App;
