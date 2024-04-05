"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import Image from "next/image.js";
import Title from "@/src/utils/sectionTitle/Title.jsx";
import Filter from "./filter/Filter.jsx";
import PizzaCard from "./pizzaCard/PizzaCard.jsx";

const pizzas = [
  {
    category: "Classiques",
    pizzas: [
      {
        id: 1,
        name: "mozza",
        price: { grande: 9.5, petite: 5.75 },
        ingredients: ["sauce tomate", "mozza", "tomates cerise"],
      },
      {
        id: 2,
        name: "basilic",
        price: { grande: 9.9, petite: 5.95 },
        ingredients: ["sauce tomate", "mozza", "basilic", "tomates cerise"],
      },
      {
        id: 3,
        name: "ambra",
        price: { grande: 11.5, petite: 6.75 },
        ingredients: ["sauce tomate", "mozza", "jambon blanc supérieur"],
      },
      {
        id: 4,
        name: "napolitaine",
        price: { grande: 12.5, petite: 7.25 },
        ingredients: [
          "sauce tomate",
          "mozza",
          "anchois frais",
          "capre",
          "olive",
          "origan",
        ],
      },
      {
        id: 5,
        name: "reine",
        price: { grande: 12.9, petite: 7.25 },
        ingredients: [
          "sauce tomate",
          "mozza",
          "jambon blanc supérieur",
          "champignon frais",
          "olive",
          "origan",
        ],
      },
      {
        id: 6,
        name: "bologna",
        price: { grande: 12.5, petite: 7.45 },
        ingredients: [
          "sauce tomate",
          "mozza",
          "viande de boeuf hachée",
          "oignon rouge frais",
          "olive",
          "thym",
        ],
      },
      {
        id: 7,
        name: "calzone (chausson)",
        price: { grande: 13 },
        ingredients: [
          "sauce tomate",
          "mozza",
          "jambon blanc supérieur",
          "champignon frais",
          "olive",
          "origan",
          "oeuf bio",
        ],
      },
    ],
  },
  {
    category: "Fromagères",
    pizzas: [
      {
        id: 8,
        name: "capri",
        price: { grande: 11, petite: 6.5 },
        ingredients: ["crème", "mozza", "chèvre", "crème de balsamique"],
      },
      {
        id: 9,
        name: "fromaggio",
        price: { grande: 12.5, petite: 7.25 },
        ingredients: [
          "crème",
          "mozza",
          "chèvre",
          "gorgonzola",
          "miel d'apiculteur (miel de gascoigne)",
          "noix",
        ],
      },
      {
        id: 10,
        name: "tutti",
        price: { grande: 12.9, petite: 7.45 },
        ingredients: [
          "crème",
          "mozza",
          "chèvre",
          "reblochon",
          "gorgonzola",
          "origan",
        ],
      },
    ],
  },
  {
    category: "Gourmandes",
    pizzas: [
      {
        id: 11,
        name: "gorgo",
        price: { grande: 13.5, petite: 7.75 },
        ingredients: [
          "crème",
          "mozza",
          "gorgonzola",
          "jambon pays 18 mois",
          "roquette",
        ],
      },
      {
        id: 12,
        name: "luchon",
        price: { grande: 13.5, petite: 7.75 },
        ingredients: [
          "crème",
          "mozza",
          "reblochon",
          "oignon rouge frais",
          "thym",
          "jambon pays 18 mois",
          "roquette",
        ],
      },
      {
        id: 13,
        name: "bettini",
        price: { grande: 13.5, petite: 7.5 },
        ingredients: [
          "sauce tomate",
          "mozza",
          "jambon de pays 18 mois",
          "roquette",
          "parmesan",
        ],
      },
      {
        id: 14,
        name: "parma",
        price: { grande: 14, petite: 8 },
        ingredients: [
          "sauce tomate",
          "mozza",
          "jambon de pays 18 mois",
          "pesto",
          "parmesan",
        ],
      },
      {
        id: 15,
        name: "st lary",
        price: { grande: 13.5, petite: 7.75 },
        ingredients: [
          "crème",
          "mozza",
          "pancetta",
          "oignon rouge frais",
          "reblochon",
          "thym",
        ],
      },
      {
        id: 16,
        name: "coppa",
        price: { grande: 14, petite: 8 },
        ingredients: ["sauce tomate", "mozza", "coppa", "pesto", "parmesan"],
      },
    ],
  },
  {
    category: "Epicées",
    pizzas: [
      {
        id: 17,
        name: "maroco",
        price: { grande: 13.5, petite: 7.75 },
        ingredients: [
          "sauce tomate",
          "mozza",
          "émincé de poulet roti",
          "merguez",
          "cumin",
        ],
      },
      {
        id: 18,
        name: "poulette",
        price: { grande: 14, petite: 8 },
        ingredients: [
          "sauce tomate",
          "mozza",
          "émincé de poulet roti",
          "poivron frais",
          "oignon rouge frais",
          "piment d'espelette",
        ],
      },
      {
        id: 19,
        name: "indiano",
        price: { grande: 14, petite: 8 },
        ingredients: [
          "crème",
          "mozza",
          "émincé de poulet roti",
          "poivron frais",
          "oignon rouge frais",
          "curry",
          "feuille de coriandre",
        ],
      },
      {
        id: 20,
        name: "bubu",
        price: { grande: 16, petite: 9 },
        ingredients: [
          "sauce tomate",
          "mozza",
          "viande de boeuf hachée",
          "merguez",
          "poivron frais",
          "oignon rouge frais",
          "chorizo",
        ],
      },
    ],
  },
  {
    category: "Délicieuses",
    pizzas: [
      {
        id: 21,
        name: "deliziosa",
        price: { grande: 16.5, petite: 9.25 },
        ingredients: [
          "sauce tomate",
          "champignon frais",
          "magret",
          "foie gras",
          "mozza",
          "persillade",
        ],
      },
      {
        id: 22,
        name: "piuma",
        price: { grande: 15, petite: 8.5 },
        ingredients: [
          "crème",
          "mozza",
          "magret",
          "chèvre",
          "miel d'apiculteur (miel de gascoigne)",
          "persillade",
        ],
      },
    ],
  },
  {
    category: "Végétariennes",
    pizzas: [
      {
        id: 23,
        name: "primavera",
        price: { grande: 13, petite: 7.5 },
        ingredients: [
          "sauce tomate",
          "mozza",
          "champignon frais",
          "oignon rouge frais",
          "olive",
          "basilic",
          "tomate cerise",
        ],
      },
    ],
  },
  {
    category: "Océanes",
    pizzas: [
      {
        id: 24,
        name: "portofino",
        price: { grande: 15, petite: 8.5 },
        ingredients: [
          "crème",
          "mozza",
          "saumon fumé",
          "ciboulette",
          "huile d'olive au citron",
        ],
      },
    ],
  },
  {
    category: "Bruschettas",
    pizzas: [
      {
        id: 25,
        name: "pancetta",
        price: { grande: 10 },
        ingredients: [
          "crème",
          "mozza",
          "pancetta",
          "pesto",
          "parmesan",
          "tomates cerise",
        ],
      },
      {
        id: 26,
        name: "quadri",
        price: { grande: 9 },
        ingredients: ["crème", "mozza", "chèvre", "gorgonzola", "miel", "noix"],
      },
      {
        id: 27,
        name: "bettina",
        price: { grande: 10 },
        ingredients: [
          "sauce tomate",
          "mozza",
          "jambon italien",
          "parmesan",
          "roquette",
        ],
      },
      {
        id: 28,
        name: "modena",
        price: { grande: 9 },
        ingredients: ["sauce tomate", "mozza", "coppa", "parmesan", "pesto"],
      },
      {
        id: 29,
        name: "cabanon",
        price: { grande: 9 },
        ingredients: [
          "crème",
          "mozza",
          "saumon fumé",
          "ciboulette",
          "huile d'olive au citron",
        ],
      },
      {
        id: 30,
        name: "tout fromage",
        price: { grande: 10 },
        ingredients: ["crème", "mozza", "gorgonzola", "reblochon", "chèvre"],
      },
    ],
  },
];

const OurPizzas = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoriesUpdate = (categories) => {
    setSelectedCategories(categories);
  };

  const filteredPizzas = pizzas.filter((categorie) =>
    selectedCategories.includes(categorie.category)
  );

  return (
    <div className={styles.our_pizzas}>
      <Title title="Nos Pizzas" />
      <Filter onUpdateCategories={handleCategoriesUpdate} />
      <div className="pizza-card">
        <div className={styles.card}>
          {filteredPizzas.map((category) => (
            <div key={category.category}>
              <h1 className={styles.category}>{category.category}</h1>
              <div className={styles.pizzas_container}>
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
