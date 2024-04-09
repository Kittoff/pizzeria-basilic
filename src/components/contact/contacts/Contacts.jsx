import React from "react";
import { inter } from "@/src/utils/font.jsx";
import Image from "next/image.js";

const Contacts = () => {
  return (
    <div className="bg-primary w-[10.438rem] h-[10.438rem] flex flex-col items-center text-bg">
      <h2 className={`${inter.className} xs:text-[1.875rem] font-bold`}>
        Contacts
      </h2>
      <div className="flex flex-col justify-between pb-2 h-full pl-2">
        <div className="flex items-center">
          <Image
            className="mr-1"
            alt="phone icon"
            src="/phone.png"
            width={15}
            height={15}
          />
          <span className="text-12">05 57 54 57 17</span>
        </div>
        <div className="flex items-center">
          <Image
            className="mr-1"
            alt="arobase icon"
            src="/mail.png"
            width={15}
            height={15}
          />
          <a href="mailto:basilic.pizza@gmail.com" className="text-[0.7rem]">
            basilic.pizza@gmail.com
          </a>
        </div>
        <div className="flex items-center">
          <Image
            className="mr-1"
            alt="pin location icon"
            src="/pin.png"
            width={20}
            height={20}
          />
          <span className="text-[0.6rem]">
            29 AVENUE DU GENERAL DE GAULLE 33550 LANGOIRAN
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
