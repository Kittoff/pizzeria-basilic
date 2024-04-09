/* eslint-disable react/no-unescaped-entities */
import Title from "@/src/utils/sectionTitle/Title.jsx";
import React from "react";
import styles from "./style.module.scss";
import Curve from "@/src/components/Layout/Curve/index.jsx";
import Testimonial from "@/src/components/testimonials/Testimonial.jsx";

const News = () => {
  return (
    <main className="mt-[5.625em]">
      <Curve>
        <Title title="Actualités" />
        <h2 className="text-[1.563rem] font-bold text-center">
          Ce qu'ils pensent de nous
        </h2>
        <Testimonial />
      </Curve>
    </main>
  );
};

export default News;
