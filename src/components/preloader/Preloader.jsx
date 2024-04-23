import React from "react";
import { motion } from "framer-motion";
import { slideUp } from "./anim.js";
import TextSpinnerLoader from "./Spinner.jsx";
const Preloader = () => {
  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="h-full w-full bg-bg fixed top-0 left-0 z-[999] text-primary flex items-center justify-center"
    >
      <TextSpinnerLoader />
    </motion.div>
  );
};

export default Preloader;
