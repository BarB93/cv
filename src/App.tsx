import LeftItem from './components/LeftItem'

import foto from './assets/img/ava.jpg'
import styles from './App.module.scss'
import Contacts from './components/Contacts'
import Languages from './components/Languages'
import Skills from './components/Skills'

function App() {
  return (
    <div className={styles.resume}>
      <div className={styles.left}>
        <div className={styles.image}>
          <img src={foto} alt='foto' />
        </div>
        <LeftItem title='Контакты'>
          <Contacts />
        </LeftItem>
        <LeftItem title='Языки'>
          <Languages />
        </LeftItem>
        <LeftItem title='Навыки'>
          <Skills />
        </LeftItem>
      </div>
      <div className={styles.right}>right</div>
    </div>
  )
}

export default App
