import React from "react";
import styles from "./NstContainer.module.scss";
import { FaArrowRight } from "react-icons/fa";
import nstLogo from "@assets/nstContainer/nst-logo.svg"

export const NstContainer = () => {
  return (
    <section className={styles.nstContainer}>
      <div className={styles.nstInnerContainer}>
        <div className={styles.nstMainContainer}>
          <h2>A token for the dojo:</h2>
          <img src={nstLogo} alt="nst logo" />
          <p>
            $NST is the utility token of the Ninja ecosystem and is designed to
            level up your experience being a part of the squad. Explore new
            frontiers of education, gaming and commerce with $NST.
          </p>
          <div className={styles.buttomContainer}>
            <span>EXPLORE</span>
            <FaArrowRight />
          </div>
        </div>

        <div className={styles.nstBody}>
          <div className={styles.nstBanner}>
            <img src="" alt="" />
            <div className={styles.nstButtomContainer}>
              <div className={styles.buyButtom}>
                <span>BUY $NST / SUSHI-1INCH</span>
              </div>
              <img src="" alt="" />
            </div>
          </div>
          <div className={styles.ninjaOkContainer}>
            <span className={styles.ninjaOkFirstText}>
              {"Gas or "}
              <span style={{ textDecoration: "underline" }}>no gas</span>
            </span>
            <span className={styles.ninjaOkSecondText}>
              We built an off-chain mechanism so that you can use your tokens in
              return for utility,
              <span>without having to pay for gas!</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
