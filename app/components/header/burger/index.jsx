"use client";
import styles from "./style.module.scss";

export default function index({ openMenu }) {
  return (
    <div
      onClick={() => {
        openMenu();
      }}
      className={styles.button}
    >
      <div className={styles.background}></div>
      <svg
        viewBox="-2.4 -2.4 28.80 28.80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
        width={44}
        height={44}
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M1 12C1 11.4477 1.44772 11 2 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H2C1.44772 13 1 12.5523 1 12Z"
            fill="#f4f4f4"
          ></path>{" "}
          <path
            d="M1 4C1 3.44772 1.44772 3 2 3H22C22.5523 3 23 3.44772 23 4C23 4.55228 22.5523 5 22 5H2C1.44772 5 1 4.55228 1 4Z"
            fill="#f4f4f4"
          ></path>{" "}
          <path
            d="M1 20C1 19.4477 1.44772 19 2 19H22C22.5523 19 23 19.4477 23 20C23 20.5523 22.5523 21 22 21H2C1.44772 21 1 20.5523 1 20Z"
            fill="#f4f4f4"
          ></path>{" "}
        </g>
      </svg>
      <p>Menu</p>
    </div>
  );
}
