import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./ButtonContainer.module.scss"

export const ButtonContainer = ({text, page, secondColor=false}) => {
  return (
    <Link className={secondColor ? `${styles.buttomContainer} ${styles.secondColor}` : `${styles.buttomContainer} `} to={page}>
      <span>{text}</span>
      <FaArrowRight />
    </Link>
  );
};
