import React from "react";
import styles from "./NstContainer.module.scss";
import { FaArrowRight } from "react-icons/fa";
import nstLogo from "@assets/nstContainer/nst-logo.svg";
import nstBanner from "@assets/nstContainer/nst-banner.png";
import nstMiniGraph from "@assets/nstContainer/nst-mini-graph.png";
import { Link } from "react-router-dom";

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
            <img src={nstBanner} alt="nst banner" />
            <div className={styles.nstButtomContainer}>
              <Link to="/" className={styles.buyButtom}>
                <span>BUY $NST / SUSHI-1INCH</span>
              </Link>
              <img src={nstMiniGraph} alt="nst graph" />
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
              <br />
              !poof just dropped that bomb on you.
            </span>
            <div className={styles.buttomContainer}>
              <span>EXPLORE</span>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
