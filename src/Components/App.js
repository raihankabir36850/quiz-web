import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "./Navbar/Nav";
import Home from "./Pages/Home/Home";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Signup />
      <Login />
    </div>
  );
}

export default App;
