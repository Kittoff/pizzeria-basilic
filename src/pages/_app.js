// import "@/styles/globals.css";
import "../globals.css";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import Header from "../components/header/index.jsx";
// import "@/styles/styles.scss";

export default function App({ Component, pageProps, router }) {
  return (
    <div className="main">
      <div className="wrapper">
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
