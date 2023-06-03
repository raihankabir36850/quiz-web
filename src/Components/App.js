import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "./Navbar/Nav";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <div id="topics-container"></div>
      <Nav />
      <Home />
    </div>
  );
}

export default App;
