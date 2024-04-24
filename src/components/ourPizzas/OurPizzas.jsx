import React, { useState, useEffect } from "react";
import Image from "next/image.js";
import Title from "@/src/utils/sectionTitle/Title.jsx";
import Filter from "./filter/Filter.jsx";
import PizzaCard from "./pizzaCard/PizzaCard.jsx";
import DesktopFilter from "./filter/DesktopFilter.jsx";
import { useMediaQuery } from "@/src/utils/sectionTitle/hooks.jsx";
import { pizzas } from "./data.js";
import { motion } from "framer-motion";
import { useRouter } from "next/router.js";

const variants = {
  initial: {
    // backgroundColor: "red",
  },
  enter: {
    // backgroundColor: "blue",
  },
  // exit: { backgroundColor: "green" },
};

const OurPizzas = () => {
  const router = useRouter();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [scrollToPizza, setScrollToPizza] = useState(false); // Ajout d'un état pour le défilement
  const is2XL = useMediaQuery("(min-width: 1440px)"); // Taille pour 2XL

  useEffect(() => {
    // Utilisation de setTimeout pour déclencher le défilement vers #pizza après 3 secondes
    if (router.asPath === "/#pizza") {
      const timer = setTimeout(() => {
        setScrollToPizza(true);
      }, 500);

      return () => clearTimeout(timer); // Nettoyage du timer lors du démontage du composant
    }
  }, [router.asPath]);

  useEffect(() => {
    // Défilement vers #pizza
    if (scrollToPizza) {
      const element = document.getElementById("pizza");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" }); // Ajout de l'option block pour garantir un défilement vers le haut de l'élément
        setScrollToPizza(false); // Réinitialisation de l'état après le défilement
      }
    }
  }, [scrollToPizza]);

  const handleCategoriesUpdate = (categories) => {
    setSelectedCategories(categories);
  };

  const filteredPizzas = pizzas.filter((categorie) =>
    selectedCategories.includes(categorie.category)
  );

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="enter"
      exit="exit"
      id="pizza"
      className="pt-[20px] mt-[50px]"
    >
      <Title title="Nos Pizzas" />
      {is2XL ? (
        <div className="2xl:block xs:hidden">
          <DesktopFilter onUpdateCategories={handleCategoriesUpdate} />
        </div>
      ) : (
        <div className="2xl:hidden">
          <Filter onUpdateCategoriesMobile={handleCategoriesUpdate} />
        </div>
      )}
      <div className="pizza-card">
        <div className="flex flex-col items-center sm:items-stretch">
          {filteredPizzas.map((category) => (
            <div key={category.category}>
              <h2 className="mt-[3.125em] mb-[0.938em] text-[1.375rem] 2xl:text-[2.375rem]">
                {category.category}
              </h2>
              <div className="grid grid-cols-[1fr,1fr] gap-[20px] content-between  2xl:grid-cols-[1fr,1fr,1fr,1fr] 2xl:justify-center">
                {category.pizzas.map((pizza) => (
                  <PizzaCard
                    key={pizza.id}
                    name={pizza.name}
                    big_price={pizza.price.grande}
                    small_price={pizza.price.petite}
                    ingredients={pizza.ingredients}
                    price={pizza.price}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default OurPizzas;
