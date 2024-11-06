import React from "react";
import styles from "./DashboardLayout.module.scss";

export default function DashboardLayout({ children }) {
  return <main className={styles.main}>{children}</main>;
}
