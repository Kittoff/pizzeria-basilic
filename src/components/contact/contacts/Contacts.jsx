import React from "react";
import styles from "./style.module.scss";
import Image from "next/image.js";
import { inter } from "@/src/utils/font.jsx";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <h2 className={inter.className}>Contacts</h2>
      <div className={`${styles.contacts_wrapper} ${poppins.className}`}>
        <div className={`${styles.phone} ${styles.infos_wrapper}`}>
          <Image
            className={styles.icon}
            alt="phone icon"
            src="/phone.png"
            width={15}
            height={15}
          />{" "}
          05 57 54 57 17
        </div>
        <div className={`${styles.mail} ${styles.infos_wrapper}`}>
          <Image
            className={styles.icon}
            alt="arobase icon"
            src="/mail.png"
            width={15}
            height={15}
          />
          <a href="mailto:basilic.pizza@gmail.com">basilic.pizza@gmail.com</a>
        </div>
        <div className={`${styles.address} ${styles.infos_wrapper}`}>
          <Image
            className={styles.icon}
            alt="pin location icon"
            src="/pin.png"
            width={20}
            height={20}
          />
          29 AVENUE DU GENERAL DE GAULLE 33550 LANGOIRAN
        </div>
      </div>
    </div>
  );
};

export default Contacts;
