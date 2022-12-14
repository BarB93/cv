import React, { useMemo } from 'react'

import getAge from './../../utils/getAge'
import locationSVG from '../../assets/img/location_map_icon.svg'
import infoSVG from '../../assets/img/info_icon.svg'
import styles from './RightTop.module.scss'

const RightTop: React.FC = () => {
  const age:number = useMemo(() => getAge(1993, 4, 7), [])

  return (
    <header className={styles.header}>
      <h1 className={styles.fullName}>Баровский Борис Андреевич</h1>
      <h2 className={styles.grade}>FRONTEND-РАЗРАБОТЧИК</h2>
      <div className={styles.info}>
        <div className={`${styles.location} ${styles.infoItem}`}>
          <img src={locationSVG} alt='location' />
          <span>Москва, м.Кузьминки</span>
        </div>
        <div className={`${styles.age} ${styles.infoItem}`}>
          <img src={infoSVG} alt='info' />
          <span>Возраст: {age} лет</span>
        </div>
      </div>
    </header>
  )
}

export default RightTop
