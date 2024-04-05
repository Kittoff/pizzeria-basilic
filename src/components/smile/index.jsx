import React from "react";
import {
  head,
  smile,
  eye_l,
  eye_r,
  happy_smile,
  happy_eye_l,
  happy_eye_r,
  shape1,
  shape1_morphed,
  shape2,
  shape2_morphed,
  shape3_morphed,
} from "./paths";
import styles from "./style.module.scss";
import SVGMorph from "../svgMorph";
export default function Smile({ startAnimation }) {
  return (
    <div className={styles.svgContainer}>
      <svg className={styles.svg} viewBox="0 0 32 32">
        <SVGMorph
          paths={[shape1_morphed, shape1, shape1_morphed]}
          startAnimation={startAnimation}
        />
        <SVGMorph
          startAnimation={startAnimation}
          paths={[shape2_morphed, shape1, shape2_morphed]}
        />
        <SVGMorph
          startAnimation={startAnimation}
          paths={[shape3_morphed, shape1, shape3_morphed]}
        />
      </svg>
    </div>
  );
}
