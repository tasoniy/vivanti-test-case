import React, { useRef, useState } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BannerSection from './components/BannerSection/BannerSection';
import GallerySection from './components/GallerySection/GallerySection';
import LaboratorySection from './components/LaboratorySection/LaboratorySection';
import RequestSection from './components/RequestSection/RequestSection';
import ResponseSection from './components/ResponseSection/ResponseSection';

import styles from './App.module.scss';
import './styles/style.scss';

function App() {
  const [isRequestSend, setIsRequestSend] = useState(false);
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
        <BannerSection />
        <section className={`${styles.welcome}`}>
          <p className={`${styles.welcome__text} ${styles.container}`}>
            Добро пожаловать в медицинскую лабораторию KapibaraLab, 
            где работают исключительно капибары&nbsp;&mdash; ваш надежный 
            партнер в обеспечении качественной и точной диагностики!
          </p>
        </section>
        <LaboratorySection scrollToSection={scrollToSection}/>
        <GallerySection />
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
