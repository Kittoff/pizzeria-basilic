import { motion } from "framer-motion";
import { opacity, slideLeft, mountAnim } from "../anim";
import styles from "./style.module.scss";
import Link from "./link";
import { useState } from "react";

const menu = [
  {
    title: "Accueil",
    to: "/",
    description: "Retour au bercail",
    images: ["projects1.jpg", "projects2.jpg"],
  },
  {
    title: "Nous trouver",
    to: "/contact",
    description: "Venez vous régaler",
    images: ["agence1.jpg", "agence2.jpg"],
  },
  {
    title: "Actualités",
    to: "/news",
    description: "To Send a FAX",
    images: ["contact1.jpg", "contact2.jpg"],
  },
];

export default function index({ closeMenu }) {
  return (
    <motion.div
      className={`${styles.menu} bg-bg`}
      variants={opacity}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className={styles.header}>
        <motion.svg
          variants={slideLeft}
          {...mountAnim}
          onClick={() => {
            closeMenu();
          }}
          width="68"
          height="68"
          viewBox="0 0 68 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.5 1.5L67 67" stroke="white" />
          <path d="M66.5 1L0.999997 66.5" stroke="white" />
        </motion.svg>
      </div>

      <div className={styles.body}>
        {menu.map((el, index) => {
          return (
            <Link closeMenu={closeMenu} data={el} index={index} key={index} />
          );
        })}
      </div>

      <motion.div
        variants={opacity}
        {...mountAnim}
        custom={0.5}
        className={styles.footer}
      >
        <a
          href="https://www.facebook.com/people/Basilic-Pizzeria/100057529964645/"
          target="_blank"
        >
          FB
        </a>
      </motion.div>
    </motion.div>
  );
}
