import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./ButtonContainer.module.scss"

export const ButtonContainer = ({text, page}) => {
  return (
    <Link className={styles.buttomContainer} to={page}>
      <span>{text}</span>
      <FaArrowRight />
    </Link>
  );
};
