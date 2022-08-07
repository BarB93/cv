import React from 'react'

import styles from './ContactsItem.module.scss'

type ContactsItemProps = {
  title: string
  children: React.ReactNode
}

const ContactsItem :React.FC<ContactsItemProps> = ({title, children}) => {
  return (
    <div className={styles.item}>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.body}>{children}</div>
    </div>
  )
}

export default ContactsItem