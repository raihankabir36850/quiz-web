import React from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Text from "../Text/Text";
import styles from "./FormLogin-style.module.css";
import { Link } from "react-router-dom";

function FormLogin() {
  return (
    <Form className={styles.signupForm}>
      <div className={styles.formTitleContainer}>
        <h2 className={styles.formTitle}>Login To Your Account</h2>
      </div>
      <Row className="mb-3">
        <Form.Group controlId="formGridEmail">
          <Form.Label className={styles.formLabel}>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formGridPassword" as={Col}>
          <Form.Label className={styles.formLabel}>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="formGridConfirmPassword" as={Col}>
          <Form.Label className={styles.formLabel}>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm password" />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      <div className={styles.signupInstead}>
        <Text text="Don't have an account?" />
        <Link to="/signup">Sign up</Link>
        <span>instead</span>
      </div>
    </Form>
  );
}

export default FormLogin;
