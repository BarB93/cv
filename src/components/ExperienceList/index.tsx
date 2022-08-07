import React from 'react'

import TitleSection from './../TitleSection/TitleSection'
import ExperienceItem from '../ExperienceItem'

import workSVG from '../../assets/img/work_icon.svg'
import styles from './ExperienceList.module.scss'

const ExperienceList: React.FC = () => {
  return (
    <section>
      <TitleSection title='Опыт работы' imageURL={workSVG} />
      <ExperienceItem
        company='amoCRM'
        grade='frontend-разработчик'
        start='12.2021'
        finish='05.2022'
        responsibilities={['Доработка существующего функционала', 'Написание нового функционала', 'Взаимодействие с командой', 'Адаптивная верстка, pixel perfect', 'Проверка на кроссбраузерность', 'Рефакторинг чужого кода', 'Тестирование']}
      />
      <ExperienceItem company='фриланс' grade='frontend-разработчик' start='09.2018' finish='12.2021' responsibilities={['Разработка frontend-проектов с нуля', 'Проектирование пользовательских интерфейсов', 'Кроссбраузерная и адаптивная верстка', 'Написание бизнес логики']} />
    </section>
  )
}

export default ExperienceList
