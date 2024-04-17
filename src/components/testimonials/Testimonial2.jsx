"use client";
import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import styles from "./style.module.scss";
import { testimonials } from "./data.js";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { useRouter } from "next/router.js";
import { useUrlChange } from "@/src/utils/sectionTitle/useUrlChange.jsx";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export const Testimonial = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const urlChanged = useUrlChange();

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const imageIndex = wrap(0, testimonials.length, page);
  const router = useRouter();

  return (
    <>
      <section className="my-8 ">
        <div className="container flex flex-col items-center p-4 mx-auto space-y-6 ">
          <div className="-my-8 w-full justify-evenly bg-primary pb-9  flex gap-4 p-1 h-11 rounded-2xl">
            <div
              className="bg-bg h-9 w-9 flex items-center p-2 rounded-full justify-center"
              onClick={() => paginate(-1)}
            >
              <MdOutlineArrowBackIos />
            </div>
            <div
              className="bg-bg h-9 w-9 flex items-center p-2 rounded-full justify-center"
              onClick={() => paginate(1)}
            >
              <MdOutlineArrowForwardIos />
            </div>
          </div>
          {testimonials.map((single, index) => (
            <AnimatePresence key={index} initial={false} custom={direction}>
              {index === imageIndex && (
                <div className={`absolute ${urlChanged && "-z-50"}`}>
                  <motion.div
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = swipePower(offset.x, velocity.x);

                      if (swipe < -swipeConfidenceThreshold) {
                        paginate(1);
                      } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                      }
                    }}
                  >
                    <p className=" px-6 py-2 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl lg:max-w-2xl xl:max-w-4xl dark:text-gray-700">
                      <FaQuoteLeft className="text-primary" />
                      {single.testimonial}
                    </p>
                    <div className="flex justify-center space-x-3">
                      <Image
                        src={single.img}
                        x
                        alt="Boy"
                        className="rounded-full"
                        width={100}
                        height={100}
                      />
                      <div>
                        <p className="leading-tight">{single.name}</p>
                        <p className="text-sm leading-tight dark:text-gray-700">
                          {single.profession}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          ))}
        </div>
      </section>
    </>
  );
};
