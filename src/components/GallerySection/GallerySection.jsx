import React, { useState, useEffect } from 'react';

import gallery1 from '../../assets/images/gallery1.png';
import gallery2 from '../../assets/images/gallery2.png';
import gallery2Mob from '../../assets/images/gallery2-mob.png';
import gallery3 from '../../assets/images/gallery3.png';
import gallery4 from '../../assets/images/gallery4.png';
import gallery5 from '../../assets/images/gallery5.png';
import gallery6 from '../../assets/images/gallery6.png';
import gallery7 from '../../assets/images/gallery7.png'

import styles from './GallerySection.module.scss';

export default function GallerySection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
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
  )
}