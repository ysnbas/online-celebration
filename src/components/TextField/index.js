import React from "react";
import styles from "./TextField.module.scss";

export default function TextField({ label, onChange, value, maxLength }) {
  return (
    <div className={styles.container}>
      <label>{label}</label>
      <input
        className={styles.textField}
        type="text"
        onChange={onChange}
        value={value}
        placeholder={`Enter ${label}`}
        maxLength={maxLength}
      />
    </div>
  );
}
