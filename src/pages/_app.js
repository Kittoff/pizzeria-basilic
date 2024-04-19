// import "@/styles/globals.css";
import "../globals.css";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import BurgerHeader from "../components/header/index.jsx";
import "@/src/styles/styles.scss";
import Image from "next/image.js";
import { poppins } from "../utils/font.jsx";
export default function App({ Component, pageProps, router }) {
  return (
    <div className="main">
      <div className="w-[335px] 2xl:max-w-[1500px]  m-auto xl:w-[1260px] lg:w-[1004px] md:w-[748px] sm:w-[635px]">
        {/* MENU BURGER */}
        <div className="2xl:hidden">
          <BurgerHeader />
        </div>

        {/* MENU DESKTOP */}
        <div className="xs:hidden lg:block 2xl:block">
          <nav className="flex items-center justify-between">
            <div className="logo">
              <Image
                src="/logo.png"
                alt="pizza basilic logo"
                width={146}
                height={146}
              />
              {/* 186 desktop */}
            </div>

            {/* DESKTOP */}
            <div
              className={`${poppins.className} flex content-between min-w-[47.063rem] text-[18px] justify-evenly font-bold`}
            >
              <Link href="/">Accueil</Link>
              <Link href="#nos-pizzas">Nos Pizzas</Link>
              <Link href="/contact">Nous trouver</Link>
              <Link href="news">Actualités</Link>
            </div>
            <div className=" w-[250px] h-[70px] text-[0.625rem] flex items-center justify-center bg-primary content-center rounded-[30px]">
              <Image
                className="mr-2"
                src="/phone.png"
                alt="phone icon"
                width={27}
                height={29}
              />

              <a
                className="text-bg text-[25px] font-medium"
                href="tel:0557545717"
              >
                05 57 54 57 17
              </a>
            </div>
            {/* <div className={styles.nav_burger}>
        <Burger />
      </div> */}
          </nav>
        </div>

        <AnimatePresence mode="wait">
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
      </div>
    </div>
  );
}
