import React from 'react'

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
        <p className={styles.copyrightText}>&copy; 2024, Choroid</p>
    </div>
  )
}

export default Footer