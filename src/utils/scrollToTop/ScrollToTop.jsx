import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1000) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className=" top-28 right-0 fixed">
      {" "}
      {showTopBtn && (
        <FaArrowCircleUp
          className="icon-position icon-style cursor-pointer"
          onClick={goToTop}
          size={20}
        />
      )}{" "}
    </div>
  );
};
export default ScrollToTop;
