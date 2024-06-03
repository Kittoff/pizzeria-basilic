import React, { useState, useEffect } from "react";
import Title from "@/src/utils/sectionTitle/Title.jsx";
import Filter from "./filter/Filter.jsx";
import PizzaCard from "./pizzaCard/PizzaCard.jsx";
import DesktopFilter from "./filter/DesktopFilter.jsx";
import { useMediaQuery } from "@/src/utils/sectionTitle/hooks.jsx";
import { pizzas } from "./data.js";
import { motion } from "framer-motion";
import { useRouter } from "next/router.js";

const OurPizzas = () => {
  const router = useRouter();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [scrollToPizza, setScrollToPizza] = useState(false);
  const is2XL = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    if (router.asPath === "/#pizzas") {
      setScrollToPizza(true);
    }
  }, [router.asPath]);

  useEffect(() => {
    if (scrollToPizza) {
      const element = document.getElementById("pizza");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setScrollToPizza(false);
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
      initial="initial"
      animate="enter"
      exit="exit"
      id="pizza"
      className="pt-[20px] mt-[50px]"
    >
      <Title title="Nos Pizzas" />
      {is2XL ? (
        <div className="2xl:block ">
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
              <div className="grid xs:grid-cols-[1fr,1fr] gap-5 sm:grid-cols-test 2xl:gap-20 justify-items-center">
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
