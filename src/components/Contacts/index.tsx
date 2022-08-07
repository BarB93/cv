import React from 'react'
import ContactsItem from '../ContactsItem'

import whatsappSVG from '../../assets/img/wapp_icon.svg'
import telegramSVG from '../../assets/img/telegram_icon.svg'
import phoneSVG from '../../assets/img/phone_icon.svg'
import emailSVG from '../../assets/img/email_icon.svg'
import styles from './Contacts.module.scss'

const Contacts: React.FC = () => {
  return (
    <div>
      <div className={`${styles.tel} ${styles.item}`}>
        <a className={styles.link} href='tel:+79773882433'>
          <img className={styles.icon} src={phoneSVG} alt='phone' />
          <span className={styles.number}>+79773882433</span>
        </a>
        <a className={styles.link} href='https://api.SVG.com/send?phone=89773882433' target='_blank'>
          <img src={whatsappSVG} alt='whatsapp' />
        </a>
        <a className={styles.link} href='https://t.me/BarB93' target='_blank'>
          <img src={telegramSVG} alt='telegram' />
        </a>
      </div>
      <div className={`${styles.email} ${styles.item}`}>
        <a className={styles.link} href='mailto:barovskiyboris@gmail.com'>
          <img className={styles.icon} src={emailSVG} alt='email' />
          barovskiyboris@gmail.com
        </a>
      </div>
      <ContactsItem title='Гражданство'>РФ</ContactsItem>
      <ContactsItem title='Желаемая зарплата'>100000 руб.</ContactsItem>
      <ContactsItem title='Занятость'>Полная занятость, полный день Переезд возможен</ContactsItem>
    </div>
  )
}

export default Contacts
