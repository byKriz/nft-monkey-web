import React from "react";
import styles from "./SlideContainerUtility.module.scss";
import "swiper/css";
// import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { UtilityCardMobile } from "../UtilityCardMobile/UtilityCardMobile";

import img1 from "@utility/utility-1.png";
import img2 from "@utility/utility-2.png";
import img3 from "@utility/utility-3.png";
import img4 from "@utility/utility-4.png";
import img5 from "@utility/utility-5.png";
import img6 from "@utility/utility-6.png";

const prueba = [1, 2, 3, 4, 5, 6];

export const SlideContainerUtility = () => {
  return (
    <Swiper
      className={styles.SlideContainerUtility}
      slidesPerView={2}
      spaceBetween={100}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        500: {
          slidesPerView: 2,
          spaceBetween: 80,
        },
        550: {
          spaceBetween: 20,
        },
        600: {
          slidesPerView: 3,
          spaceBetween: 260,
        },
      }}
    >
      <SwiperSlide>
        <UtilityCardMobile
          utilImg={img1}
          title="Access alpha channels"
          description="Make connections and - of course - money, alongside a global network of NFT & crypto traders and explorers. Be part of 24/7 active channels where members share their research & alpha, discuss projects, give and receive feedback. Become smarter and more confident as you navigate the markets."
        />
      </SwiperSlide>
      <SwiperSlide>
        <UtilityCardMobile
          utilImg={img2}
          title="Get curated news analysis from experts"
          description="With our premium Discord channels, such as crypto analysis, curated news, nft updates, and fundamental analysis, you can stay on top of the market while saving time. These channels are ready to equip ninjas with the essential market information."
        />
      </SwiperSlide>
      <SwiperSlide>
        <UtilityCardMobile
          utilImg={img3}
          title="Earn $NST every day"
          description="Every Ninja Squad NFT yields at least 1 $NST daily by staking, which can be used in the ecosystem to amplify your experience. Unlock features that can exclusively be purchased with $NST such as digital tools, new NFT collections, Ninja merch, game and education programs."
        />
      </SwiperSlide>
      <SwiperSlide>
        <UtilityCardMobile
          utilImg={img4}
          title="Level up your trading skills"
          description="Access our custom built trader hub to go from a good trader to a pro trader. Exchange listings, sweep tracker, plot sales, floor alerts, ninja library and more to come."
        />
      </SwiperSlide>
      <SwiperSlide>
        <UtilityCardMobile
          utilImg={img5}
          title="The premium fashion brand for web3 and crypto communities"
          description="Disrupt and innovate with a fresh take on the web3 fashion scene.Shop our premium products at NFD with special offerings and discounts."
        />
      </SwiperSlide>
      <SwiperSlide>
        <UtilityCardMobile
          utilImg={img6}
          title="Benefit from our all-in-one instant data tracking trading tool"
          description="With Ninja tools, you will spend less time trying to figure out what's happening and instead be able to focus on trading. Make swift decisions with all the facts in one place."
        />
      </SwiperSlide>
    </Swiper>
  );
};
