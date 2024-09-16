"use client";

import React, { useRef } from "react";
import { FiPhoneCall } from "react-icons/fi";
import DesktopLinks from "./DesktopLinks";
import AnimatedLink from "@/src/utils/AnimatedLinks";

const DesktopMenu = () => {
  const animatedLinkRef = useRef(null);

  const handlePhoneClick = () => {
    window.location.href = "tel:0557545717";
  };

  const handleMouseEnter = () => {
    animatedLinkRef.current?.setIsHovered(true);
  };

  const handleMouseLeave = () => {
    animatedLinkRef.current?.setIsHovered(false);
  };

  return (
    <div className="hidden lg:block">
      <nav className="flex items-center justify-between">
        {/* DESKTOP */}
        <DesktopLinks />

        <div
          className="w-[200px] h-[50px] text-[0.625rem] flex items-center justify-center bg-primary rounded-[30px] p-2 cursor-pointer"
          onClick={handlePhoneClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FiPhoneCall size={27} className="text-bg mr-2" />
          <div className="text-bg text-[25px] font-bold lg:text-lg cursor-pointer">
            <div className="relative">
              <AnimatedLink
                ref={animatedLinkRef}
                title="05 57 54 57 17"
                href=""
                hoveredColor={"text-customWhite"}
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DesktopMenu;
