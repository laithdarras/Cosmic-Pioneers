import React from "react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <Outlet />
    </div>
  );
}

export default App;
