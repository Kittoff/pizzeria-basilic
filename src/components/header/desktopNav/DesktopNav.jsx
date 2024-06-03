import Image from "next/image.js";
import Link from "next/link.js";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import DesktopLinks from "./DesktopLinks.jsx";
const DesktopNav = () => {
  return (
    <div className="xxs:hidden xs:hidden lg:block 2xl:block">
      <nav className="flex items-center justify-between">
        <div className="logo">
          <Image
            src="/logo.png"
            alt="pizza basilic logo"
            width={146}
            height={146}
          />
        </div>

        {/* DESKTOP */}
        <DesktopLinks />

        <div className=" w-[250px] h-[70px] text-[0.625rem] flex items-center justify-center bg-primary content-center rounded-[30px]">
          <FiPhoneCall size={27} className="text-bg lg:mr-2 xl:mr-5" />

          <a
            className="text-bg text-[25px] font-medium xl:text-[25px] lg:text-[16px]"
            href="tel:0557545717"
          >
            05 57 54 57 17
          </a>
        </div>
      </nav>
    </div>
  );
};

export default DesktopNav;
