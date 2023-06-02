import React from 'react';
import styles from './account-style.module.css';

function Account() {
  return (
    <div className={styles.accountHolder}>
      <span className={`material-icons-outlined ${styles.accountIcon}`} title='Account'>
        account_circle
      </span>
      <a href='#' className={styles.signupLink}>
        Signup
      </a>
    </div>
  );
}

export default Account;
