import React, { useRef, useState, useEffect } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Button from './components/Button/Button';
import RequestSection from './components/RequestSection/RequestSection';
import ResponseSection from './components/ResponseSection/ResponseSection';
import mainCapybara from './assets/images/main-capy.png';
import labCapybara from './assets/images/laboratory.png';
import gallery1 from './assets/images/gallery1.png';
import gallery2 from './assets/images/gallery2.png';
import gallery2Mob from './assets/images/gallery2-mob.png';
import gallery3 from './assets/images/gallery3.png';
import gallery4 from './assets/images/gallery4.png';
import gallery5 from './assets/images/gallery5.png';
import gallery6 from './assets/images/gallery6.png';
import gallery7 from './assets/images/gallery7.png'
import arrow from './assets/images/Arrow.svg';

import styles from './App.module.scss';
import './styles/style.scss';

function App() {
  const [isRequestSend, setIsRequestSend] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const submitRequest = useRef(null);
  const formSubmit = () => {
    setIsRequestSend(true)
  };
  const scrollToSection = () => {
    if (submitRequest.current) {
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
        <section id='gallery' className={`${styles.gallery}`}>
          <div className={`${styles.gallery__content} ${styles.container}`}>
            <h2 className={`${styles.gallery__title}`}>Галерея</h2>
            <div className={`${styles.gallery__gallery}`}>
              <img src={gallery1} className={`${styles.gallery__item} ${styles.gallery__item_big}`} alt='' />
              {isMobile ?
                <img src={gallery2Mob} className={`${styles.gallery__item} ${styles.gallery__item_medium}`} alt='' />
                :
                <img src={gallery2} className={`${styles.gallery__item} ${styles.gallery__item_medium}`} alt='' />
              }
              <div className={`${styles.gallery__wrapper}`}>
                <img src={gallery3} className={`${styles.gallery__item} ${styles.gallery__item_small}`} alt='' />
                <img src={gallery4} className={`${styles.gallery__item}  ${styles.gallery__item_small}`} alt='' />
              </div>
              <div className={`${styles.gallery__wrapper}`}>
                <img src={gallery5} className={`${styles.gallery__item}  ${styles.gallery__item_small}`} alt='' />
                <img src={gallery6} className={`${styles.gallery__item}  ${styles.gallery__item_small}`} alt='' />
              </div>
              <img src={gallery7} className={`${styles.gallery__item} ${styles.gallery__item_medium}`} alt='' />
            </div>
          </div>
        </section>
        {isRequestSend ?
          <ResponseSection /> :
          <RequestSection formSubmit={formSubmit} submitRequest={submitRequest} />
        }
      </main>
      <Footer />
    </>
  )
}

export default App;
