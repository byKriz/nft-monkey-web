import React from "react";
import styles from "./UtilitiesContainer.module.scss";
import { ButtonContainer } from "../../components/ButtonContainer/ButtonContainer";
import borderPng from "@assets/utilityContainer/utility-border-up.png";
import utilityTitle from "@assets/utilityContainer/utility.png";
import { UtilityCardMobile } from "../../components/UtilityCardMobile/UtilityCardMobile";

export const UtilitiesContainer = () => {
  return (
    <section className={styles.UtilitiesContainer}>
      <img
        src={borderPng}
        alt="border-utility"
        className={styles.boderUtility}
      />
      <div className={styles.utilityBody}>
        <h2>A ninja has many skills:</h2>
        <img
          src={utilityTitle}
          alt="utility-title"
          className={styles.utilityTitle}
        />
        <p className={styles.containerDescription}>
          Ninja Squad NFT gives you access to the dojo and unlocks members-only
          benefits. Join the best NFT & crypto traders to play, earn, learn and
          trade together.
        </p>
        <UtilityCardMobile />
        <ButtonContainer text="JOIN NOW" page="/" />
      </div>
    </section>
  );
};
