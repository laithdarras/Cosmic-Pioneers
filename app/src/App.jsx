import React from "react";
import { Outlet } from "react-router-dom";
//import the Navbar component here
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
