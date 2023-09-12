import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

import Menu from "../components/menu/Menu";
import useResponsive from "../hook/useMediaQuery";

import styles from "./LayOut.module.css";

const LayOut = () => {
  const [isMobile ] = useResponsive();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  //  const [windowHeight, setWindowHeight] = React.useState(window.innerHeight);
  // console.log(windowHeight,' 777')
  //   // Обработчик изменения высоты окна
  //   const handleWindowResize = () => {
  //     setWindowHeight(window.innerHeight);
  //   };

  //   // Подписка на события изменения размера окна при монтировании компонента
  //   React.useEffect(() => {
  //     window.addEventListener("resize", handleWindowResize);
  //     return () => {
  //       // Отписка от событий при размонтировании компонента
  //       window.removeEventListener("resize", handleWindowResize);
  //     };
  //   }, []);

  return (
    <div className={styles.wrapper}>
      <Menu
        className={isMobile ? styles.mobileScreenLeftPanel : styles.leftPanel}
      />
      {isMobile && (
        <div>
          <RxHamburgerMenu
            onClick={toggleMenu}
            className={isMenuVisible? styles.hamburgerIconDark: styles.hamburgerIcon}
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
