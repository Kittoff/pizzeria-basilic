/* eslint-disable react/no-unescaped-entities */
import Title from "@/src/utils/sectionTitle/Title.jsx";
import React from "react";
import styles from "./style.module.scss";
import Curve from "@/src/components/Layout/Curve/index.jsx";
import Testimonial from "@/src/components/testimonials/Testimonial.jsx";
import Reviews from "@/src/components/testimonials/Reviews.jsx";
import dynamic from "next/dynamic.js";
import { testimonials } from "../../components/testimonials/data.js";
import { motion } from "framer-motion";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// import { Testimonial } from "@/src/components/testimonials/Testimonial2.jsx";
const ReviewsNoSSR = dynamic(
  () => import("@/src/components/testimonials/Reviews.jsx"),
  {
    ssr: false,
  }
);
const News = () => {
  return (
    <main className="mt-[5.625em] flex justify-center ">
      <Curve>
        <Title title="Actualités" />
        <h2 className="text-[1.563rem] font-bold text-center 2xl:text-[2rem] text-primary">
          Ce qu'ils pensent de nous
        </h2>
        {/* <Testimonial /> */}
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 300: 1, 500: 3, 700: 3, 900: 5 }}
        >
          <Masonry
            className="lg:!w-[900px] xs:!w-[500px] md:!w-[700px] sm:!w-[500px] xl:!w-[1000px] 2xl:!w-[1000px]"
            columnsCount={1}
            gutter="15px"
          >
            {" "}
            {testimonials.map((single, index) => (
              <ReviewsNoSSR
                date={single.date}
                name={single.name}
                title={single.title}
                testimonial={single.testimonial}
                key={index}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Curve>
    </main>
  );
};

export default News;
