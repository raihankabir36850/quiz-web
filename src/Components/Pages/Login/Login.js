import React from "react";
import FormLogin from "../../Login/FormLogin";
import Container from "react-bootstrap/Container";
import styles from "./Login-style.module.css";

function Login() {
  return (
    <Container className={`main-layout ${styles.formLayout}`}>
      <FormLogin />
    </Container>
  );
}

export default Login;
