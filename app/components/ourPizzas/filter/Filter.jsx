import React, { useState, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import Image from "next/image.js";
import { useCollapse } from "react-collapsed";

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
const defaultCategories = [
  "Classiques",
  "Fromagères",
  "Gourmandes",
  "Délicieuses",
  "Epicées",
  "Végétariennes",
  "Océanes",
  "Bruschettas",
];

const Filter = ({ onUpdateCategories }) => {
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
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setExpanded]);

  return (
    <div
      className={`${styles.collapsible} ${styles.container}`}
      ref={collapseRef}
    >
      <motion.div
        animate={{
          width: isExpanded ? 335 : 200,
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
        }}
        className={styles.button}
        {...getToggleProps()}
      >
        Catégories{" "}
        <Image
          alt="filter edit image"
          src={isExpanded ? "/close.svg" : "/edit.svg"}
          width={25}
          height={25}
        />
      </motion.div>
      <div className={styles.content}>
        <motion.div
          animate={{
            width: isExpanded ? 335 : 200,
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
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
              <div key={index} className={styles.checkboxes}>
                <input
                  type="checkbox"
                  id={category}
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryToggle(category)}
                />
                <label htmlFor={category}>{category}</label>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Filter;
