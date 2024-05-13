import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { mountAnim, rotateX } from "../anim";
import { useRef } from "react";
import Link from "next/link";

export default function MenuLink({ data, index, closeMenu }) {
  const { title, description, images, to } = data;
  const outer = useRef(null);
  const inner = useRef(null);

  return (
    <motion.div
      variants={rotateX}
      {...mountAnim}
      custom={index}
      className={styles.el}
    >
      <Link onClick={() => closeMenu()} href={to}>
        {title}
      </Link>
      <div ref={outer} className={styles.outer}>
        <div ref={inner} className={styles.inner}>
          {[...Array(2)].map((_, index) => {
            return (
              <div key={index} className={styles.container}>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
