import React from "react";
import { Link } from "react-router-dom";
import styles from "./account-style.module.css";
import Icon from "../Icon/Icon";

function Account() {
  return (
    <div className={styles.accountHolder}>
      <Icon className={`${styles.accountIcon}`} />
      <Link to="/signup" className={styles.signupLink}>
        Signup
      </Link>
    </div>
  );
}

export default Account;
