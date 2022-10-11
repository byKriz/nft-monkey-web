import React from "react";
import { PruebaEspacio } from "../../components/PruebaEspacio/PruebaEspacio";
import { DiscordContainer } from "../../containers/DiscordContainer/DiscordContainer";
import { HeroContainer } from "../../containers/HeroContainer/HeroContainer";
import { NinjaFamilyContainer } from "../../containers/NinjaFamilyContainer/NinjaFamilyContainer";
import { NstContainer } from "../../containers/NstContainer/NstContainer";
import { RoadmapMobile } from "../../containers/RoadmapMobile/RoadmapMobile";
import { StoryContainer } from "../../containers/StoryContainer/StoryContainer";
import { UtilitiesContainer } from "../../containers/UtilitiesContainer/UtilitiesContainer";
import styles from "./Home.module.scss"

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
        <HeroContainer />
        <StoryContainer />
        <NstContainer />
        <RoadmapMobile />
        <UtilitiesContainer />
        <DiscordContainer />
        <NinjaFamilyContainer />
        <PruebaEspacio />
    </div>
  );
};
