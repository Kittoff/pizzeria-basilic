import { inter, poppins, urbanist } from "../../utils/font.jsx";
import React from "react";
import styles from "./style.module.scss";
import Image from "next/image.js";
/**
 // ${styles.main}
 * {styles.hero_text}
 {styles.title}
 ${styles.hero_subtext}
 * @returns 
 */
const Hero = () => {
  return (
    <main
      className={`${urbanist.className} min-h-[75vh] flex flex-col items-center`}
    >
      <div className="pt-[154px] flex xs:flex-col items-center">
        <h1 className="text-[38px] font-bold">
          A chaque bouchée, un peu d’
          <span className="text-primary">Italie!</span>
        </h1>
        <p className={`${poppins.className} mt-11 text-[0.75rem]`}>
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
        className="mt-[21px]"
        src="/icon-scroll.png"
        width={25}
        height={25}
      />
    </main>
  );
};

export default Hero;
