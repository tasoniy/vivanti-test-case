import React, { useRef } from 'react';

import Header from './components/Header/Header';
import Button from './components/Button/Button';
import styles from './App.module.scss';
import mainCapybara from './assets/images/main-capy.png';
import labCapybara from './assets/images/laboratory.png';
import arrow from './assets/images/Arrow.svg'
import './styles/style.scss';
function App() {
  const submitRequest = useRef(null);
  const scrollToSection = () => {
    if (submitRequest.current) {
      console.log('scroll')
      window.scrollTo({
        behavior: 'smooth',
        top: submitRequest.current.offsetTop
      });
    }
  };
  return (
    <>
      <Header />
      <main className={`${styles.main} ${styles.wrapper}`}>
        <section className={`${styles.banner}`}>
          <div className={`${styles.banner__content} ${styles.container}`}>
            <img src={mainCapybara} className={`${styles.banner__img}`} alt='кабибара-ученый' />
            <h1 className={`${styles.banner__title}`}>
              <span className={`${styles.banner__title_result}`}>точные результаты</span> <br />
              <span className={`${styles.banner__title_term}`}>точно в срок</span>
            </h1>
          </div>
        </section>
        <section className={`${styles.welcome}`}>
          <p className={`${styles.welcome__text} ${styles.container}`}>
            Добро пожаловать в медицинскую лабораторию KapibaraLab, где работают исключительно капибары&nbsp;&mdash; ваш надежный партнер в обеспечении качественной и точной диагностики!
          </p>
        </section>
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
        <section ref={submitRequest} id='submit-request'>
        </section>
      </main>
    </>
  )
}

export default App;
