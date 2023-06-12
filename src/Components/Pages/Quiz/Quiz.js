import React from "react";
import Nav from "../../Navbar/Nav";
import styles from "./Quiz-style.module.css";

function Quiz({ quizType }) {
  return (
    <>
      <Nav />
      <h1 className={styles.quizTitle}>{quizType}</h1>
    </>
  );
}

export default Quiz;
