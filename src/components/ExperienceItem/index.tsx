import React from 'react'

import styles from './ExperienceItem.module.scss'

type ExperienceItemProps = {
  company: string
  grade: string
  start: string
  finish: string
  responsibilities: string[]
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ company, start, finish, responsibilities, grade }) => {
  return (
    <div className={styles.container}>
      <div className={styles.period}>
        <div className={styles.start}>{start}</div>
        <div className={styles.finish}>{finish}</div>
      </div>
      <div className={styles.company}>
        <h4 className={styles.companyName}>{company}</h4>
        <h5 className={styles.grade}>{grade}</h5>
        <h5 className={styles.titleList}>Должностные обязонасти</h5>
        <ul className={styles.responsibilities}>
          {responsibilities.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div></div>
    </div>
  )
}

export default ExperienceItem
