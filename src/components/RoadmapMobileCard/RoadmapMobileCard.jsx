import React from "react";
import styles from "./RoadmapMobileCard.module.scss";

export const RoadmapMobileCard = ({ img }) => {
  const altname = (img) => `${img}`.split("/")[4];

  return (
    <div className={styles.RoadmapMobileCard}>
      <div className={styles.roadmapTopContainer}>
        <span className={styles.roadmapIndex}>01</span>
        <div className={styles.roadmapTitleYearContainer}>
          <span className={styles.roadmapTitle}>Sold out!</span>
          <span className={styles.roadmapYear}>2021</span>
        </div>
      </div>

      <div className={styles.roadmapBottomContainer}>
        <img src={img} alt={altname(img)} />
        <span className={styles.roadmapDescription}>
          Our genesis 8,888 PFP collection launched and sold out within minutes.
        </span>
      </div>
    </div>
  );
};
