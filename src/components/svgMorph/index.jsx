"use client";
import { interpolate } from "flubber";
import React, { useState, useEffect } from "react";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";

export default function SVGMorph({ paths, startAnimation }) {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);

  const arrayOfIndex = paths.map((_, i) => i);
  const path = useTransform(progress, arrayOfIndex, paths, {
    mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 1 }),
  });

  useEffect(() => {
    let animation;
    if (startAnimation && pathIndex < paths.length - 1) {
      animation = animate(progress, pathIndex + 1, {
        duration: 1.5,
        delay: -0.5,
        ease: "easeInOut",
      });
    } else if (!startAnimation) {
      console.log("coucou");
      animation = animate(progress, pathIndex - 1, {
        duration: 1,
        ease: "easeInOut",
      });
    }
  }, [startAnimation, pathIndex, paths.length, progress]);

  return <motion.path fill="#181818" d={path} />;
}
