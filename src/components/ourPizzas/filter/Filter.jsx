import React, { useState, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import Image from "next/image.js";
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

const Filter = ({ onUpdateCategories }) => {
  const [startAnimation, setStartAnimation] = useState(false);
  const config = {
    duration: 1000,
    onExpandStart: () => console.log("INFO: onExpandStart triggered."),
    onExpandEnd: () => console.log("INFO: onExpandEnd triggered."),
    onCollapseStart: () => console.log("INFO: onCollapseStart triggered."),
    onCollapseEnd: () => console.log("INFO: onCollapseEnd triggered."),
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
    onUpdateCategories(updatedCategories);
  };

  const handleClick = () => {
    setStartAnimation(!startAnimation);
  };

  const handleAllToggle = () => {
    const updatedCategories = allSelected ? [] : defaultCategories;
    setSelectedCategories(updatedCategories);
    onUpdateCategories(updatedCategories);
    setAllSelected(!allSelected);
  };

  useEffect(() => {
    const allCategoriesSelected = categories.every((category) =>
      selectedCategories.includes(category)
    );
    setAllSelected(allCategoriesSelected);
    if (allCategoriesSelected) {
      onUpdateCategories(selectedCategories);
    }
  }, [selectedCategories, onUpdateCategories]);

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
      className={`${styles.collapsible} filter-container relative w-[200px] ${poppins.className}`}
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
        {/* <div className={styles.test}> */}
        Catégories <Smile startAnimation={startAnimation} />
        {/* </div> */}
        {/* <Image
          alt="filter edit image"
          src={isExpanded ? "/close.svg" : "/edit.svg"}
          width={25}
          height={25}
        /> */}
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
          >
            <div
              className={`${styles.checkboxes} flex items-center bg-customWhite rounded-2xl text-bg w-[200px] `}
            >
              <input
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
                className=" flex items-center bg-customWhite rounded-2xl text-bg w-[200px] "
              >
                <input
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
