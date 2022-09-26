import React, { useState } from "react";
import styles from "./StoryContainer.module.scss";
import ninjaStoryIMG from "@assets/ninjaStory/ninja-story-img.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export const StoryContainer = () => {
  const [hover, setHover] = useState(true);

  const handleOver = () => {
    setHover(false);
  };

  const handleOut = () => {
    setHover(true);
  };

  return (
    <section className={styles.ninjaStoryContainer}>
      <div className={styles.ninjaStoryImg}>
        <img src={ninjaStoryIMG} alt="ninja-story-img" />
      </div>
      <div className={styles.ninjaStoryTextContainer}>
        <h2>Ninja Story</h2>
        <p>
          Ninja Squad is an NFT and crypto trading community, with a focus on
          education, gaming and innovating utilities for NFTs. What started as
          an 8,888 piece NFT collection in November 2021 has since been evolving
          into a larger technology and lifestyle brand harnessing IRL and
          metaverse components.
          <br />
          <br />
          Our mission is to enable financial freedom for our community through
          web3, crypto and NFT education. Through the tools, products and
          content created by our team of 20+ professionals, we’re able to
          empower 4K members with data from the best of the industry so they can
          make more informed decisions as they roam the digital currency trading
          space.
          <br />
          <br />
          Explore the frontiers of web3 with the squad.
        </p>
        <div
          className={
            hover
              ? styles.ninjaStoryButtomContainer
              : `${styles.ninjaStoryButtomContainer} ${styles.ninjaStoryButtomContainerHover}`
          }
          onMouseOver={handleOver}
          onMouseOut={handleOut}
        >
          <Link to="/">
            <p>MEET THE TEAM</p>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};
