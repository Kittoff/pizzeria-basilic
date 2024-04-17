import React from "react";
import styles from "./style.module.scss";
import Image from "next/image.js";
import { inter } from "../font.jsx";

const Title = ({ title }) => {
  return (
    <div className={`${inter.className} flex flex-col items-center mb-[50px]`}>
      {/* <Image alt="delimiter up" src="/delimiter.svg" width={107} height={0} /> */}
      <svg height="10" width="107" xmlns="http://www.w3.org/2000/svg">
        <line className="stroke-primary stroke-[10]" x1="0" y1="0" x2="107" />
      </svg>
      <h1 className="text-[40px] font-bold mt-[-4px]">{title}</h1>
      <svg height="10" width="107" xmlns="http://www.w3.org/2000/svg">
        <line className="stroke-primary stroke-[10]" x1="0" y1="0" x2="107" />
      </svg>
      {/* <Image alt="delimiter down" src="/delimiter.svg" width={107} height={0} /> */}
    </div>
  );
};

export default Title;
