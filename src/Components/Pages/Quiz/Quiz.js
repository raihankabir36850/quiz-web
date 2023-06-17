import React from "react";
import Nav from "../../Navbar/Nav";
import styles from "./Quiz-style.module.css";
import Timer from "../../Timer/Timer.js";
import Quizzes from "../../Quizzes/Quizzes";

function Quiz({ quizType, categoryID }) {
  return (
    <>
      <Nav />
      <h1 className={styles.quizTitle}>
        {quizType} - {categoryID}
      </h1>
      <Timer />
      <Quizzes categoryID={categoryID} />
    </>
  );
}

export default Quiz;
