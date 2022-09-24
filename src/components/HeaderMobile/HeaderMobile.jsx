import React, { useState } from "react";
import styles from "./HeaderMobile.module.scss";
import logoSVG from "../../assets/header/ninja-base-mobile-logo.svg";
import ninjaLogoSVG from "../../assets/header/logo.svg";
import hamburgerMenuOpen from "../../assets/header/hamburger.svg";
import hamburgerMenuClose from "../../assets/header/hamburger-close.svg";

export const HeaderMobile = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className={styles.headerMobile}>
      <div className={styles.headerTopContainer}>
        <a href="/">
          <img src={logoSVG} alt="logo" className={styles.logo} />
        </a>
        <a href="/">
          <img
            src={ninjaLogoSVG}
            alt="ninja logo"
            className={styles.ninjaLogo}
          />
        </a>

        {!menu ? (
          <img
            src={hamburgerMenuOpen}
            alt="hamburger-menu"
            className={styles.hamMenu}
            onClick={handleMenu}
          />
        ) : (
          <img
            src={hamburgerMenuClose}
            alt="hamburger-menu-close"
            className={styles.hamMenu}
            onClick={handleMenu}
          />
        )}
      </div>
      <div></div>
    </header>
  );
};
