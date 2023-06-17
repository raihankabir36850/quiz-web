import React from "react";
import Quize from "../Quiz/Quiz";

function Quizzes({ categoryID }) {
  return <Quize subject={categoryID} />;
}

export default Quizzes;
