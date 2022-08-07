import React from 'react'

import styles from './Languages.module.scss'

const Languages: React.FC = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Английский</h4>
      <div className={styles.level}>
        <div className={styles.ballsContainer}>
          <div className={`${styles.ball} ${styles.fill}`}></div>
          <div className={`${styles.ball} ${styles.fill}`}></div>
          <div className={styles.ball}></div>
          <div className={styles.ball}></div>
          <div className={styles.ball}></div>
        </div>
        <div className={styles.subtitle}>B1 - Средний</div>
      </div>
    </div>
  )
}

export default Languages
