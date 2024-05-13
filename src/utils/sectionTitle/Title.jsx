import React from "react";
import { inter } from "../font.jsx";

const Title = ({ title, id }) => {
  return (
    <div
      className={`${inter.className} ${id} flex flex-col items-center mb-[50px]`}
    >
      <svg
        className="w-[107px] h-[10px] 2xl:w-[204px]"
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
    </div>
  );
};

export default Title;
