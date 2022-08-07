import React from 'react'

import styles from './TitleSection.module.scss'

type TitleSectionProps = {
  title: string
  imageURL: string
}

const TitleSection: React.FC<TitleSectionProps> = ({ title, imageURL }) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.delimiter} />
      <div className={styles.image}>
        <img src={imageURL} alt={title} />
      </div>
    </div>
  )
}

export default TitleSection
