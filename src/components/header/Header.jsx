import React from "react";
import BurgerHeader from "./burgerMenu/BurgerHeader";
import DesktopMenu from "./desktopMenu/DesktopMenu";
import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";
import { motion } from "framer-motion";

// TODO : scrollTopbutton pour que le bouton callus se décale : voir branche responsive

const Header = () => {
  return (
    <div className="flex justify-between items-center lg:justify-center">
      <Image
        className="w-24 lg:w-[146px]"
        src="/logo.png"
        alt="pizza basilic logo"
        // layout="responsive"
        width={146}
        height={146}
      />
      <div
        className={`lg:hidden w-[112px] h-[28px] text-[0.625rem] flex items-center flex-initial bg-primary justify-center rounded-[30px] text-bg font-bold `}
      >
        <motion.div
          animate={{
            rotate: [0, 20, 20, 0, 0, 0, 20, 20, 0, 0],
          }}
          transition={{
            duration: 0.2,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        >
          <FiPhoneCall size={15} className="text-bg mr-2" />
        </motion.div>

        <a href="tel:0557545717">Appelez-nous</a>
      </div>
      <BurgerHeader />
      <DesktopMenu />
    </div>
  );
};

export default Header;
