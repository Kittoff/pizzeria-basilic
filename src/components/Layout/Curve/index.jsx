"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { text, curve, translate, childrenIn } from "./anim";
import styles from "./style.module.scss";
import { inter } from "@/src/utils/font.jsx";

const routes = {
  "/#pizza": "Nos Pizzas",
  "/": "Accueil",
  "/news": "Actualités",
  "/contact": "Contact",
};

const anim = (variants) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};

export default function Curve({ children, backgroundColor }) {
  const router = useRouter();
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });
  const getCurrentRouteText = () => {
    const currentRoute = router.asPath.split("#")[1] || router.route;
    return routes[currentRoute] || "Nos Pizzas";
  };
  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      className={`${styles.page} ${styles.curve}`}
      style={{ backgroundColor }}
    >
      <div
        style={{
          opacity: dimensions.width == null ? 1 : 0,
          height: "100vh - 300",
        }}
        className={styles.background}
      />
      <motion.p
        className={`${styles.route} ${inter.className}`}
        {...anim(text)}
      >
        {getCurrentRouteText()}
      </motion.p>
      {dimensions.width != null && <SVG {...dimensions} />}
      <motion.div {...anim(childrenIn)}>{children}</motion.div>
    </div>
  );
}

const SVG = ({ height, width }) => {
  const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

  const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

  return (
    <motion.svg className={`${styles.svgCurve}`} {...anim(translate)}>
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};
