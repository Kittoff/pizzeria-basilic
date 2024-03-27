import Image from "next/image";
import Hero from "./components/hero/Hero.jsx";
import OurPizzas from "./components/ourPizzas/OurPizzas.jsx";

export default function Home() {
  return (
    <main>
      <Hero />
      <OurPizzas />
    </main>
  );
}
