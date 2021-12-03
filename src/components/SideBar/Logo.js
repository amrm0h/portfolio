import React from 'react';
import NameSymbol from '../NameSymbol/NameSymbol';
import styles from './SideBar.module.scss';

export default function Logo() {
  return (
    <div className={styles.logo}>
      <NameSymbol />
      <p className={`white ${styles.name}`}>Amr</p>
      <span>Web Developer</span>
    </div>
  )
}
