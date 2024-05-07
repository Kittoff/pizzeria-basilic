import React, { useRef, useState } from "react";
import Image from "next/image";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import CenterAligner from "./CenterAligner";
import { testimonials } from "./data.js";
import { AnimatePresence, motion } from "framer-motion";

export default function Testimonial() {
  const sliderRef = useRef();
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;
  const testimonialsPerPage = 1; // Nombre de témoignages par page
  const startIndex = current * testimonialsPerPage;
  const endIndex = startIndex + testimonialsPerPage;

  const previous = () => {
    setCurrent(
      current === 0 ? Math.ceil(length / testimonialsPerPage) - 1 : current - 1
    );
  };

  const next = () => {
    setCurrent(
      current === Math.ceil(length / testimonialsPerPage) - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="mb-10 rounded-3xl bg-primary min-h-96 max-w-[600px]">
      <div className=" h-14 pr-5 pt-1">
        <div className="flex gap-4 pb-3 mt-3 justify-end h-20 ">
          <div
            className="bg-bg h-9 w-9 flex items-center p-2 rounded-full justify-center"
            onClick={previous}
          >
            <MdOutlineArrowBackIos />
          </div>
          <div
            className="bg-bg h-9 w-9 flex items-center p-2 rounded-full justify-center"
            onClick={next}
          >
            <MdOutlineArrowForwardIos />
          </div>
        </div>
      </div>
      <div>
        {testimonials.slice(startIndex, endIndex).map((single, index) => (
          <AnimatePresence key={index}>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "-100%" }}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="pt-5 grid grid-cols-[auto_1fr] bg-bg xs:text-lg 2xl:text-3xl font-bold pl-5 pr-5 pb-10"
              key={index}
              custom={current === index ? 0 : current > index ? 100 : -100}
            >
              coucou
              <FaQuoteLeft className="text-[50px]" />
              <div className="mt-10">{single.testimonial}</div>
            </motion.div>
            <div className="flex items-center">
              <div className="border-8 inline-block rounded-full border-customWhite p-2.5">
                <div className=" mx-auto w-[100px] h-[100px] rounded-full  overflow-hidden">
                  <Image
                    src={single.img}
                    x
                    alt="Boy"
                    className="w-full h-full object-cover"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <div className=" ml-5">
                <h6 className="text-xl font-bold">{single.name}</h6>
                <span>{single.profession}</span>
              </div>
            </div>
          </AnimatePresence>
        ))}
      </div>
    </section>
    // <section className="flex bg-primary p-2 rounded-2xl justify-center items-center min-h-[500px] max-w-[600px]">
    //   <div className="flex gap-4 pb-3 mt-3 justify-end h-20 ">
    //     <div
    //       className="bg-bg h-9 w-9 flex items-center p-2 rounded-full justify-center"
    //       onClick={previous}
    //     >
    //       <MdOutlineArrowBackIos />
    //     </div>
    //     <div
    //       className="bg-bg h-9 w-9 flex items-center p-2 rounded-full justify-center"
    //       onClick={next}
    //     >
    //       <MdOutlineArrowForwardIos />
    //     </div>
    //   </div>
    //   <div className="bg-red-400">
    //     {testimonials.slice(startIndex, endIndex).map((single, index) => (
    //       <div key={index} className="mb-6">
    //         <FaQuoteLeft />
    //         <div className=" min-h-[8rem] pb-[20px] flex items-start gap4">
    //           <div className="text-primary"></div>
    //           <p className=" leading-[30px]  text-bg font-bold">
    //             {single.testimonial}
    //           </p>
    //         </div>
    //         <div className="flex justify-between items-end">
    //           <div className="flex gap-4 items-center ">
    //             <div className="border-8 inline-block rounded-full border-customWhite p-2.5">
    //               <div className=" mx-auto w-[100px] h-[100px] rounded-full  overflow-hidden">
    //                 <Image
    //                   src={single.img}
    //                   x
    //                   alt="Boy"
    //                   className="w-full h-full object-cover"
    //                   width={100}
    //                   height={100}
    //                 />
    //               </div>
    //             </div>
    //             <div>
    //               <h6>{single.name}</h6>
    //               <span>{single.profession}</span>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </section>
  );
}
