import Image from "next/image";
import OurPizzas from "../components/ourPizzas/OurPizzas.jsx";
import Hero from "../components/hero/Hero.jsx";
import Curve from "../components/Layout/Curve/index.jsx";
import useScrollIntoView from "../utils/useScrollIntoView.jsx";
export default function Home() {
  // useScrollIntoView();
  return (
    <main>
      <Curve>
        <Hero />
        {/* <Smile /> */}
        <OurPizzas />
      </Curve>
    </main>
  );
}
