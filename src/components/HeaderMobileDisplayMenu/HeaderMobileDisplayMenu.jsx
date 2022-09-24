import React from "react";
import styles from "./HeaderMobileDisplayMenu.module.scss"

export const HeaderMobileDisplayMenu = ({menu}) => {
  return (
    <div
      className={
        menu
          ? `${styles.headerBodyMobile} ${styles.headerBodyMobileOpen}`
          : `${styles.headerBodyMobile}`
      }
    >
      <a href="/" className={styles.headerMobileMenuIteam}>
        NFD
      </a>
      <a href="/" className={styles.headerMobileMenuIteam}>
        ROADMAP
      </a>
      <a href="/" className={styles.headerMobileMenuIteam}>
        NST
      </a>
      <div className={styles.headerMobileOutlinerItem}>
        <a href="/" className={styles.headerMobileMenuIteam}>
          BUY
        </a>
        <img src="" alt="" />
      </div>
      <div className={styles.headerMobileOutlinerItem}>
        <a href="/" className={styles.headerMobileMenuIteam}>
          TWITTER
        </a>
        <img src="" alt="" />
      </div>
      <div className={styles.headerMobileOutlinerItem}>
        <a href="/" className={styles.headerMobileMenuIteam}>
          DISCORD
        </a>
        <img src="" alt="" />
      </div>
      <div className={styles.headerMobileOutlinerItem}>
        <a href="/" className={styles.headerMobileMenuIteam}>
          MEDIUM
        </a>
        <img src="" alt="" />
      </div>
      <div>
        <a href="/">Contact</a>
        <a href="/">FAQ</a>
      </div>
      <span>@2021 Ninja Squad NFT</span>
    </div>
  );
};
