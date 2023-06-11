import React from "react";
import Container from "react-bootstrap/Container";
import FormSignUp from "../../Signup/FormSignUp";
import styles from "./Signup-style.module.css";
import Nav from "../../Navbar/Nav";

function Signup() {
  return (
    <>
      <Nav />
      <Container className={`main-layout ${styles.formLayout}`}>
        <FormSignUp />
      </Container>
    </>
  );
}

export default Signup;
