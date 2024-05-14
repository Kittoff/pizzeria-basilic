import OurPizzas from "../components/ourPizzas/OurPizzas.jsx";
import Hero from "../components/hero/Hero.jsx";
import dynamic from "next/dynamic.js";
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
        <OurPizzas />
      </CurveNoSSR>
    </main>
  );
}
