import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import styles from "./HeroContainer.module.scss";
import heroBannerMobile from "@assets/heroContainer/mobile-hero-banner.png";
import buyNowNinja from "@assets/heroContainer/buy-now-ninja-img.png";

export const HeroContainer = () => {
  const [overBox, setOverBox] = useState(true);

  const handleBoxOver = () => {
    setOverBox(false);
  };

  const handleBoxOut = () => {
    setOverBox(true);
  };

  return (
    <section className={styles.heroContainer}>
      <h1 className={styles.homeText}>
        Welcome to the dojo for unique metaverse
        <br />
        and real-life experiences
      </h1>
      <div className={styles.homeHeroImg}>
        {/* nota tengo que buscar  la imagen para el tamaño desktop */}
        <img src={heroBannerMobile} alt="hero" />
      </div>

      <div
        className={
          overBox
            ? styles.buyNowContainer
            : `${styles.buyNowContainer} ${styles.buyNowContainerHover}`
        }
        onMouseOver={handleBoxOver}
        onMouseOut={handleBoxOut}
      >
        <div className={styles.homeHeroImgTextContainer}>
          <div className={styles.buyNowImgContainer}>
            <img src={buyNowNinja} alt="buy now ninja" />
          </div>
          <div
            className={
              overBox
                ? styles.buyNowTextContainer
                : `${styles.buyNowTextContainer} ${styles.buyNowTextContainerHover}`
            }
          >
            <label>Ninja Squad NFT</label>
            <span>Buy a ninja!</span>
          </div>
        </div>
        <div
          className={
            overBox
              ? styles.buttonMoreContainer
              : `${styles.buttonMoreContainer} ${styles.buttonMoreContainerHover}`
          }
        >
          <span>MORE</span>
          <FaArrowRight className={overBox ? styles.arrowRigh : `${styles.arrowRigh} ${styles.arrowRighHover}`} />
        </div>
      </div>
    </section>
  );
};
