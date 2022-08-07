import LeftItem from './components/LeftItem'

import foto from './assets/img/ava.jpg'
import styles from './App.module.scss'
import Contacts from './components/Contacts'
import Languages from './components/Languages'
import Skills from './components/Skills'
import RightTop from './components/RightTop'
import ExperienceList from './components/ExperienceList'
import About from './components/About'

function App() {
  return (
    <div className={styles.resume}>
      <aside className={styles.left}>
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
      </aside>
      <main className={styles.right}>
        <RightTop />
        <div className={styles.rightItem}>
          <ExperienceList />
        </div>
        <div className={styles.rightItem}>
          <About />
        </div>
      </main>
    </div>
  )
}

export default App
