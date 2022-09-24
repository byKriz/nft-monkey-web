import React, { useState } from "react";
import styles from "./HeaderMobile.module.scss";
import logoSVG from "../../assets/header/ninja-base-mobile-logo.svg";
import ninjaLogoSVG from "../../assets/header/logo.svg";
import hamburgerMenu from "../../assets/header/hamburger.svg";

export const HeaderMobile = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerTopContainer}>
        <a href="/">
            <img src={logoSVG} alt="logo" className={styles.logo} />
        </a>
        <a href="/">
            <img src={ninjaLogoSVG} alt="ninja logo" className={styles.ninjaLogo}/>
        </a>
        <img src={hamburgerMenu} alt="hamburger-menu" className={styles.hamMenu} />
      </div>
      <div></div>
    </header>
  );
};
