import React from "react";
import styles from "./style.module.scss";
import Image from "next/image.js";
import { inter } from "@/src/utils/font.jsx";
import { motion } from "framer-motion";

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
        <div className="flex 2xl:gap-4 text-center 2xl:mt-[50%]">
          <div className="2xl:m-auto">
            <div className="text-[12px] 2xl:text-[25px]">Grande</div>
            <div className="2xl:text-[20px]">{big_price}€</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex 2xl:gap-4 text-center 2xl:mt-auto">
          <div className="2xl:m-auto">
            <div className="text-[12px] 2xl:text-[25px]">Grande</div>
            <div className="2xl:text-[20px]">{big_price}€</div>
          </div>
          <div className="w-[35px]  h-[50px] 2xl:h-[60px] relative">
            <Image
              src="/delimiter_card.svg"
              // width={2}
              // height={10}
              layout="fill"
              alt="pizza card delimiter"
            />
          </div>
          <div className="2xl:m-auto">
            <div className="text-[12px] 2xl:text-[25px]">Petite</div>

            <div className="2xl:text-[20px]">{small_price}€</div>
          </div>
        </div>
      );
    }
  };
  return (
    <motion.div
      className="pizza-card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={` ${inter.className} 2xl:w-[270px] 2xl:h-[540px] rounded-[15px] flex flex-col items-center justify-center relative mt-[60px] bg-bg bg-gradient-to-b from-bg to-gray w-[9.375rem] h-[309px] gap-5 pt-[50px]`}
      >
        <div className="absolute -top-[30px]">
          <Image
            src="/pizza.png"
            width={370}
            height={180}
            alt="pizza card image"
          />
        </div>
        <div className="h-[30px] text-center">
          <div className=" uppercase font-bold text-primary 2xl:text-[30px]">
            {name}
          </div>
        </div>
        <div className="bg-primary text-bg font-normal h-[129px] 2xl:h-[240px] flex items-center">
          <div className="text-[0.75rem] 2xl:text-[25px] text-center p-3">
            {formatIngredients(ingredients)}
          </div>
        </div>

        <div className="h-[30px] flex items-center justify-center">
          {verifyPrice(price)}
        </div>
      </div>
    </motion.div>
  );
};

export default PizzaCard;
