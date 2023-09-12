import React from "react";
import styles from "./Button.module.css";

interface IProps {
  children: string;
  buttonType?: string;
  type?: "button" | "submit" | "reset";
  onClick?:(e:React.MouseEvent<HTMLButtonElement>)=> void;
}
const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};
const Button = ({ children, buttonType, type= 'button', onClick, ...props }: IProps) => {
  return (
    <button
      className={`${styles["button-container"]} ${
        styles[
          BUTTON_TYPE_CLASSES[buttonType as keyof typeof BUTTON_TYPE_CLASSES]
        ]
      }`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
