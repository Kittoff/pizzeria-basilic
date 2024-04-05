import React from "react";
import styles from "./style.module.scss";
import Title from "@/src/utils/sectionTitle/Title.jsx";
import Hours from "@/src/components/contact/hours/Hours.jsx";
import Contacts from "@/src/components/contact/contacts/Contacts.jsx";
import Maps from "@/src/components/contact/maps/Maps.jsx";

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
