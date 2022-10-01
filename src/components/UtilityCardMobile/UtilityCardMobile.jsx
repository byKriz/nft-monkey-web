import React from "react";
import styles from "./UtilityCardMobile.module.scss";
import img1 from "@utility/utility-1.png";

export const UtilityCardMobile = () => {
  const altname = (img) => `${img}`.split("/")[4];

  return (
    <div className={styles.UtilityCardMobile}>
      <img src={img1} alt={altname(img1)} />
      <span className={styles.utilityMobileTitle}>Access alpha channels</span>
      <span className={styles.utilityMobileDescription}>
        Make connections and - of course - money, alongside a global network of
        NFT & crypto traders and explorers. Be part of 24/7 active channels
        where members share their research & alpha, discuss projects, give and
        receive feedback. Become smarter and more confident as you navigate the
        markets.
      </span>
    </div>
  );
};
