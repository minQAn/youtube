import React from 'react';
import styles from './loading_spinner.module.css';

const LoadingSpinner = (props) => (
  <div className={styles.container}>
    <div className={styles.loading_spinner}></div>
  </div>
);

export default LoadingSpinner;
