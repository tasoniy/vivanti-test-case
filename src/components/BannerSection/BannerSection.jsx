        
        import React from 'react';
        import mainCapybara from '../../assets/images/main-capy.png'
        import styles from './BannerSection.module.scss';
        
        export default function BannerSection() {
          return (
            <section className={`${styles.banner}`}>
            <div className={`${styles.banner__content} ${styles.container}`}>
              <img src={mainCapybara} className={`${styles.banner__img}`} alt='кабибара-ученый' />
              <h1 className={`${styles.banner__title}`}>
                <span className={`${styles.banner__title_result}`}>точные результаты</span> <br />
                <span className={`${styles.banner__title_term}`}>точно в срок</span>
              </h1>
            </div>
          </section>
          )
        }
