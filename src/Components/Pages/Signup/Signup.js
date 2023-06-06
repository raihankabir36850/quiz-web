import React from 'react';
import Container from 'react-bootstrap/Container';
import FormSignUp from '../../Signup/FormSignUp';
import styles from './Signup-style.module.css';
function Signup() {
  return (
    <Container className={`main-layout ${styles.formLayout}`}>
      <FormSignUp />
    </Container>
  );
}

export default Signup;
