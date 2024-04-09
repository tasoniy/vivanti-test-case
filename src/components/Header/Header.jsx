import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/images/logo.png';

export default function Header() {
  const [isTablet, setIsTablet] = useState(window.innerWidth < 1064);

  useEffect(() => {
    const handleResize = () => setIsTablet(window.innerWidth < 1064);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={`${styles.wrapper} ${styles.header}`}>
      <div className={`${styles.container} ${styles.header__content}`}>
        <div className={`${styles.header__logo}`}>
          <img src={logo} alt="логотип" />
          <span>Современные методики <br /> диагностики</span>
        </div>
        <nav className={`${styles.header__navigation}`}>
          <ul className={`${styles.header__menu} ${styles.menu}`}>
            <li className={`${styles.menu__item}`}><a href="#laboratory"> Лаборатория</a></li>
            <li className={`${styles.menu__item}`}><a href="#gallery">Галерея</a></li>
            <li className={`${styles.menu__item}`}><a href="#submit-request">Оставить заявку</a></li>
          </ul>
        </nav>
        <div className={`${styles.header__contact}`}>
          <a href="tel:+7 123 456 7890">{isTablet? '' :'+7 123 456 7890'}</a>
          <span>Звонок бесплатный</span>
        </div>
      </div>
    </header>
  )
}