import React from "react";
import styles from "./UtilityCardMobile.module.scss";
// import img1 from "@utility/utility-1.png";

export const UtilityCardMobile = ({ utilImg, title, description }) => {
  const altname = (img) => `${img}`.split("/")[4];

  return (
    <div className={styles.UtilityCardMobile}>
      <img src={utilImg} alt={altname(utilImg)} />
      <span className={styles.utilityMobileTitle}>{title}</span>
      <span className={styles.utilityMobileDescription}>{description}</span>
    </div>
  );
};
