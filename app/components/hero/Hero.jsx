import { inter, poppins, urbanist } from "../../utils/font.jsx";
import React from "react";
import styles from "./style.module.scss";
import Image from "next/image.js";

const Hero = () => {
  return (
    <main className={`${urbanist.className} ${styles.main}`}>
      <div className={styles.hero_text}>
        <h1 className={styles.title}>
          A chaque bouchée, un peu d’<span>Italie!</span>
        </h1>
        <p className={`${poppins.className} ${styles.hero_subtext}`}>
          Nos pizzas vous invitent à une expérience chaleureuse et délicieuse.
          Elles vous enveloppent de saveurs authentiques, vous transportant
          instantanément en Italie.
        </p>
        <Image
          alt="hero section pizza image"
          src="/pizza.png"
          width={258}
          height={31}
        />
      </div>
      <Image
        alt=" icon scroll"
        className={styles.icon_scroll}
        src="/icon-scroll.png"
        width={25}
        height={25}
      />
    </main>
  );
};

export default Hero;
