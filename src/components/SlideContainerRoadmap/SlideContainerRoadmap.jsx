import React from "react";
import styles from "./SlideContainerRoadmap.module.scss";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { RoadmapMobileCard } from "../RoadmapMobileCard/RoadmapMobileCard";
import road1IMG from "@road/roadmap-1.png";
import road2IMG from "@road/roadmap-2.png";

export const SlideContainerRoadmap = () => {
  return (
    <Swiper
      className={styles.slideContainer}
      slidesPerView={2}
      spaceBetween={80}
      centeredSlides={true}
    >
      <SwiperSlide>
        <RoadmapMobileCard
          index="01"
          title="Sold Out!"
          year="2021"
          img={road1IMG}
          desciption="Our genesis 8,888 PFP collection launched and sold out within minutes."
        />
      </SwiperSlide>
      <SwiperSlide>
        <RoadmapMobileCard
          index="02"
          title="Token Launch"
          year="2021 [Q1]"
          img={road2IMG}
          desciption="Our utility token $NST is launched and every ninja NFT begins yielding $NST daily by staking."
        />
      </SwiperSlide>
    </Swiper>
  );
};
