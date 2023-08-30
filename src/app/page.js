'use client'

import Image from 'next/image'
import styles from './page.module.css'
import GetTitle from './components/GetTitle'
import GetMenu from './components/GetMenu'

export default function Home() {
  return (
    <>
    <main className={styles.main}>
      <div className={styles.description}>
        <GetTitle />
        <GetMenu /> 
      </div>
    </main>
    </>
  )
}
