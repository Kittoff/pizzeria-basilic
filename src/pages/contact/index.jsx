import React from "react";
import styles from "./style.module.scss";
import Title from "@/src/utils/sectionTitle/Title.jsx";
import Hours from "@/src/components/contact/hours/Hours.jsx";
import Contacts from "@/src/components/contact/contacts/Contacts.jsx";
import Maps from "@/src/components/contact/maps/Maps.jsx";
import Curve from "@/src/components/Layout/Curve/index.jsx";

const Contact = () => {
  return (
    <main className={styles.contact}>
      <Curve>
        <Title title="Nous trouver" />
        <div className="2xl:flex ">
          <div className={styles.maps_contacts}>
            <Hours />
            <Contacts />
          </div>
          <div className="w-[334px] h-full sm:w-full ">
            <Maps />
          </div>
        </div>
      </Curve>
    </main>
  );
};

export default Contact;
