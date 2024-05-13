"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { text, curve, translate, childrenIn } from "./anim";
import styles from "./style.module.scss";

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
  const currentPath = router.asPath.split("#")[0]; // Récupérer le chemin actuel sans l'ancre

  let activeRoute;

  // Récupérer le chemin actuel sans l'ancre

  // Vérifier si le chemin actuel correspond à une route spécifique
  switch (currentPath) {
    case "/":
      activeRoute = "Accueil";
      break;
    case "/news":
      activeRoute = "Actualités";
      break;
    case "/contact":
      activeRoute = "Contact";
      break;
    default:
      activeRoute = "Accueil"; // Par défaut, si aucune correspondance n'est trouvée
  }

  // Si le chemin actuel est "/#pizza", utiliser "Nos Pizzas" comme texte de route
  if (currentPath === "/" && router.asPath.includes("#pizza")) {
    activeRoute = "Nos Pizzas";
  }
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
      <motion.p className={`${styles.route} `} {...anim(text)}>
        {/* {routes[router.route]} */}
        {/* {routes[router.asPath]} */}
        {activeRoute}
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
