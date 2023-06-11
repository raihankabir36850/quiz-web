import React from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import styles from "./FormSignUp-style.module.css";
import Text from "../Text/Text";
import { Link } from "react-router-dom";

function FormSignUp() {
  return (
    <Form className={styles.signupForm}>
      <div className={styles.formTitleContainer}>
        <h2 className={styles.formTitle}>Sign Up</h2>
        <h5 className={styles.formSubTitle}>
          Please fill in this form to create an account!
        </h5>
      </div>
      <Row className="mb-3">
        <Form.Group controlId="formGridUser" as={Col}>
          <Form.Label className={styles.formLabel}>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter First name" />
        </Form.Group>

        <Form.Group controlId="formGridUser" as={Col}>
          <Form.Label className={styles.formLabel}>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Last name" />
        </Form.Group>

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

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check
          type="checkbox"
          label="I agree to the Terms and Conditions"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      <div className={styles.signupInstead}>
        <Text text="Already have an account?" />
        <Link to="/login">Login</Link>
        <span>instead</span>
      </div>
    </Form>
  );
}

export default FormSignUp;
