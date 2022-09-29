import React from 'react'
import styles from "./SlideContainer.module.scss"
import { Swiper } from "swiper/react";
import "swiper/css";

export const SlideContainer = ({children}) => {
  return (
    <Swiper className={styles.slideContainer}>
        {children}
    </Swiper>
  )
}
