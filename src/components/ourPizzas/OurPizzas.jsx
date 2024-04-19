"use client";
import React, { useState } from "react";
import Image from "next/image.js";
import Title from "@/src/utils/sectionTitle/Title.jsx";
import Filter from "./filter/Filter.jsx";
import PizzaCard from "./pizzaCard/PizzaCard.jsx";
import DesktopFilter from "./filter/DesktopFilter.jsx";
import { useMediaQuery } from "@/src/utils/sectionTitle/hooks.jsx";
import { pizzas } from "./data.js";

const OurPizzas = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const is2XL = useMediaQuery("(min-width: 1440px)"); // Taille pour 2XL

  const handleCategoriesUpdate = (categories) => {
    console.log("cat mobile: ", categories);
    setSelectedCategories(categories);
  };

  const filteredPizzas = pizzas.filter((categorie) =>
    selectedCategories.includes(categorie.category)
  );

  return (
    <div className="mt-[50px]">
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
              <h1 className="mt-[3.125em] mb-[0.938em] text-[1.375rem]">
                {category.category}
              </h1>
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
    </div>
  );
};

export default OurPizzas;
