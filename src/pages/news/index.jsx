import Title from "@/src/utils/sectionTitle/Title.jsx";
import React from "react";
import styles from "./style.module.scss";
import Curve from "@/src/components/Layout/Curve/index.jsx";
import Testimonial from "@/src/components/testimonials/Testimonial.jsx";

const News = () => {
  return (
    <main className={styles.news}>
      <Curve>
        <Title title="Actualités" />
        <h2>Ce qu'ils pensent de nous</h2>
        <Testimonial />
      </Curve>
    </main>
  );
};

export default News;
