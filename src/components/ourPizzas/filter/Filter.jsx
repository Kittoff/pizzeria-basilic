import React, { useState, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { useCollapse } from "react-collapsed";
import Smile from "../../smile/index.jsx";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

const categories = [
  "Classiques",
  "Fromagères",
  "Gourmandes",
  "Délicieuses",
  "Epicées",
  "Végétariennes",
  "Océanes",
  "Bruschettas",
];

const defaultCategories = [...categories];

const variants = {
  open: { opacity: 1, y: 0 },
  close: { opacity: 0, y: 20 },
};

const Filter = ({ onUpdateCategoriesMobile }) => {
  const [startAnimation, setStartAnimation] = useState(false);
  const config = {
    duration: 1000,
  };

  const { getCollapseProps, getToggleProps, isExpanded, setExpanded } =
    useCollapse(config);
  const [selectedCategories, setSelectedCategories] =
    useState(defaultCategories);
  const [allSelected, setAllSelected] = useState(true);
  const collapseRef = useRef();

  const handleCategoryToggle = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((cat) => cat !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updatedCategories);
    onUpdateCategoriesMobile(updatedCategories);
  };

  const handleClick = () => {
    setStartAnimation(!startAnimation);
  };

  const handleAllToggle = () => {
    const updatedCategories = allSelected ? [] : defaultCategories;
    setSelectedCategories(updatedCategories);
    onUpdateCategoriesMobile(updatedCategories);
    setAllSelected(!allSelected);
  };

  useEffect(() => {
    const allCategoriesSelected = categories.every((category) =>
      selectedCategories.includes(category)
    );
    setAllSelected(allCategoriesSelected);
    if (allCategoriesSelected) {
      onUpdateCategoriesMobile(selectedCategories);
    }
  }, [selectedCategories, onUpdateCategoriesMobile]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (collapseRef.current && !collapseRef.current.contains(event.target)) {
        setExpanded(false);
        setStartAnimation(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setExpanded]);

  return (
    <div
      className={` filter-container relative w-[200px] ${poppins.className}`}
      ref={collapseRef}
      onClick={() => handleClick()}
    >
      <motion.div
        animate={{
          width: isExpanded ? 335 : 200,
          transition: { duration: 1, ease: "easeInOut" },
        }}
        className="bg-primary flex w-[12.5rem] h-[2.875rem] items-center pl-[2.25em] pr-[1.25em] content-between rounded-2xl text-[18px] font-extrabold text-bg select-none z-[1] relative"
        {...getToggleProps()}
      >
        Catégories <Smile startAnimation={startAnimation} />
      </motion.div>
      <div className="w-[200px]">
        <motion.div
          animate={{
            width: isExpanded ? 335 : 200,
            transition: { duration: 1, ease: "easeInOut" },
          }}
          {...getCollapseProps()}
          className="box-border bg-primary w-[200px] relative -top-[14px] rounded-b-2xl "
        >
          <div
            className={`${styles.checkbox_container} h-[400px] flex flex-col content-evenly p-[15px]`}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={` flex items-center bg-customWhite rounded-2xl text-bg w-[200px] mb-2 checked:border-e-bg`}
            >
              <input
                className="box-border w-[20px] h-[20px] m-[6px] p-0 appearance-none bg-transparent outline-none mr-[25px] border-s-bg rounded-full border-2 ring-offset-0 focus:ring-0 focus:shadow-none"
                type="checkbox"
                id="all"
                checked={allSelected}
                onChange={handleAllToggle}
              />
              <label
                className="after:w-[200px] after:h-[32px] after:bg-transparent after:absolute after:left-[15px] after:rounded-2xl -mt-[4px]"
                htmlFor="all"
              >
                Toutes
              </label>
            </div>
            {categories.map((category, index) => (
              <motion.div
                variants={variants}
                animate={isExpanded ? "open" : "close"}
                initial={{ opacity: 0, y: 20 }}
                transition={{
                  delay: isExpanded
                    ? 0.12 * index
                    : 0.06 * (categories.length - index - 1),
                  staggerDirection: isExpanded ? 1 : -1,
                }}
                key={index}
                className=" flex items-center bg-customWhite rounded-2xl text-bg w-[200px] mb-2"
              >
                <input
                  className="box-border w-[20px] h-[20px] m-[6px] p-0 appearance-none bg-transparent outline-none mr-[25px] border-s-bg rounded-full border-2 ring-offset-0 focus:ring-0 focus:shadow-none"
                  type="checkbox"
                  id={category}
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryToggle(category)}
                />
                <label
                  className="after:w-[200px] after:h-[32px] after:bg-transparent after:absolute after:left-[15px] after:rounded-2xl -mt-[4px]"
                  htmlFor={category}
                >
                  {category}
                </label>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Filter;
