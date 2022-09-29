import React from "react";
import styles from "./SlideContainerRoadmap.module.scss";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { RoadmapMobileCard } from "../RoadmapMobileCard/RoadmapMobileCard";
import road1IMG from "@road/roadmap-1.png";
import road2IMG from "@road/roadmap-2.png";
import road3IMG from "@road/roadmap-3.png";
import road4IMG from "@road/roadmap-4.png";
import road5IMG from "@road/roadmap-5.png";
import road6IMG from "@road/roadmap-6.png";
import road7IMG from "@road/roadmap-7.png";
import road8IMG from "@road/roadmap-8.png";

export const SlideContainerRoadmap = () => {
  return (
    <Swiper
      className={styles.slideContainer}
      slidesPerView={2}
      spaceBetween={80}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
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

      <SwiperSlide>
        <RoadmapMobileCard
          index="03"
          title="Merch Brand"
          year="2022 [Q2]"
          img={road3IMG}
          desciption="NFD is launched as a premium fashion brand for the web3 & crypto space. Limited edition drops incoming."
        />
      </SwiperSlide>

      <SwiperSlide>
        <RoadmapMobileCard
          index="04"
          title="Education"
          year="2022 [Q3]"
          img={road4IMG}
          desciption="An educational series that will take you from beginner to pro level in NFTs and crypto trading. From our very own co-founders, masters in their craft."
        />
      </SwiperSlide>

      <SwiperSlide>
        <RoadmapMobileCard
          index="05"
          title="IRL Utilities"
          year="2022"
          img={road5IMG}
          desciption="Offers, workshops and events organized with our partners."
        />
      </SwiperSlide>

      <SwiperSlide>
        <RoadmapMobileCard
          index="06"
          title="Ninja Tools"
          year="2023"
          img={road6IMG}
          desciption="The most comprehensive & accessible trading tools dashboard for the web3 space."
        />
      </SwiperSlide>

      <SwiperSlide>
        <RoadmapMobileCard
          index="07"
          title="Game"
          year="TBA"
          img={road7IMG}
          desciption="A simple and fun game where players are rewarded for learning and engaging."
        />
      </SwiperSlide>

      <SwiperSlide>
        <RoadmapMobileCard
          index="08"
          title="All Inclusive Resort"
          year="TBA"
          img={road8IMG}
          desciption="Our goal is to build a Ninja Squad resort which will be used by our community and other celebrated web3 communities."
        />
      </SwiperSlide>
    </Swiper>
  );
};
