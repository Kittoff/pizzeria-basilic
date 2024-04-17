// import "@/styles/globals.css";
import "../globals.css";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import Header from "../components/header/index.jsx";
import "@/src/styles/styles.scss";
export default function App({ Component, pageProps, router }) {
  return (
    <div className="main">
      <div className="w-[335px] m-auto  sm:w-[635px]">
        <Header />
        {/* <div className="header">
          <Link href="/">Home</Link>
          <Link href="/contact">Nous joindre</Link>
          <Link href="/contact">Contact</Link>
        </div> */}
        <AnimatePresence mode="wait">
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
      </div>
    </div>
  );
}