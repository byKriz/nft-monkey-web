import React from "react";
import styles from "./SlideContainerRoadmap.module.scss";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { RoadmapMobileCard } from "../RoadmapMobileCard/RoadmapMobileCard";
import road1IMG from "@road/roadmap-1.png";

export const SlideContainerRoadmap = () => {
  return (
    <Swiper
      className={styles.slideContainer}
      slidesPerView={2}
      spaceBetween={80}
      centeredSlides={true}
    >
      <SwiperSlide>
        <RoadmapMobileCard img={road1IMG} />
      </SwiperSlide>
      <SwiperSlide>
        <RoadmapMobileCard />
      </SwiperSlide>
    </Swiper>
  );
};
