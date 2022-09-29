import React from "react";
import styles from "./RoadmapMobileCard.module.scss";

export const RoadmapMobileCard = ({ index, title, year, img, desciption }) => {
  const altname = (img) => `${img}`.split("/")[4];

  return (
    <div className={styles.RoadmapMobileCard}>
      <div className={styles.roadmapTopContainer}>
        <span className={styles.roadmapIndex}>{index}</span>
        <div className={styles.roadmapTitleYearContainer}>
          <span className={styles.roadmapTitle}>{title}</span>
          <span className={styles.roadmapYear}>{year}</span>
        </div>
      </div>

      <div className={styles.roadmapBottomContainer}>
        <img src={img} alt={altname(img)} />
        <span className={styles.roadmapDescription}>{desciption}</span>
      </div>
    </div>
  );
};
