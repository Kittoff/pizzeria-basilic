import React, { useRef, useState } from "react";
import Image from "next/image";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import CenterAligner from "./CenterAligner";
import { testimonials } from "./data.js";

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
    <section className="flex bg-primary p-2 rounded-2xl justify-center items-center min-h-[500px]">
      <div>
        <div className="flex gap-4 pb-3 mt-3 justify-end h-20">
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
        {testimonials.slice(startIndex, endIndex).map((single, index) => (
          <div key={index} className="mb-6">
            <FaQuoteLeft />
            <div className=" min-h-60 pb-[20px] flex items-start gap4">
              <div className="text-primary"></div>
              <p className=" leading-[30px]  text-bg font-bold">
                {single.testimonial}
              </p>
            </div>
            <div className="flex justify-between items-end">
              <div className="flex gap-4 items-center ">
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
                <div>
                  <h6>{single.name}</h6>
                  <span>{single.profession}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
