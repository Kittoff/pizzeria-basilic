"use client";
import React, { useState, useEffect } from "react";
import Burger from "./Burger";
import Stairs from "./Stairs";
import { AnimatePresence } from "framer-motion";
import Menu from "./Menu";
import { useRouter } from "next/router";

const BurgerHeader = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Effect to handle body overflow
  useEffect(() => {
    if (isMenuOpen) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling
      document.body.style.overflow = "unset";
    }
    // Reset menu state on route change

    // Cleanup function to reset overflow on component unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.asPath]);

  return (
    <div className="lg:hidden">
      <Burger
        openMenu={() => {
          setIsMenuOpen(true);
        }}
      />

      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <div>
            <Stairs />
            <Menu closeMenu={() => setIsMenuOpen(false)} />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BurgerHeader;
