import Image from "next/image.js";
import Link from "next/link.js";
import React from "react";
import styles from "./style.module.scss";
import Burger from "./burger/Burger.jsx";

const Navbar = () => {
  return (
    <nav className={styles.nav_wrapper}>
      <div className="logo">
        <Image
          src="/logo.png"
          alt="pizza basilic logo"
          width={50}
          height={50}
        />
        {/* 186 desktop */}
      </div>

      {/* DESKTOP */}
      {/* <div className={styles.nav_links}>
        <Link href="/">Accueil</Link>
        <Link href="#nos-pizzas">Nos Pizzas</Link>
        <Link href="/nous-trouver">Nous trouver</Link>
        <Link href="actualites">Actualités</Link>
  </div>*/}
      <div className={styles.nav_phone}>
        <Image src="/phone.png" alt="phone icon" width={20} height={20} />

        <a href="tel:0557545717">Appelez-nous</a>
      </div>
      <div className={styles.nav_burger}>
        <Burger />
      </div>
    </nav>
  );
};

export default Navbar;
