import React from "react";
import { NinjaFamilyCard } from "../../components/NinjaFamilyCard/NinjaFamilyCard";
import styles from "./NinjaFamilyContainer.module.scss";
import familySquad from "@assets/ninjaFamilyCard/ninja-family-squad.png";

export const NinjaFamilyContainer = () => {
  return (
    <section className={styles.NinjaFamilyContainer}>
      <span className={styles.NinjaFamilyContainerTitle}>STILL HERE?</span>
      <h1 className={styles.NinjaFamilyContainerSubtitle}>The Ninja Squad</h1>
      <div className={styles.NinjaFamilyInnerContainer}>
        <NinjaFamilyCard
          img={familySquad}
          title="Ninja Squad NFT"
          info="Our first collection of 8,888 ninja NFTs minted at 0.088 ETH price per NFT and were sold out within 8 minutes. Ninja Squad collection consists of NFTs with special traits and each group of traits carry different features and accesses."
          
        />
      </div>
    </section>
  );
};
