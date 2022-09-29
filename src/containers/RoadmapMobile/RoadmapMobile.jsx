import React from "react";
import { ButtonContainer } from "../../components/ButtonContainer/ButtonContainer";
import { SlideContainer } from "../../components/SlideContainer/SlideContainer";
import styles from "./RoadmapMobile.module.scss";

export const RoadmapMobile = () => {
  return (
    <section>
      <h2>Roadmap</h2>
      <SlideContainer />
      <ButtonContainer text="READ MORE" page="/" />
    </section>
  );
};
