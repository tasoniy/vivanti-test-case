import React from 'react';

import labCapybara from '../../assets/images/laboratory.png';
import arrow from '../../assets/images/Arrow.svg';

import Button from '../Button/Button';
import styles from './LaboratorySection.module.scss';

export default function LaboratorySection({ scrollToSection }) {
  return (
    <section id='laboratory' className={`${styles.laboratory}`}>
      <div className={`${styles.laboratory__content} ${styles.container}`}>
        <h2 className={`${styles.laboratory__title}`}>Лаборатория</h2>
        <img className={`${styles.laboratory__img}`} src={labCapybara} alt='кабибара-ученый' />
        <p className={`${styles.laboratory__text}`}>
          Наша лаборатория предлагает широкий спектр медицинских
          исследований, проводимых опытными капибарами-лаборантами.
          Мы специализируемся на анализе биоматериалов, микробиологических
          исследованиях, генетической диагностике и многом другом.
        </p>
        <p className={`${styles.laboratory__text}`}>
          Мы используем современное оборудование и методики и гарантируем
          точность и надежность результатов.
        </p>
        <Button
          onClick={scrollToSection}
          text={'Оставить заявку'}
          type={'button'}
          className={styles.laboratory__button}
        >
          <img src={arrow} alt='вперед' />
        </Button>
      </div>
    </section>
  )
}