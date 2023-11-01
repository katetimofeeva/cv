import React, { ChangeEvent } from "react";
import styles from "./FormInput.module.css";

interface IFormInputProps {
  label?: string;
  value?: string;
  type?: string;
  name?: string;
  required?: boolean;
  className?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  backgroundColor?: string;
  style?: {};
  placeholder?: string;
}
const FormInput = ({
  label,
  value,
  onChange,
  required = false,
  name,
  type,
  className,
  style,
  placeholder,
  ...props
}: IFormInputProps) => {
  return (
    <div
      className={
        className ? `${styles.group} ${styles.className}` : styles.group
      }
    >
      <input
        className={styles.formInput}
        onChange={onChange}
        value={value}
        name={name}
        type={type}
        style={style}
        placeholder={placeholder}
        required={required}
        {...props}
      />
      {label && <label className={` ${styles.formInputLabel}`}>{label}</label>}
    </div>
  );
};

export default FormInput;
