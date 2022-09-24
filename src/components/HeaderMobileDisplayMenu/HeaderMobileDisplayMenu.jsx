import React from "react";
import styles from "./HeaderMobileDisplayMenu.module.scss"
import twitterLogo from "@assets/header/twitter.svg"
import openseaLogo from "@assets/header/opensea.svg"
import discordLogo from "@assets/header/discord.svg"
import mediumLogo from "@assets/header/medium.svg"


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
        <a href="/" >
          BUY
        </a>
        <img src={openseaLogo} alt="opensea" className={styles.headerMobileSocialIcon}/>
      </div>
      <div className={styles.headerMobileOutlinerItem}>
        <a href="/" >
          TWITTER
        </a>
        <img src={twitterLogo} alt="Twitter" className={styles.headerMobileSocialIcon}/>
      </div>
      <div className={styles.headerMobileOutlinerItem}>
        <a href="/" >
          DISCORD
        </a>
        <img src={discordLogo} alt="" className={styles.headerMobileSocialIcon}/>
      </div>
      <div className={styles.headerMobileOutlinerItem}>
        <a href="/" >
          MEDIUM
        </a>
        <img src={mediumLogo} alt="" className={styles.headerMobileSocialIcon}/>
      </div>
      <div className={styles.headerMobileFooter}>
        <a href="/">Contact</a>
        <a href="/">FAQ</a>
      </div>
      <span className={styles.headerMobileSignature}>@2021 Ninja Squad NFT</span>
    </div>
  );
};
