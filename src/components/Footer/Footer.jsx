import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../assets/images/footer-logo.png'
export default function  Footer() {
  return(
    <footer className={`${styles.footer}`}>
      <div  className={`${styles.footer__content} ${styles.container}`}>
        <p className={`${styles.footer__text}`} >
        Все права защищены Российской <br />Ассоциацией Капибар
        </p>
        <img src={logo} alt="логотип" />
      </div>
    </footer>
  )
}