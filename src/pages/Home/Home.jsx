import React from "react";
import { HeroContainer } from "../../components/HeroContainer/HeroContainer";
import styles from "./Home.module.scss"

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
        <HeroContainer />
    </div>
  );
};
