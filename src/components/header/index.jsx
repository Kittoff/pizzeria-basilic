"use client";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import Burger from "./burger";
import Stairs from "./stairs";
import Menu from "./menu";
import { AnimatePresence } from "framer-motion";
import Image from "next/image.js";

export default function Index() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    if (menuIsOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [menuIsOpen]);

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Image
          src="/logo.png"
          alt="pizza basilic logo"
          width={50}
          height={50}
        />
        {/* 186 desktop */}
      </div>
      <div className={styles.nav_phone}>
        <Image src="/phone2.png" alt="phone icon" width={20} height={20} />

        <a href="tel:0557545717">Appelez-nous</a>
      </div>
      <div className={styles.nav_burger}>
        <Burger
          openMenu={() => {
            setMenuIsOpen(true);
          }}
        />
        <AnimatePresence mode="wait">
          {menuIsOpen && (
            <>
              <Stairs />
              <Menu
                closeMenu={() => {
                  setMenuIsOpen(false);
                }}
              />
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
