import React from 'react'

import styles from './LeftItem.module.scss'

type LeftItemProps = {
  title: string
  children: React.ReactNode
}

const LeftItem: React.FC<LeftItemProps> = ({ title, children }) => {
  return (
    <div>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.body}>
        {children}
      </div>
    </div>
  )
}

export default LeftItem
