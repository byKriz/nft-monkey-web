import React from "react";
import styles from "./SlideContainerRoadmap.module.scss";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { RoadmapMobileCard } from "../RoadmapMobileCard/RoadmapMobileCard";

export const SlideContainerRoadmap = ({ children }) => {
  return (
    <Swiper className={styles.slideContainer}>
      <SwiperSlide>
        <RoadmapMobileCard />
      </SwiperSlide>
      <SwiperSlide>
        <RoadmapMobileCard />
      </SwiperSlide>
    </Swiper>
  );
};
