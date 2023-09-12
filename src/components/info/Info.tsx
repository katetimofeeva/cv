import React from "react";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import styles from "./Info.module.css";

const menu = [
  { name: "home", id: nanoid(), path: "" },
  { name: "about", id: nanoid(), path: "about" },
  { name: "education", id: nanoid(), path: "education" },
  { name: "experience", id: nanoid(), path: "experience" },
  { name: "skills", id: nanoid(), path: "skills" },
  { name: "contact", id: nanoid(), path: "contact" },
  { name: "create own resume", id: nanoid(), path: "resume" },
];

const Info = () => {
  const [isActiveLink, setIsActiveLink] = React.useState("");

  const handelClick = (name: string) => {
    setIsActiveLink(name);
  };
  return (
    <div className={styles.df}>
      {menu.map((el) => {
        return (
          <Link
            key={el.id}
            to={el.path}
            className={`${styles.link} ${
              isActiveLink === el.name ? styles.active : ""
            }`}
            onClick={() => handelClick(el.name)}
          >
            {el.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Info;
