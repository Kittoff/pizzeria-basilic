import React from "react";
import Image from "next/image.js";
import { useUrlChange } from "@/src/utils/sectionTitle/useUrlChange.jsx";

const Contacts = () => {
  const urlChanged = useUrlChange();

  // Données des contacts
  const contactsData = [
    {
      iconSrc: "/phone2.png",
      altText: "phone icon",
      text: "05 57 54 57 17",
      textSize: "text-12 sm:text-3xl",
    },
    {
      iconSrc: "/mail2.png",
      altText: "arobase icon",
      text: "basilic.pizza@gmail.com",
      textSize: "text-[0.7rem] sm:text-3xl",
      link: "mailto:basilic.pizza@gmail.com",
    },
    {
      iconSrc: "/pin2.png",
      altText: "pin location icon",
      text: "29 AVENUE DU GENERAL DE GAULLE 33550 LANGOIRAN",
      textSize: "text-[0.6rem] sm:text-[15px] 2xl:text-[22px]",
    },
  ];

  return (
    <div className="bg-primary w-[10.438rem] h-[10.438rem] flex flex-col items-center text-bg sm:w-1/2 2xl:h-[308px] 2xl:w-[420px]">
      <h2 className={` text-[1.875rem] font-bold 2xl:text-[3.75rem]`}>
        Contacts
      </h2>
      <div className="flex flex-col justify-between pb-2 h-full pl-2 items-start">
        {contactsData.map((contact, index) => (
          <div key={index} className="flex items-center mb-2">
            <div>
              <Image
                className={`mr-1  2xl:h-[40px] 2xl:w-[40px] ${
                  urlChanged && "-z-50"
                }`}
                alt={contact.altText}
                src={contact.iconSrc}
                width={20}
                height={20}
              />
            </div>
            {contact.link ? (
              <a href={contact.link} className={`ml-2 ${contact.textSize}`}>
                {contact.text}
              </a>
            ) : (
              <span className={`ml-2 ${contact.textSize}`}>{contact.text}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
