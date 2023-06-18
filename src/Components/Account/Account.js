import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';
import styles from './account-style.module.css';

function Account() {
  return (
    <div className={styles.accountHolder}>
      <Icon className={`${styles.accountIcon}`} />
      <Link to='/signup' className={styles.signupLink}>
        Signup
      </Link>
    </div>
  );
}

export default Account;
