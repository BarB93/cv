import React from 'react'

import styles from './Stills.module.scss'

const Skills: React.FC = () => {
  return (
    <ul className={styles.list}>
      <li>HTML, CSS, JS</li>
      <li>Git</li>
      <li>React</li>
      <li>Redux/MobX</li>
      <li>Typescript</li>
      <li>Webpack</li>
      <li>Docker</li>
      <li>NodeJS</li>
      <li>PostgreSQL/MongoDB</li>
    </ul>
  )
}

export default Skills
