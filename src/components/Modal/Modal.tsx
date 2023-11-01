import React, { ReactNode } from "react";
import styles from "./Modal.module.css";

interface IModalProps {
  active: boolean;
  setActive: Function;
  children: ReactNode;
}

const Modal = ({ active, setActive, children }: IModalProps) => {
  return (
    <div
      className={active ? `${styles.modal} ${styles.active}` : styles.modal}
      onClick={() => {
        setActive(false);
      }}
    >
      <div
        className={
          active
            ? `${styles.modalContent} ${styles.active}`
            : styles.modalContent
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
