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
      className={`${styles.collapsible} ${styles.container} ${poppins.className}`}
      ref={collapseRef}
      onClick={() => handleClick()}
    >
      <motion.div
        animate={{
          width: isExpanded ? 335 : 200,
          transition: { duration: 1, ease: "easeInOut" },
        }}
        className={styles.button}
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
      <div className={styles.content}>
        <motion.div
          animate={{
            width: isExpanded ? 335 : 200,
            transition: { duration: 1, ease: "easeInOut" },
          }}
          {...getCollapseProps()}
          className={styles.dropdown_content}
        >
          <div className={styles.checkbox_container}>
            <div className={styles.checkboxes}>
              <input
                type="checkbox"
                id="all"
                checked={allSelected}
                onChange={handleAllToggle}
              />
              <label htmlFor="all">Toutes</label>
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
                className={styles.checkboxes}
              >
                <input
                  type="checkbox"
                  id={category}
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryToggle(category)}
                />
                <label htmlFor={category}>{category}</label>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Filter;
