import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <AllRoutes />
    </Router>
  );
}

export default App;
