import React from "react";
import styles from "./style.module.scss";
import Image from "next/image.js";
import { inter } from "../font.jsx";

const Title = ({ title }) => {
  return (
    <div className={`${inter.className} ${styles.title_container}`}>
      <Image alt="delimiter up" src="/delimiter.svg" width={107} height={0} />
      <h1 className={styles.title}>{title}</h1>
      <Image alt="delimiter down" src="/delimiter.svg" width={107} height={0} />
    </div>
  );
};

export default Title;
