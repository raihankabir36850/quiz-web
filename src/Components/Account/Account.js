import React from "react";
import styles from "./account-style.module.css";
import Icon from "../Icon/Icon";

function Account() {
  return (
    <div className={styles.accountHolder}>
      <Icon className={`${styles.accountIcon}`} />
      <a href="#" className={styles.signupLink}>
        Signup
      </a>
    </div>
  );
}

export default Account;
