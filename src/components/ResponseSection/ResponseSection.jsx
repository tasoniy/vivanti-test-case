import React from 'react';
import styles from './ResponseSection.module.scss';
import check from '../../assets/images/check-purple.svg'
export default function ResponseSection() {
  return (
    <section className={styles.response}>
      <div className={`${styles.response__content} ${styles.container}`}>
        <img src={check} alt="" />
        <p className={`${styles.response__text}`}>
          Спасибо за предоставленную информацию, <br />
          мы свяжемся с вами в ближайшее время.
        </p>
      </div>
    </section>
  )
}