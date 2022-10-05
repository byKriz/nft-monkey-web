import React, { useState } from "react";
import { HeaderMobileDisplayMenu } from "../HeaderMobileDisplayMenu/HeaderMobileDisplayMenu";
import styles from "./HeaderMobile.module.scss";
import logoSVG from "../../assets/header/ninja-base-mobile-logo.svg";
import ninjaLogoSVG from "../../assets/header/logo.svg";
import hamburgerMenuOpen from "../../assets/header/hamburger.svg";
import hamburgerMenuClose from "../../assets/header/hamburger-close.svg";

export const HeaderMobile = () => {
  const [menu, setMenu] = useState(false);

  function moveToTopScroll() {
    // Get the current page scroll position
    // const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;

    // if any scroll is attempted, set this to the previous value
    window.scrollY = window.scrollTo(scrollLeft, 0)
    
  }

  function enableScroll() {
    // window.onscroll = function () {};
  }

  const handleMenu = () => {
    setMenu(!menu);
    if (menu) {
      moveToTopScroll();
    } else {
      // enableScroll;
      moveToTopScroll()
    }
  };

  return (
    <header className={menu ? `${styles.headerMobile} ${styles.menuOpen}`: styles.headerMobile}>
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

      {/* menu despegable */}
      <HeaderMobileDisplayMenu menu={menu} />
    </header>
  );
};
