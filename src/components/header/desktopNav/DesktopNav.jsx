import { poppins } from "@/src/utils/font.jsx";
import { useLenis } from "@studio-freight/react-lenis";
import Image from "next/image.js";
import Link from "next/link.js";
import React, { useRef } from "react";

const DesktopNav = () => {
  const lenisInstance = useLenis();

  // Function for smooth scrolling
  const handleClick = (targetElement) => {
    if (targetElement) {
      const scrollToOptions = {
        // Customize scroll options if needed
        offset: 0,
        lerp: 0.1,
        duration: 1.5,
        easing: (rawValue) => rawValue, // Example easing function
        immediate: false,
        lock: false,
        force: false,
      };

      lenisInstance.scrollTo(targetElement, scrollToOptions);
    }
  };
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
        <div
          className={`${poppins.className} flex content-between min-w-[47.063rem] text-[18px] justify-evenly font-bold`}
        >
          <Link href="/">Accueil</Link>
          <Link href="/#pizza" onClick={() => handleClick("#pizza")}>
            Nos Pizzas
          </Link>
          <Link href="/contact">Nous trouver</Link>
          <Link href="news">Actualités</Link>
        </div>
        <div className=" w-[250px] h-[70px] text-[0.625rem] flex items-center justify-center bg-primary content-center rounded-[30px]">
          <Image
            className="mr-2"
            src="/phone2.png"
            alt="phone icon"
            width={27}
            height={29}
          />

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
