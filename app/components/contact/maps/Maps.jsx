import Image from "next/image.js";
import React from "react";
import styles from "./style.module.scss";

const Maps = () => {
  return (
    <div className={styles.maps_container}>
      {/* <Image src="/maps.png" alt="maps contact" width={167} height={167} /> */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2835.6029916892744!2d-0.4042339241032739!3d44.707303783621235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd553d8fa3a9687f%3A0x297ac6b8e3ebf35!2s29%20Av.%20du%20G%C3%A9n%C3%A9ral%20de%20Gaulle%2C%2033550%20Langoiran!5e0!3m2!1sfr!2sfr!4v1712307620147!5m2!1sfr!2sfr"
        width={334}
        height={334}
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Maps;
