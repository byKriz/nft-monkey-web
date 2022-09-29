import React from "react";
import { ButtonContainer } from "../../components/ButtonContainer/ButtonContainer";
import { SlideContainerRoadmap } from "../../components/SlideContainerRoadmap/SlideContainerRoadmap";
import styles from "./RoadmapMobile.module.scss";

export const RoadmapMobile = () => {
  return (
    <section className={styles.roadmapMobileContainer}>
      <h2>Roadmap</h2>
      <SlideContainerRoadmap />
      <ButtonContainer text="READ MORE" page="/" />
    </section>
  );
};
