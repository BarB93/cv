import React from 'react'
import TitleSection from '../TitleSection/TitleSection'

import profileSVG from '../../assets/img/profile_icon.svg'
import styles from './About.module.scss'

const About: React.FC = () => {
  return (
    <section className={styles.container}>
      <TitleSection title='О себе' imageURL={profileSVG} />
      <p>Имею опыт командной, коммерческой разработки. Разбираюсь в чужом коде. Стараюсь писать чистый, понятный код для других разработчиков. Готов приносить пользу компании и закрывать бизнес задачи. Последние время работал в продуктовой компании разрабатывающей SaaS продукт, CRM систему.</p>
      <p>
        <span>Последний из пет проектов:</span>
        <a className={styles.link} href='https://github.com/BarB93/pizza-shop' target='_blank'>
          https://github.com/BarB93/pizza-shop
        </a>
      </p>
    </section>
  )
}

export default About
