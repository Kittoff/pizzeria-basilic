"use-client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link.js";

const lettersSpace = 100;

const AnimatedLink = ({ title, href }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative cursor-pointer overflow-hidden"
    >
      <Link href={href}>
        <AnimatedWord
          title={title}
          animation={letterAnimation}
          isHovered={isHovered}
        />
      </Link>
      <div className="absolute top-0 text-primary">
        <Link href={href}>
          <AnimatedWord
            title={title}
            animation={letterAnimation2}
            isHovered={isHovered}
          />
        </Link>
      </div>
    </motion.div>
  );
};

const letterAnimation = {
  rest: {
    y: 0,
  },
  hover: {
    y: -lettersSpace,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "tween",
    },
  },
};
const letterAnimation2 = {
  rest: {
    y: lettersSpace,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "tween",
    },
  },
  hover: {
    y: 0,
  },
};
const titleAnimation = {
  rest: {
    transition: {
      staggerChildren: 0.003,
    },
  },
  hover: {
    transition: {
      staggerChildren: 0.003,
    },
  },
};
const AnimatedWord = ({ title, animation, isHovered }) => {
  return (
    <motion.span
      variants={titleAnimation}
      initial="rest"
      animate={isHovered ? "hover" : "rest"}
      className="whitespace-nowrap relative"
    >
      {title.split("").map((char, i) => {
        return char === " " ? (
          <span key={i}>&nbsp;</span>
        ) : (
          <motion.span
            variants={animation}
            className="relative inline-block whitespace-nowrap"
          >
            {char}
          </motion.span>
        );
      })}
    </motion.span>
  );
};
export default AnimatedLink;
