import React from "react";


import Info from "../info/Info";

import styles from "./Menu.module.css";



interface IMenuProps {
  className?: string;
}
const Menu = ({ className, }: IMenuProps) => {
 
  return (
    <div className={className} >
      <div className={styles.wrapper}>
        <img
          className={styles.photo}
          src="/assets/photo1671734078.jpeg"
          alt="I"
        />
      </div>
      <div className={styles.info}>
        <h3> Kateryna Tymofieieva</h3>
        <h4> React developer</h4>
        <h4> Santa Rosa Bay Area</h4>
      </div>
      <Info/>
      
    </div>
  );
};

export default Menu;
