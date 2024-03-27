import React, { useState, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import Image from "next/image.js";
import { useCollapse } from "react-collapsed";

const config = {
  duration: 1000,
  onExpandStart: () => {
    console.log("INFO: onExpandStart triggered.");
  },
  onExpandEnd: () => {
    console.log("INFO: onExpandEnd triggered.");
  },
  onCollapseStart: () => {
    console.log("INFO: onCollapseStart triggered.");
  },
  onCollapseEnd: () => {
    console.log("INFO: onCollapseEnd triggered.");
  },
};

const Filter = ({ onUpdateCategories }) => {
  const { getCollapseProps, getToggleProps, isExpanded, setExpanded } =
    useCollapse(config);
  const [selectedCategories, setSelectedCategories] = useState([
    "Classiques",
    "Fromagères",
    "Gourmandes",
    "Délicieuses",
  ]);
  const [allSelected, setAllSelected] = useState(true);

  const handleCategoryToggle = (category) => {
    let updatedCategories;
    if (selectedCategories.includes(category)) {
      updatedCategories = selectedCategories.filter((cat) => cat !== category);
    } else {
      updatedCategories = [...selectedCategories, category];
    }
    setSelectedCategories(updatedCategories);
    onUpdateCategories(updatedCategories);
  };

  const handleAllToggle = () => {
    if (allSelected) {
      setSelectedCategories([]);
      onUpdateCategories([]); // Appel lorsque "Toutes" est désélectionnée
    } else {
      setSelectedCategories([
        "Classiques",
        "Fromagères",
        "Gourmandes",
        "Délicieuses",
      ]);
      onUpdateCategories([
        "Classiques",
        "Fromagères",
        "Gourmandes",
        "Délicieuses",
      ]); // Appel lorsque "Toutes" est sélectionnée
    }
    setAllSelected(!allSelected);
  };

  const categories = ["Classiques", "Fromagères", "Gourmandes", "Délicieuses"];

  useEffect(() => {
    const allCategoriesSelected = categories.every((category) =>
      selectedCategories.includes(category)
    );

    setAllSelected(allCategoriesSelected);

    if (allCategoriesSelected) {
      onUpdateCategories(selectedCategories); // Appel lorsque toutes les catégories sont sélectionnées
    }
  }, [selectedCategories, categories, onUpdateCategories]);

  const collapseRef = useRef();

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
    <>
      <div
        className={` ${styles.collapsible} ${styles.container}`}
        ref={collapseRef}
      >
        <div className={styles.button} {...getToggleProps()}>
          Catégories{" "}
          <Image
            alt="filter edit image"
            src={isExpanded ? "/close.png" : "/edit.svg"}
            width={25}
            height={25}
          />
        </div>
        <div className={styles.content}>
          <div {...getCollapseProps()} className={styles.test}>
            <div className={styles.truc}>
              <div>
                <input
                  type="checkbox"
                  id="all"
                  checked={allSelected}
                  onChange={handleAllToggle}
                />
                <label htmlFor="all">Toutes</label>
              </div>
              {categories.map((category, index) => (
                <div key={index}>
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
          </div>
        </div>
        {/* <div className={styles.selectedCategories}>
          Catégories sélectionnées :
          {selectedCategories.length === 0
            ? " Aucune sélection"
            : selectedCategories.map((category, index) => (
                <span key={index}>{category}, </span>
              ))}
        </div> */}
      </div>
    </>
  );
};

export default Filter;
