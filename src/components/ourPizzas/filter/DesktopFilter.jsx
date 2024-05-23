import React, { useEffect, useState } from "react";

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

const DesktopFilter = ({ onUpdateCategories }) => {
  const [selectedCategories, setSelectedCategories] =
    useState(defaultCategories);
  const [allSelected, setAllSelected] = useState(true);

  const handleCategoryToggle = (category) => {
    if (category === "Toutes nos pizzas") {
      handleAllToggle();
      return;
    }

    // Prevent deselecting if it's the only selected category
    if (
      selectedCategories.length === 1 &&
      selectedCategories.includes(category)
    ) {
      return;
    }

    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((cat) => cat !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);
    onUpdateCategories(updatedCategories);
  };

  const handleAllToggle = () => {
    const updatedCategories = allSelected ? ["Classiques"] : defaultCategories;
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

  return (
    <div className="flex flex-wrap w-[940px] justify-center gap-4 m-auto">
      <div
        onClick={() => handleAllToggle()}
        className={`cursor-pointer select-none flex items-center rounded-[30px] h-[50px] pl-[43px] pr-[43px] text-bg ${
          selectedCategories.length === categories.length
            ? "bg-primary"
            : "bg-customWhite"
        }`}
      >
        Toutes nos pizzas
      </div>
      {categories.map((category, index) => (
        <div className="" key={index}>
          <div
            onClick={() => handleCategoryToggle(category)}
            className={`cursor-pointer select-none flex items-center rounded-[30px] h-[50px] pl-[43px] pr-[43px] text-bg ${
              selectedCategories.includes(category)
                ? selectedCategories.length === 1
                  ? "bg-primary cursor-not-allowed"
                  : "bg-primary"
                : "bg-customWhite"
            }`}
          >
            {category}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DesktopFilter;
