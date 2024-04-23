import React from "react";
import styles from "./style.module.scss";
import Image from "next/image.js";
import { inter } from "../font.jsx";

const Title = ({ title, id }) => {
  return (
    <div
      className={`${inter.className} ${id} flex flex-col items-center mb-[50px]`}
    >
      {/* <Image alt="delimiter up" src="/delimiter.svg" width={107} height={0} /> */}
      <svg
        className="w-[107px] h-[10px] 2xl:w-[204px]"
        // height="10"
        // width="107"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          className="stroke-primary stroke-[10] 2xl:w-[204px]"
          x1="0"
          y1="0"
          x2="300"
        />
      </svg>
      <h1 className="text-[40px] font-bold mt-[-4px] 2xl:text-[80px]">
        {title}
      </h1>
      <svg
        className="w-[107px] h-[10px] 2xl:w-[204px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line className="stroke-primary stroke-[10]" x1="0" y1="0" x2="300" />
      </svg>
      {/* <Image alt="delimiter down" src="/delimiter.svg" width={107} height={0} /> */}
    </div>
  );
};

export default Title;
