// import "@/styles/globals.css";
import "../globals.css";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import BurgerHeader from "../components/header/index.jsx";
import "@/src/styles/styles.scss";
import Image from "next/image.js";
import { poppins } from "../utils/font.jsx";
import {
  LenisInstance,
  ScrollToParams,
  useLenis,
} from "@studio-freight/react-lenis";
import SmoothScroll from "../components/SmoothScroll.jsx";
import Preloader from "../components/preloader/Preloader.jsx";
import { useEffect, useState } from "react";
export default function App({ Component, pageProps, router }) {
  // Using the useLenis hook to get a LenisInstance
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <AnimatePresence>{isLoading && <Preloader />}</AnimatePresence>
      <div className="main">
        <div className="w-[335px] 2xl:max-w-[1500px]  m-auto xl:w-[1260px] lg:w-[1004px] md:w-[748px] sm:w-[635px]">
          {/* MENU BURGER */}
          <div className="lg:hidden">
            <BurgerHeader />
          </div>

          {/* MENU DESKTOP */}

          <SmoothScroll>
            <AnimatePresence mode="wait">
              <Component key={router.route} {...pageProps} />
            </AnimatePresence>
          </SmoothScroll>
        </div>
      </div>
    </>
  );
}
