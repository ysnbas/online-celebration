import React from "react";
import styles from "./Create.module.scss";
import Image from "next/image";
import TextField from "@Components/TextField";

export default function Create() {
  return (
    <div className={styles.container}>
      <div className={styles.decoration}>
        <Image src={"/images/cake.png"} alt="cake" width={500} height={1000} />
      </div>
      <div className={styles.cakeText}>
        <h1>
          Create Your <span>Cake</span>
        </h1>
        <TextField label="Cake Name" />
      </div>
    </div>
  );
}
