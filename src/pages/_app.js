// import "@/styles/globals.css";
import "../globals.css";
import { AnimatePresence } from "framer-motion";
import BurgerHeader from "../components/header/index.jsx";
import "@/src/styles/styles.scss";
import SmoothScroll from "../components/SmoothScroll.jsx";
import Preloader from "../components/preloader/Preloader.jsx";
import { useEffect, useState } from "react";
import Footer from "../components/footer/index.jsx";
import ScrollToTop from "../utils/scrollToTop/ScrollToTop.jsx";
import DesktopNav from "../components/header/desktopNav/DesktopNav.jsx";

export default function App({ Component, pageProps, router }) {
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
          <DesktopNav />
          <SmoothScroll>
            <AnimatePresence mode="wait">
              <Component key={router.route} {...pageProps} />
            </AnimatePresence>
          </SmoothScroll>
        </div>
      </div>
      <ScrollToTop />
      <Footer />
    </>
  );
}
