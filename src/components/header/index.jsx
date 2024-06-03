"use client";
import { useEffect, useState } from "react";
import Burger from "./burger";
import Stairs from "./stairs";
import Menu from "./menu";
import { AnimatePresence } from "framer-motion";
import Image from "next/image.js";
import { FiPhoneCall } from "react-icons/fi";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1050) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    if (router.asPath === "/") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router]);
  useEffect(() => {
    if (menuIsOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [menuIsOpen]);

  return (
    <div className="relative flex items-center justify-between h-[50px]">
      <div>
        <Image
          src="/logo.png"
          alt="pizza basilic logo"
          width={50}
          height={50}
        />
      </div>
      <div
        className={`${
          showTopBtn && " border-2 border-bg z-[2] fixed"
        } w-[112px] h-[28px] text-[0.625rem] flex items-center flex-initial bg-primary justify-center rounded-[30px] text-bg font-bold `}
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
      <div>
        <Burger
          openMenu={() => {
            setMenuIsOpen(true);
          }}
        />
        <AnimatePresence mode="wait">
          {menuIsOpen && (
            <div>
              <Stairs />
              <Menu
                closeMenu={() => {
                  setMenuIsOpen(false);
                }}
              />
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
