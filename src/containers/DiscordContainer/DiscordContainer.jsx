import React from "react";
import { ExternalButtonContainer } from "../../components/ExternalButtonContainer/ExternalButtonContainer";
import styles from "./DiscordContainer.module.scss";
import borderPng from "@assets/discordContainer/join-discord-top-border.png"
import discordImg from "@assets/discordContainer/join-discord.png"

export const DiscordContainer = () => {
  return (
    <section className={styles.DiscordContainer}>
      <div className={styles.DiscordInnerContainer}>
        <div className={styles.DiscordTextContainer}>
          <h2>Become a Master Ninja Trader</h2>
          <span className={styles.DiscordTextDescription}>
            A smart investor understands that knowledge is power. Learn how to
            invest and be financially independent. Become a master ninja trader.
          </span>
          <ExternalButtonContainer
            text="JOIN DISCORD"
            link="https://discord.com/invite/ninjasquad"
            secondColor={true}
          />
        </div>
        <div className={styles.mobileJoinDiscordImage}>
          <img src={borderPng} alt=""  className={styles.boder}/>
          <img src={discordImg} alt="" className={styles.discordImg}/>
        </div>
      </div>
    </section>
  );
};
