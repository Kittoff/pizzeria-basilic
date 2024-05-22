import AnimatedLink from "@/src/utils/animatedLink/AnimatedLink.jsx";
import { useLenis } from "@studio-freight/react-lenis";
import Link from "next/link.js";
import React from "react";

const navLinks = [
  { title: "Accueil", href: "/" },
  { title: "Nos Pizzas", href: "/#pizza" },
  { title: "Nous trouver", href: "/contact" },
  { title: "Actualités", href: "/news" },
];

const DesktopLinks = () => {
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
  return (
    <div
      className={` flex min-w-[47.063rem] text-[18px] justify-evenly font-bold`}
    >
      <div className="contents uppercase">
        {navLinks.map((link, i) => {
          return (
            <div key={i} className="relative">
              <AnimatedLink href={link.href} title={link.title} />
            </div>
          );
        })}
        {/* <div className="border relative">
          <AnimatedLink title="Accueil" href={"/"} /> */}
        {/* <Link href="/">Accueil</Link>
          <Link className="absolute top-10" href="/">
            Accueil
          </Link> */}
        {/* </div> */}
      </div>
      {/* 
      <Link href="/#pizza" onClick={() => handleClick("#pizza")}>
        Nos Pizzas
      </Link>
      <Link href="/contact">Nous trouver</Link>
      <Link href="news">Actualités</Link> */}
    </div>
  );
};

export default DesktopLinks;
