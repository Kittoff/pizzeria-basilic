import React from "react";
import styles from "./style.module.scss";
import Image from "next/image.js";
import { inter } from "@/app/utils/font.jsx";

const PizzaCard = ({ name, ingredients, small_price, big_price, price }) => {
  const formatIngredients = (elements) => {
    const result = elements.map((element, index) => {
      if (index === elements.length - 1) {
        return element + ".";
      } else {
        return element + ",";
      }
    });

    return result.join(" ");
  };
  const verifyPrice = (price) => {
    if (Object.keys(price).length === 1) {
      return (
        <div className={styles.pizza_size}>
          <div className={styles.big}>
            <div className={styles.title}>Grande</div>
            <div className={styles.price}>{big_price}€</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.pizza_size}>
          <div className={styles.big}>
            <div className={styles.title}>Grande</div>
            <div className={styles.price}>{big_price}€</div>
          </div>
          <div className={styles.card_delimiter}>
            <Image
              src="/delimiter_card.svg"
              width={2}
              height={10}
              alt="pizza card delimiter"
            />
          </div>
          <div className={styles.small}>
            <div className={styles.title}>Petite</div>

            <div className={styles.price}>{small_price}€</div>
          </div>
        </div>
      );
    }
  };
  return (
    <div>
      <div className={` ${inter.className} ${styles.card_container}`}>
        <div className={styles.card_image}>
          <Image
            src="/pizza.png"
            width={370}
            height={180}
            alt="pizza card image"
          />
        </div>
        <div className={styles.header}>
          <div className={styles.card_title}>{name}</div>
        </div>
        <div className={styles.body}>
          <div className={styles.card_description}>
            {formatIngredients(ingredients)}
          </div>
        </div>

        <div className={styles.footer}>
          {verifyPrice(price)}
          {/* <div className={styles.pizza_size}>
            <div className={styles.big}>
              <div className={styles.title}>Grande</div>
              <div className={styles.price}>{big_price}€</div>
            </div>
            <div className={styles.card_delimiter}>
              <Image
                src="/delimiter_card.svg"
                width={2}
                height={10}
                alt="pizza card delimiter"
              />
            </div>
            <div className={styles.small}>
              <div className={styles.title}>Petite</div>

              <div className={styles.price}>{small_price}€</div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
