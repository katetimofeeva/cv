import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

import Menu from "../components/menu/Menu";
import useResponsive from "../hook/useMediaQuery";

import styles from "./LayOut.module.css";

const LayOut = () => {
  const [isMobile] = useResponsive();
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className={styles.wrapper}>
      <Menu
        className={isMobile ? styles.mobileScreenLeftPanel : styles.leftPanel}
      />
      {isMobile && (
        <div>
          <RxHamburgerMenu
            onClick={toggleMenu}
            className={
              isMenuVisible ? styles.hamburgerIconDark : styles.hamburgerIcon
            }
          />
          {isMenuVisible && (
            <Menu
              className={
                isMobile
                  ? isMenuVisible
                    ? styles.leftPanelVisible
                    : styles.mobileScreenLeftPanel
                  : styles.leftPanel
              }
            />
          )}
        </div>
      )}
      <main className={styles.rightPanel}>
        <Outlet />
      </main>
    </div>
  );
};

export default LayOut;
