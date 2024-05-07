import Image from "next/image";
import OurPizzas from "../components/ourPizzas/OurPizzas.jsx";
import Hero from "../components/hero/Hero.jsx";
import dynamic from "next/dynamic.js";
// import Curve from "../components/Layout/Curve/index.jsx";
const CurveNoSSR = dynamic(
  () => import("../components/Layout/Curve/index.jsx"),
  {
    ssr: false,
  }
);
export default function Home() {
  return (
    <main>
      <CurveNoSSR>
        <Hero />
        {/* <Smile /> */}
        <OurPizzas />
      </CurveNoSSR>
    </main>
  );
}
