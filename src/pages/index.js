import Image from "next/image";
import OurPizzas from "../components/ourPizzas/OurPizzas.jsx";
import Hero from "../components/hero/Hero.jsx";
export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Smile /> */}
      <OurPizzas />
    </main>
  );
}
