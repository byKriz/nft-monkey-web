import React from "react";
import { HeroContainer } from "../../containers/HeroContainer/HeroContainer";
import { StoryContainer } from "../../containers/StoryContainer/StoryContainer";
import styles from "./Home.module.scss"

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
        <HeroContainer />
        <StoryContainer />
    </div>
  );
};
