import React from "react";
import { ExternalButtonContainer } from "../../components/ExternalButtonContainer/ExternalButtonContainer";
import styles from "./DiscordContainer.module.scss";

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
        <div></div>
      </div>
    </section>
  );
};
