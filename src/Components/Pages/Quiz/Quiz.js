import React from "react";
import Nav from "../../Navbar/Nav";
import styles from "./Quiz-style.module.css";
import Quizzes from "../../Quizzes/Quizzes";

function Quiz({ quizType, categoryID }) {
  return (
    <>
      <Nav />
      <h1 className={styles.quizTitle}>{quizType}</h1>
      <Quizzes categoryID={categoryID} />
    </>
  );
}

export default Quiz;
