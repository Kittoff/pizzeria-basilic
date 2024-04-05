import React from "react";
import styles from "./style.module.scss";
import { inter } from "@/src/utils/font.jsx";

const Hours = () => {
  return (
    <div className={styles.hours_container}>
      <h2 className={inter.className}>Horraires</h2>
      <div className={styles.time}>
        <div className={styles.days}>
          <div className={styles.week}>Lundi au Vendredi</div>
          <div className={styles.time}>
            <div>11h45 - 14h</div>
            <div>18h30 - 21h30</div>
          </div>
        </div>
      </div>
      <div className={styles.close}>Fermé samedi et dimanche</div>
    </div>
  );
};

export default Hours;
