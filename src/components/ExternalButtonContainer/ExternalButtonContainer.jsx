import React from "react";
import { FaArrowRight } from "react-icons/fa";
import styles from "./ExternalButtonContainer.module.scss";

export const ExternalButtonContainer = ({
  text,
  link,
  secondColor = false,
}) => {
  return (
    <a
      href={link}
      className={
        secondColor
          ? `${styles.buttomContainer} ${styles.secondColor}`
          : `${styles.buttomContainer} `
      }
    >
      <span>{text}</span>
      <FaArrowRight />
    </a>
  );
};
