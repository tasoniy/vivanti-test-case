import React from 'react';
import Form from '../Form/Form';
import styles from './RequestSection.module.scss';

export default function RequestSection({ submitRequest, formSubmit }) {
  return (
    <section id='submit-request' ref={submitRequest} className={`${styles.request}`}>
      <div className={`${styles.request__content} ${styles.container}`}>
        <h2 className={`${styles.request__title}`}>
          Заявка на&nbsp;диагностику
        </h2>
        <p className={`${styles.request__text}`}>
          Доверьте свои медицинские исследования надежным капибарам-лаборантам и получите <br />
          качественные результаты в кратчайшие сроки!
        </p>
        <Form formSubmit={formSubmit}/>
      </div>
    </section>
  )
}