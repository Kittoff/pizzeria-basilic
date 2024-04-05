import React from "react";
import styles from "./style.module.scss";
import Title from "../utils/sectionTitle/Title.jsx";
import Hours from "../components/contact/hours/Hours.jsx";
import Contacts from "../components/contact/contacts/Contacts.jsx";
import Maps from "../components/contact/maps/Maps.jsx";

const Contact = () => {
  return (
    <main className={styles.contact}>
      <Title title="Nous trouver" />
      <div className={styles.maps_contacts}>
        <Hours />
        <Contacts />
      </div>
      <div className={styles.hours}>
        <Maps />
      </div>
    </main>
  );
};

export default Contact;
