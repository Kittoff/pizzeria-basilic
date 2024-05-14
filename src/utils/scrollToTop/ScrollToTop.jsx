import React, { useState, useEffect, forwardRef } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollToTop = forwardRef((props, ref) => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div ref={ref} className="top-[50vh] right-0 sm:right-2 fixed">
      {showTopBtn && (
        <FaArrowCircleUp
          className="icon-position icon-style cursor-pointer text-[20px] sm:text-[60px]"
          onClick={goToTop}
        />
      )}
    </div>
  );
});

ScrollToTop.displayName = "ScrollToTop";

export default ScrollToTop;
