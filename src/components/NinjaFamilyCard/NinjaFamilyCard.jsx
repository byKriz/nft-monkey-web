import React from "react";
import { ExternalButtonContainer } from "../ExternalButtonContainer/ExternalButtonContainer";
import styles from "./NinjaFamilyCard.module.scss";

//Importando swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export const NinjaFamilyCard = ({ img, title, info, link = "/" }) => {
  return (
    <div className={styles.NinjaFamilyCard}>
      <img src={img} alt={img} />
      <h1>{title}</h1>
      <span className={styles.NinjaFamilyInfo}>{info}</span>

      <div className={styles.swiperContainer}>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className={styles.mySwiper}
        >
          <SwiperSlide>
            100 deep-alpha: fastest and most direct access to the team members
            and the other deep alpha holders. Yield 3 $NST daily.
          </SwiperSlide>
        </Swiper>
      </div>
      <ExternalButtonContainer text="JOIN NINJA SQUAD" link={link} />
    </div>
  );
};
