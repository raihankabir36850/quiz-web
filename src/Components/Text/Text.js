import React from 'react';
import styles from './text-style.module.css';
function Text({ text }) {
  return <p className={styles.simpleText}>{text}</p>;
}

export default Text;
